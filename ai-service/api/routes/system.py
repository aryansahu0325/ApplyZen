"""
System Endpoints Module.

Defines core operational endpoints such as root welcome message and health checks.
"""

from fastapi import APIRouter

router = APIRouter(tags=["System"])


@router.get("/", summary="Root Welcome Endpoint")
async def root():
    """
    Root endpoint returning status confirmation.
    """
    return {"message": "ApplyZen AI Service is Running"}


@router.get("/health", summary="Service Health Check")
async def health_check():
    """
    Health check endpoint for service monitoring and uptime validation.
    """
    return {"status": "UP"}
