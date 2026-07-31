"""
Configuration Settings Module.

This module prepares the structure for future environment variable loading
using Pydantic BaseSettings or custom configuration logic.
"""


class Settings:
    """
    Placeholder settings class for ApplyZen AI Service.
    Future environment variables (API keys, DB URLs, etc.) will be loaded here.
    """

    APP_NAME: str = "ApplyZen AI Service"
    APP_VERSION: str = "1.0.0"
    DEBUG: bool = True


# Global settings instance
settings = Settings()
