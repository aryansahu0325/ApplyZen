/**
 * API Version 1 Router.
 *
 * Aggregates all v1 feature routes (e.g. auth, applications, resumes, jobs).
 * Prepared for future route module expansion.
 */

import { Router } from 'express';

const v1Router = Router();

// Placeholder route for API v1 namespace confirmation
v1Router.get('/', (req, res) => {
  res.status(200).json({
    message: 'ApplyZen API v1 Namespace',
  });
});

export default v1Router;
