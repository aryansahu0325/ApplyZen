/**
 * Authentication Business Logic Service.
 *
 * Implements user registration, credential validation, token issuance,
 * and session state operations.
 */

import userRepository from '../repositories/user.repository.js';
import { hashPassword, comparePassword } from '../utils/password.util.js';
import { generateAccessToken, generateRefreshToken } from '../utils/jwt.util.js';

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
}

export default new AuthService();
