/**
 * Authentication Routes.
 *
 * Defines API v1 authentication endpoints.
 */

import { Router } from 'express';
import authController from '../../controllers/auth.controller.js';
import { validate, registerSchema, loginSchema } from '../../validators/auth.validator.js';
import { authenticate } from '../../middleware/auth.middleware.js';

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
 * POST /api/v1/auth/logout
 * Logout user and clear tokens.
 */
router.post('/logout', (req, res, next) => authController.logout(req, res, next));

/**
 * GET /api/v1/auth/me
 * Fetch authenticated user profile.
 */
router.get('/me', authenticate, (req, res, next) => authController.getMe(req, res, next));

export default router;
