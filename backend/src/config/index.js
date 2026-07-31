/**
 * Central Application Configuration.
 *
 * Consolidates environment variables and default application settings.
 * Prepared for MongoDB, JWT, OAuth, Cloudinary, Redis, and RabbitMQ.
 */

import dotenv from 'dotenv';
dotenv.config();

const config = Object.freeze({
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '5000', 10),

  // Database Configuration
  database: {
    uri: process.env.MONGODB_URI || '',
  },

  // Authentication & Security Configuration
  auth: {
    jwtAccessSecret: process.env.JWT_SECRET || 'dev_jwt_access_secret_key_123456789',
    jwtAccessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN || '15m',
    jwtRefreshSecret: process.env.JWT_REFRESH_SECRET || 'dev_jwt_refresh_secret_key_987654321',
    jwtRefreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
    cookieMaxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    oauth: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID || '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      },
      microsoft: {
        clientId: process.env.MICROSOFT_CLIENT_ID || '',
        clientSecret: process.env.MICROSOFT_CLIENT_SECRET || '',
      },
    },
  },

  // Services & Storage Configuration Placeholders
  storage: {
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME || '',
  },

  cache: {
    redisUrl: process.env.REDIS_URL || 'redis://localhost:6379',
  },

  queue: {
    rabbitmqUrl: process.env.RABBITMQ_URL || 'amqp://localhost:5672',
  },

  aiService: {
    openaiApiKey: process.env.OPENAI_API_KEY || '',
  },
});

export default config;
