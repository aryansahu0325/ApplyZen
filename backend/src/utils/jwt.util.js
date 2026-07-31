/**
 * JSON Web Token (JWT) & Cookie Management Utility.
 *
 * Handles JWT signing, verification, and HttpOnly cookie lifecycle management.
 */

import jwt from 'jsonwebtoken';
import config from '../config/index.js';

/**
 * Sign a short-lived Access Token.
 *
 * @param {object} payload - Claims to encode in the token.
 * @returns {string} Signed JWT Access Token.
 */
export const generateAccessToken = (payload) => {
  return jwt.sign(payload, config.auth.jwtAccessSecret, {
    expiresIn: config.auth.jwtAccessExpiresIn,
  });
};

/**
 * Sign a long-lived Refresh Token.
 *
 * @param {object} payload - Claims to encode in the token.
 * @returns {string} Signed JWT Refresh Token.
 */
export const generateRefreshToken = (payload) => {
  return jwt.sign(payload, config.auth.jwtRefreshSecret, {
    expiresIn: config.auth.jwtRefreshExpiresIn,
  });
};

/**
 * Verify an Access Token payload.
 *
 * @param {string} token - JWT Access Token.
 * @returns {object} Decoded token payload.
 */
export const verifyAccessToken = (token) => {
  return jwt.verify(token, config.auth.jwtAccessSecret);
};

/**
 * Verify a Refresh Token payload.
 *
 * @param {string} token - JWT Refresh Token.
 * @returns {object} Decoded token payload.
 */
export const verifyRefreshToken = (token) => {
  return jwt.verify(token, config.auth.jwtRefreshSecret);
};

/**
 * Attach Access and Refresh Tokens as secure, HttpOnly cookies.
 *
 * @param {object} res - Express response object.
 * @param {string} accessToken - Access Token string.
 * @param {string} refreshToken - Refresh Token string.
 */
export const attachTokenCookies = (res, accessToken, refreshToken) => {
  const isProduction = config.env === 'production';

  const baseCookieOptions = {
    httpOnly: true, // Prevents client-side XSS access to cookies
    secure: isProduction, // Transmitted only over HTTPS in production
    sameSite: isProduction ? 'strict' : 'lax', // CSRF protection
    path: '/',
  };

  res.cookie('accessToken', accessToken, {
    ...baseCookieOptions,
    maxAge: 15 * 60 * 1000, // 15 minutes
  });

  res.cookie('refreshToken', refreshToken, {
    ...baseCookieOptions,
    maxAge: config.auth.cookieMaxAge, // 7 days
  });
};

/**
 * Clear authentication cookies on logout.
 *
 * @param {object} res - Express response object.
 */
export const clearTokenCookies = (res) => {
  const isProduction = config.env === 'production';

  const cookieOptions = {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? 'strict' : 'lax',
    path: '/',
  };

  res.clearCookie('accessToken', cookieOptions);
  res.clearCookie('refreshToken', cookieOptions);
};
