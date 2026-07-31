/**
 * User Mongoose Schema and Model.
 *
 * Defines the core identity entity for ApplyZen platform users.
 * Supports native credentials and OAuth provider accounts (Google, Microsoft).
 */

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
      maxlength: [50, 'First name cannot exceed 50 characters'],
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
      maxlength: [50, 'Last name cannot exceed 50 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },
    password: {
      type: String,
      required: false,
      select: false, // Omit password field by default in query results
    },
    provider: {
      type: String,
      enum: {
        values: ['local', 'google', 'microsoft'],
        message: '{VALUE} is not a valid authentication provider',
      },
      default: 'local',
    },
    providerId: {
      type: String,
      default: null,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    profileCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        delete ret.__v;
        delete ret.password;
        return ret;
      },
    },
  }
);

// Indexes
// 1. Email Unique Index for fast lookup and database-enforced uniqueness
userSchema.index({ email: 1 }, { unique: true });

// 2. Provider Single-Field Index for analytics and filtering by auth source
userSchema.index({ provider: 1 });

// 3. Compound Index (provider + providerId) for sub-millisecond OAuth authentication lookups
userSchema.index({ provider: 1, providerId: 1 });

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
