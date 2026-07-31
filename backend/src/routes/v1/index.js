/**
 * API Version 1 Router.
 *
 * Aggregates all v1 feature routes (auth, applications, resumes, jobs).
 */

import { Router } from 'express';
import authRoutes from './auth.routes.js';

const v1Router = Router();

// Mount Authentication routes (/api/v1/auth)
v1Router.use('/auth', authRoutes);

// Root v1 confirmation endpoint
v1Router.get('/', (req, res) => {
  res.status(200).json({
    message: 'ApplyZen API v1 Namespace',
  });
});

export default v1Router;
