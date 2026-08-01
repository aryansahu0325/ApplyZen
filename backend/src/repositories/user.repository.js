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
   * Find user by OAuth provider and provider-specific profile ID.
   * Used during Google OAuth callback to detect returning Google users.
   *
   * @param {string} provider - OAuth provider name (e.g. 'google').
   * @param {string} providerId - Provider-issued profile ID.
   * @returns {Promise<object|null>} User document or null.
   */
  async findByProviderId(provider, providerId) {
    return User.findOne({ provider, providerId }).exec();
  }

  /**
   * Link an existing local account to an OAuth provider.
   * Updates provider and providerId without modifying the password field.
   *
   * @param {string} userId - MongoDB ObjectId of the user to update.
   * @param {string} provider - OAuth provider name (e.g. 'google').
   * @param {string} providerId - Provider-issued profile ID.
   * @returns {Promise<object|null>} Updated user document or null.
   */
  async updateProvider(userId, provider, providerId) {
    return User.findByIdAndUpdate(
      userId,
      { provider, providerId },
      { new: true } // Return the updated document
    ).exec();
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

