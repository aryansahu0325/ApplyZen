"""
Central API Router.

Aggregates all sub-routers (system, agents, workflows, etc.) for registration in main.py.
"""

from fastapi import APIRouter
from api.routes import system

api_router = APIRouter()

# Include system endpoints (GET / and GET /health)
api_router.include_router(system.router)
