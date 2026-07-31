/**
 * Global Error Handling Middleware.
 *
 * Catches unhandled application errors and formats consistent JSON response payloads.
 */

import config from '../config/index.js';

export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || err.status || 500;
  const message = err.message || 'Internal Server Error';

  const response = {
    status: 'error',
    message,
    ...(config.env === 'development' && { stack: err.stack }),
  };

  res.status(statusCode).json(response);
};
