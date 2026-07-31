/**
 * User Repository Data Access Layer.
 *
 * Encapsulates Mongoose database operations for the User entity.
 */

import User from '../models/user.model.js';

class UserRepository {
  /**
   * Find user by unique email address.
   *
   * @param {string} email - Normalized email address.
   * @param {boolean} includePassword - Whether to explicitly select password field.
   * @returns {Promise<object|null>} User document or null.
   */
  async findByEmail(email, includePassword = false) {
    const query = User.findOne({ email });
    if (includePassword) {
      query.select('+password');
    }
    return query.exec();
  }

  /**
   * Find user by MongoDB ObjectId.
   *
   * @param {string} id - User ID string.
   * @returns {Promise<object|null>} User document or null.
   */
  async findById(id) {
    return User.findById(id).exec();
  }

  /**
   * Create and persist a new User entity.
   *
   * @param {object} userData - User creation attributes.
   * @returns {Promise<object>} Persisted User document.
   */
  async createUser(userData) {
    const user = new User(userData);
    return user.save();
  }
}

export default new UserRepository();
