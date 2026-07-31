/**
 * System Operational Routes.
 *
 * Provides system-level endpoints such as root message and health status.
 * Kept outside API versioning.
 */

import { Router } from 'express';

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
 * Operational uptime health check route.
 */
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
  });
});

export default router;
