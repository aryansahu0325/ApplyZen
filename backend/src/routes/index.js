/**
 * Main Central Router.
 *
 * Mounts unversioned system routes (/ and /health) and versioned API routers (/api/v1).
 */

import { Router } from 'express';
import systemRoutes from './system.routes.js';
import v1Router from './v1/index.js';

const router = Router();

// Mount System operational endpoints (GET / and GET /health)
router.use('/', systemRoutes);

// Mount API v1 router namespace
router.use('/api/v1', v1Router);

export default router;
