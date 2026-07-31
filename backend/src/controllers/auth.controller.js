/**
 * Authentication Controller.
 *
 * Exposes HTTP request handlers for user registration, login, logout, and profile fetch.
 */

import authService from '../services/auth.service.js';
import { attachTokenCookies, clearTokenCookies } from '../utils/jwt.util.js';

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
}

export default new AuthController();
