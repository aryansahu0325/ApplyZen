/**
 * Authentication Routes.
 *
 * Defines API v1 authentication endpoints.
 */

import { Router } from 'express';
import authController from '../../controllers/auth.controller.js';
import { validate, registerSchema, loginSchema } from '../../validators/auth.validator.js';
import { authenticate } from '../../middleware/auth.middleware.js';
import passport from '../../config/passport.js';
import config from '../../config/index.js';

const router = Router();

/**
 * POST /api/v1/auth/register
 * Register a new user account.
 */
router.post('/register', validate(registerSchema), (req, res, next) => authController.register(req, res, next));

/**
 * POST /api/v1/auth/login
 * Login with email and password.
 */
router.post('/login', validate(loginSchema), (req, res, next) => authController.login(req, res, next));

/**
 * POST /api/v1/auth/refresh
 * Refresh Access Token using Refresh Token.
 */
router.post('/refresh', (req, res, next) => authController.refreshToken(req, res, next));

/**
 * POST /api/v1/auth/logout
 * Logout user and clear tokens.
 */
router.post('/logout', (req, res, next) => authController.logout(req, res, next));

/**
 * GET /api/v1/auth/me
 * Fetch authenticated user profile.
 */
router.get('/me', authenticate, (req, res, next) => authController.getMe(req, res, next));

/**
 * Dynamic Google OAuth Route Handlers
 * Wrapped dynamically to prevent 'Unknown authentication strategy "google"' 
 * from crashing the server at boot if Google credentials are not set.
 */
const handleGoogleAuth = (req, res, next) => {
  if (!passport._strategies || !passport._strategies.google) {
    return res.status(501).json({
      success: false,
      message: 'Google OAuth is not configured on this server.',
    });
  }
  return passport.authenticate('google', { scope: ['profile', 'email'], session: false })(req, res, next);
};

const handleGoogleCallback = (req, res, next) => {
  if (!passport._strategies || !passport._strategies.google) {
    return res.status(501).json({
      success: false,
      message: 'Google OAuth is not configured on this server.',
    });
  }
  return passport.authenticate('google', {
    failureRedirect: `${config.frontendUrl}/auth/login`,
    session: false,
  })(req, res, next);
};

/**
 * GET /api/v1/auth/google
 * Redirect user to Google Login consent screen.
 */
router.get('/google', handleGoogleAuth);

/**
 * GET /api/v1/auth/google/callback
 * Google callback URI for passport authentication, followed by token setting and redirect.
 */
router.get('/google/callback', handleGoogleCallback, (req, res, next) =>
  authController.googleCallback(req, res, next)
);

export default router;
