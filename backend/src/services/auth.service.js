/**
 * Authentication Business Logic Service.
 *
 * Implements user registration, credential validation, token issuance,
 * token refresh, and session state operations.
 */

import userRepository from '../repositories/user.repository.js';
import { hashPassword, comparePassword } from '../utils/password.util.js';
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from '../utils/jwt.util.js';

class AuthService {
  /**
   * Register a new user account.
   *
   * @param {object} registrationData - User registration parameters.
   * @returns {Promise<object>} Auth tokens and created user object.
   */
  async register(registrationData) {
    const { firstName, lastName, email, password } = registrationData;

    // 1. Check if account already exists
    const existingUser = await userRepository.findByEmail(email);
    if (existingUser) {
      const error = new Error('An account with this email address already exists');
      error.statusCode = 409;
      throw error;
    }

    // 2. Hash raw password
    const hashedPassword = await hashPassword(password);

    // 3. Persist new user entity
    const newUser = await userRepository.createUser({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      provider: 'local',
      isVerified: false,
      profileCompleted: false,
    });

    // 4. Generate JWT tokens
    const tokenPayload = { id: newUser._id, email: newUser.email };
    const accessToken = generateAccessToken(tokenPayload);
    const refreshToken = generateRefreshToken(tokenPayload);

    return {
      user: newUser.toJSON(),
      accessToken,
      refreshToken,
    };
  }

  /**
   * Authenticate local user credentials.
   *
   * @param {string} email - Account email.
   * @param {string} password - Candidate password.
   * @returns {Promise<object>} Auth tokens and authenticated user object.
   */
  async login(email, password) {
    // 1. Fetch user including password hash
    const user = await userRepository.findByEmail(email, true);
    if (!user) {
      const error = new Error('Invalid email or password');
      error.statusCode = 401;
      throw error;
    }

    // 2. Verify password match
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      const error = new Error('Invalid email or password');
      error.statusCode = 401;
      throw error;
    }

    // 3. Issue fresh tokens
    const tokenPayload = { id: user._id, email: user.email };
    const accessToken = generateAccessToken(tokenPayload);
    const refreshToken = generateRefreshToken(tokenPayload);

    return {
      user: user.toJSON(),
      accessToken,
      refreshToken,
    };
  }

  /**
   * Refresh an expired or active Access Token using a valid Refresh Token.
   *
   * @param {string} refreshToken - JWT Refresh Token string.
   * @returns {Promise<object>} Authenticated user object and new Access Token.
   */
  async refreshAccessToken(refreshToken) {
    if (!refreshToken) {
      const error = new Error('Refresh token missing');
      error.statusCode = 401;
      throw error;
    }

    // 1. Verify refresh token signature & expiration
    let decoded;
    try {
      decoded = verifyRefreshToken(refreshToken);
    } catch (err) {
      const error = new Error('Invalid or expired refresh token');
      error.statusCode = 401;
      throw error;
    }

    // 2. Find user by decoded token ID
    const user = await userRepository.findById(decoded.id);
    if (!user) {
      const error = new Error('User no longer exists');
      error.statusCode = 404;
      throw error;
    }

    // 3. Issue new Access Token only
    const tokenPayload = { id: user._id, email: user.email };
    const accessToken = generateAccessToken(tokenPayload);

    return {
      user: user.toJSON(),
      accessToken,
    };
  }

  /**
   * Handle Google OAuth user authentication.
   *
   * Resolves the authenticated Google profile into an ApplyZen user account:
   * - If a Google account with matching providerId exists: reuse it.
   * - If a local account with the same email exists: link it to Google.
   * - If no account exists: create a new Google user.
   *
   * Password is never set or modified for OAuth users.
   *
   * @param {object} profile - Google profile object from Passport.
   * @returns {Promise<object>} Resolved or newly created user document.
   */
  async handleGoogleAuth(profile) {
    const googleId = profile.id;
    const email = profile.emails?.[0]?.value?.toLowerCase();
    const firstName = profile.name?.givenName || profile.displayName || 'Unknown';
    const lastName = profile.name?.familyName || '';

    if (!email) {
      const error = new Error('Google account did not provide a valid email address');
      error.statusCode = 400;
      throw error;
    }

    let user;

    // 1. Check for an existing Google account with this providerId
    const existingGoogleUser = await userRepository.findByProviderId('google', googleId);
    if (existingGoogleUser) {
      user = existingGoogleUser;
    } else {
      // 2. Check for an existing local account with the same email
      const existingLocalUser = await userRepository.findByEmail(email);
      if (existingLocalUser) {
        if (existingLocalUser.provider === 'local') {
          // Link local account to Google — password is preserved by updateProvider()
          user = await userRepository.updateProvider(existingLocalUser._id, 'google', googleId);
        } else {
          // Existing account already uses a different OAuth provider — reuse as-is
          user = existingLocalUser;
        }
      } else {
        // 3. No account found — create a new Google user
        user = await userRepository.createUser({
          firstName,
          lastName,
          email,
          provider: 'google',
          providerId: googleId,
          isVerified: true, // Google accounts are pre-verified by Google
          profileCompleted: false,
          // password is intentionally omitted
        });
      }
    }

    // Generate JWT tokens
    const tokenPayload = { id: user._id, email: user.email };
    const accessToken = generateAccessToken(tokenPayload);
    const refreshToken = generateRefreshToken(tokenPayload);

    return {
      user: user.toJSON(),
      accessToken,
      refreshToken,
    };
  }
}

export default new AuthService();

