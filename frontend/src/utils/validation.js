/**
 * Validates whether an email address fits a standard format.
 * @param {string} email
 * @returns {boolean} True if valid, false otherwise.
 */
export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/**
 * Validates a password against security rules:
 * - Minimum 8 characters
 * - At least one letter
 * - At least one number
 * @param {string} password
 * @returns {{ valid: boolean, message: string }} Validation status and user-facing error message
 */
export function validatePassword(password) {
  if (!password) {
    return { valid: false, message: 'Password is required.' };
  }
  if (password.length < 8) {
    return { valid: false, message: 'Password must be at least 8 characters long.' };
  }
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  if (!hasLetter || !hasNumber) {
    return { valid: false, message: 'Password must contain at least one letter and one number.' };
  }
  return { valid: true, message: '' };
}

/**
 * Validates whether a value is a non-empty, non-whitespace string.
 * @param {string} value
 * @returns {boolean} True if non-empty, false otherwise.
 */
export function validateRequired(value) {
  if (typeof value !== 'string') {
    return false;
  }
  return value.trim().length > 0;
}
