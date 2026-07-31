/**
 * Express Application Assembly.
 *
 * Configures core security/utility middleware, mounts routing hierarchy,
 * and attaches global error handling.
 */

import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { httpLogger } from './config/logger.js';
import router from './routes/index.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

// 1. Security & Logging Middleware
app.use(helmet());
app.use(cors());
app.use(httpLogger);

// 2. Request Parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// 3. Application Routes
app.use('/', router);

// 4. Global Error Handler
app.use(errorHandler);

export default app;
