/**
 * System Operational Routes.
 *
 * Provides system-level endpoints such as root message and health status.
 * Kept outside API versioning.
 */

import { Router } from 'express';
import { getDatabaseStatus } from '../database/index.js';

const router = Router();

/**
 * GET /
 * Root welcome route.
 */
router.get('/', (req, res) => {
  res.status(200).json({
    message: 'ApplyZen Backend Running',
  });
});

/**
 * GET /health
 * Operational uptime health check route exposing server and database status.
 */
router.get('/health', (req, res) => {
  const dbStatus = getDatabaseStatus();

  res.status(200).json({
    status: 'UP',
    database: dbStatus,
  });
});

export default router;
