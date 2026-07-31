/**
 * Central Application Configuration.
 *
 * Consolidates environment variables and default application settings.
 * Prepared for future integration of MongoDB, JWT, OAuth, Cloudinary, Redis, and RabbitMQ.
 */

import dotenv from 'dotenv';
dotenv.config();

const config = Object.freeze({
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '5000', 10),

  // Database Configuration Placeholder
  database: {
    uri: process.env.MONGODB_URI || '',
  },

  // Authentication Configuration Placeholder
  auth: {
    jwtSecret: process.env.JWT_SECRET || '',
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
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
