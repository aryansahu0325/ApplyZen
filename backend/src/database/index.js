/**
 * MongoDB Database Connection Manager.
 *
 * Manages Mongoose connection lifecycle, event listeners, reconnect behavior,
 * and graceful connection teardown.
 */

import dns from 'dns';
import mongoose from 'mongoose';
import config from '../config/index.js';
import { logger } from '../config/logger.js';

// Configure DNS resolution order for local network/DNS compatibility
try {
  dns.setDefaultResultOrder('ipv4first');
} catch (err) {
  // Ignore if unsupported in environment
}

// Connection readiness states map
const READINESS_STATES = {
  0: 'disconnected',
  1: 'connected',
  2: 'connecting',
  3: 'disconnecting',
};

/**
 * Configure Mongoose connection event listeners.
 */
const setupConnectionEvents = () => {
  mongoose.connection.on('connected', () => {
    logger.info('MongoDB connection established successfully');
  });

  mongoose.connection.on('error', (err) => {
    logger.error(`MongoDB connection error: ${err.message}`, { error: err });
  });

  mongoose.connection.on('disconnected', () => {
    logger.warn('MongoDB connection lost. Reconnect attempt scheduled...');
  });

  mongoose.connection.on('reconnected', () => {
    logger.info('MongoDB connection re-established');
  });
};

/**
 * Initialize connection to MongoDB Atlas or local MongoDB instance.
 */
export const connectDatabase = async () => {
  const uri = config.database.uri;

  if (!uri) {
    logger.warn('MongoDB URI is not configured in environment variables. Database connection skipped.');
    return;
  }

  setupConnectionEvents();

  try {
    await mongoose.connect(uri, {
      autoIndex: config.env === 'development',
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    });
  } catch (error) {
    // Fallback: If local ISP DNS fails on SRV lookup (querySrv ECONNREFUSED), set public DNS fallback
    if (error.code === 'ECONNREFUSED' && error.syscall === 'querySrv') {
      logger.warn('Local DNS failed SRV lookup. Retrying connection with Google Public DNS (8.8.8.8)...');
      try {
        dns.setServers(['8.8.8.8', '1.1.1.1']);
        await mongoose.connect(uri, {
          autoIndex: config.env === 'development',
          serverSelectionTimeoutMS: 10000,
          socketTimeoutMS: 45000,
        });
        return;
      } catch (retryErr) {
        logger.error(`Failed to connect to MongoDB after DNS retry: ${retryErr.message}`);
        return;
      }
    }
    logger.error(`Failed to connect to MongoDB: ${error.message}`);
  }
};

/**
 * Gracefully close the active Mongoose connection.
 */
export const disconnectDatabase = async () => {
  if (mongoose.connection.readyState !== 0) {
    try {
      await mongoose.connection.close();
      logger.info('MongoDB connection closed gracefully');
    } catch (error) {
      logger.error(`Error closing MongoDB connection: ${error.message}`);
    }
  }
};

/**
 * Helper to inspect current database connection status.
 * Useful for readiness probes and health check routes.
 *
 * @returns {string} Connection state ('connected', 'connecting', 'disconnected', etc.)
 */
export const getDatabaseStatus = () => {
  return READINESS_STATES[mongoose.connection.readyState] || 'unknown';
};
