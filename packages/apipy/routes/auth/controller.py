from fastapi import APIRouter, Request
from authlib.integrations.starlette_client import OAuth
from ...envconfig import config

router = APIRouter()
oauth = OAuth()
oauth.register(
    name="Notes",
    client_id=config("GITHUB_CLIENT_ID"),
    client_secret=config("GITHUB_CLIENT_SECRET"),
    access_token_url="https://github.com/login/oauth/access_token",
    access_token_params=None,
    authorize_url="https://github.com/login/oauth/authorize",
    authorize_params=None,
    api_base_url="https://api.github.com/",
    client_kwargs={"scope": "user:email"},
)


@router.get("/github")
def github(request: Request):
    print(request)
    github = oauth.create_client("github")
    redirect_uri = "http://localhost:8080/api/auth/callback"
    return github.authorize_redirect(request, redirect_uri)


@router.get("/callback")
def authorize(request: Request):
    token = oauth.github.authorize_access_token(request)
    resp = oauth.github.get("user", token=token)
    profile = resp.json()
    print(profile)
