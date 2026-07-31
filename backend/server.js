/**
 * Application HTTP Server Entrypoint.
 *
 * Boots the Express server, manages environment configurations,
 * and handles process signals for graceful startup and shutdown.
 */

import config from './src/config/index.js';
import { logger } from './src/config/logger.js';
import app from './src/app.js';

const PORT = config.port || 5000;

const server = app.listen(PORT, () => {
  logger.info(`ApplyZen Backend running in ${config.env} mode on port ${PORT}`);
});

// Process signal handlers for unhandled rejections and termination signals
process.on('unhandledRejection', (reason) => {
  logger.error('Unhandled Promise Rejection:', reason);
});

process.on('uncaughtException', (error) => {
  logger.error('Uncaught Exception thrown:', error);
  process.exit(1);
});

process.on('SIGTERM', () => {
  logger.info('SIGTERM signal received: Closing HTTP server gracefully');
  server.close(() => {
    logger.info('HTTP server closed');
  });
});
