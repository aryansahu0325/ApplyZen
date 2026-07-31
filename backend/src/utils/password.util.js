/**
 * Password Security Utility.
 *
 * Provides asynchronous bcrypt hashing and password comparison methods.
 */

import bcrypt from 'bcryptjs';

const SALT_ROUNDS = 12;

/**
 * Hash a plain text password using bcrypt.
 *
 * @param {string} password - Plaintext password.
 * @returns {Promise<string>} Hashed password string.
 */
export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  return bcrypt.hash(password, salt);
};

/**
 * Compare a plain text password against a stored bcrypt hash.
 *
 * @param {string} password - Candidate plaintext password.
 * @param {string} hashedPassword - Stored bcrypt hash.
 * @returns {Promise<boolean>} True if matching, false otherwise.
 */
export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
