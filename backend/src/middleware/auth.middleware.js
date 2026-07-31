/**
 * JWT Authentication Guard Middleware.
 *
 * Validates request authorization tokens (from HttpOnly cookies or Bearer header)
 * and attaches authenticated user entity to Express request object.
 */

import { verifyAccessToken } from '../utils/jwt.util.js';
import userRepository from '../repositories/user.repository.js';

export const authenticate = async (req, res, next) => {
  try {
    let token = null;

    // 1. Extract token from HttpOnly cookie
    if (req.cookies && req.cookies.accessToken) {
      token = req.cookies.accessToken;
    }
    // 2. Fallback: Extract from Authorization header (Bearer <token>)
    else if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      const error = new Error('Authentication required. Access token missing.');
      error.statusCode = 401;
      return next(error);
    }

    // 3. Verify token signature and expiration
    const decoded = verifyAccessToken(token);

    // 4. Verify user existence in database
    const currentUser = await userRepository.findById(decoded.id);
    if (!currentUser) {
      const error = new Error('The user belonging to this token no longer exists');
      error.statusCode = 401;
      return next(error);
    }

    // 5. Attach authenticated user payload to request context
    req.user = currentUser.toJSON();
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      const authError = new Error('Invalid or expired authentication token');
      authError.statusCode = 401;
      return next(authError);
    }
    next(error);
  }
};
