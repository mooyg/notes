from typing import Optional
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from routes.api import router as api_router


def init_api():
    application = FastAPI(title="Notes API")
    application.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    application.include_router(api_router)
    return application


app = init_api()
