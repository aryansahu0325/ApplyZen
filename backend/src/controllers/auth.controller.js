/**
 * Authentication Controller.
 *
 * Exposes HTTP request handlers for user registration, login, token refresh, logout, and profile fetch.
 */

import config from '../config/index.js';
import authService from '../services/auth.service.js';
import { attachTokenCookies, clearTokenCookies, generateAccessToken, generateRefreshToken } from '../utils/jwt.util.js';

class AuthController {
  /**
   * POST /api/v1/auth/register
   * Register a new user account.
   */
  async register(req, res, next) {
    try {
      const { user, accessToken, refreshToken } = await authService.register(req.body);

      // Attach HttpOnly cookies
      attachTokenCookies(res, accessToken, refreshToken);

      return res.status(201).json({
        status: 'success',
        message: 'User registered successfully',
        data: {
          user,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * POST /api/v1/auth/login
   * Authenticate user credentials and set auth cookies.
   */
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const { user, accessToken, refreshToken } = await authService.login(email, password);

      // Attach HttpOnly cookies
      attachTokenCookies(res, accessToken, refreshToken);

      return res.status(200).json({
        status: 'success',
        message: 'User logged in successfully',
        data: {
          user,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * POST /api/v1/auth/refresh
   * Issue a fresh Access Token using HttpOnly Refresh Token cookie.
   */
  async refreshToken(req, res, next) {
    try {
      const refreshToken = req.cookies?.refreshToken || req.body?.refreshToken;

      const { user, accessToken } = await authService.refreshAccessToken(refreshToken);

      // Attach new accessToken cookie using same options as login
      const isProduction = config.env === 'production';
      res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? 'strict' : 'lax',
        path: '/',
        maxAge: 15 * 60 * 1000, // 15 minutes
      });

      return res.status(200).json({
        status: 'success',
        message: 'Access token refreshed successfully',
        data: {
          user,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * POST /api/v1/auth/logout
   * Terminate session and clear authentication cookies.
   */
  async logout(req, res, next) {
    try {
      clearTokenCookies(res);

      return res.status(200).json({
        status: 'success',
        message: 'User logged out successfully',
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/v1/auth/me
   * Retrieve authenticated user profile payload.
   */
  async getMe(req, res, next) {
    try {
      return res.status(200).json({
        status: 'success',
        data: {
          user: req.user,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/v1/auth/google/callback
   * Handles post-Google-OAuth redirect.
   *
   * Passport has already authenticated the user and attached them to req.user
   * via the Google Strategy verify callback and handleGoogleAuth() in AuthService.
   * This handler only generates tokens, sets cookies, and redirects to the frontend.
   */
  async googleCallback(req, res, next) {
    try {
      // req.user contains the authData returned from authService.handleGoogleAuth
      const { accessToken, refreshToken } = req.user;

      // Set cookies using existing cookie helper — identical to Login API
      attachTokenCookies(res, accessToken, refreshToken);

      // Redirect to frontend auth success page
      return res.redirect(`${config.frontendUrl}/auth/success`);
    } catch (error) {
      next(error);
    }
  }
}

export default new AuthController();

