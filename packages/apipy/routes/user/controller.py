from fastapi import APIRouter
from .service import currentUser

router = APIRouter()


@router.get("/")
def getUser():
    return currentUser()
