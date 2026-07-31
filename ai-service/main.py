"""
ApplyZen AI Service - Main Entrypoint.

This module initializes the FastAPI application, registers middleware,
and mounts the main API router for production-grade scalability.
"""

import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.router import api_router
from config import settings

# 1. Initialize FastAPI Application with metadata
app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="ApplyZen AI Service - Core AI & Multi-Agent Backend Service",
    docs_url="/docs",
    redoc_url="/redoc",
)

# 2. Configure CORS Middleware for cross-origin client support
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Recommend restricting origins in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 3. Mount Modular API Router
app.include_router(api_router)


# 4. Entry point for local execution with Uvicorn
if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
    )
