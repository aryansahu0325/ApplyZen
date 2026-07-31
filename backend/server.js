/**
 * Application HTTP Server Entrypoint.
 *
 * Boots the Express server, manages environment configurations, establishes database connections,
 * and handles process signals for graceful startup and shutdown.
 */

import config from './src/config/index.js';
import { logger } from './src/config/logger.js';
import { connectDatabase, disconnectDatabase } from './src/database/index.js';
import app from './src/app.js';

const PORT = config.port || 5000;

const startServer = async () => {
  // 1. Establish Database Connection
  await connectDatabase();

  // 2. Start Express HTTP Server
  const server = app.listen(PORT, () => {
    logger.info(`ApplyZen Backend running in ${config.env} mode on port ${PORT}`);
  });

  // Graceful Shutdown Handler
  const gracefulShutdown = async (signal) => {
    logger.info(`${signal} signal received: Closing HTTP server and database connection gracefully...`);
    server.close(async () => {
      logger.info('HTTP server closed');
      await disconnectDatabase();
      process.exit(0);
    });
  };

  // Process signal handlers
  process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
  process.on('SIGINT', () => gracefulShutdown('SIGINT'));
};

process.on('unhandledRejection', (reason) => {
  logger.error('Unhandled Promise Rejection:', reason);
});

process.on('uncaughtException', (error) => {
  logger.error('Uncaught Exception thrown:', error);
  process.exit(1);
});

startServer();
