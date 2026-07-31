/**
 * Logger Configuration Module.
 *
 * Provides HTTP access logging via Morgan and prepares structure
 * for future enterprise logging integrations (e.g. Winston / Pino).
 */

import morgan from 'morgan';
import config from './index.js';

// Determine logging format based on environment
const format = config.env === 'development' ? 'dev' : 'combined';

export const httpLogger = morgan(format);

// Placeholder interface for future Winston / structured logger integration
export const logger = {
  info: (message, meta = {}) => {
    console.log(`[INFO] ${new Date().toISOString()} - ${message}`, meta);
  },
  error: (message, meta = {}) => {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`, meta);
  },
  warn: (message, meta = {}) => {
    console.warn(`[WARN] ${new Date().toISOString()} - ${message}`, meta);
  },
  debug: (message, meta = {}) => {
    if (config.env === 'development') {
      console.debug(`[DEBUG] ${new Date().toISOString()} - ${message}`, meta);
    }
  },
};
