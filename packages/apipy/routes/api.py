from fastapi import APIRouter
from .user.controller import router as user_router
from .auth.controller import router as auth_router

router = APIRouter()

router.include_router(user_router, prefix="/user")
router.include_router(auth_router, prefix="/api/auth")
