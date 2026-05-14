from pydantic import BaseModel
from typing import Optional


class CoachOffer(BaseModel):
    name: str
    description: str
    price: str
    duration: str
    format: str


class CoachFollowers(BaseModel):
    instagram: str = "0"
    facebook: str = "0"
    tiktok: str = "0"
    threads: str = "0"


class CoachProfile(BaseModel):
    name: str
    specialty: str
    niche: str
    offer: CoachOffer
    results: str
    income_goal: str
    current_revenue: str
    target_client: str
    story: str
    content_style: str
    followers: CoachFollowers


class ContentRequest(BaseModel):
    coach: CoachProfile
    platform: str
    content_type: str
    topic: Optional[str] = None


class ScriptRequest(BaseModel):
    coach: CoachProfile
    script_type: str
    platform: Optional[str] = None
    objection: Optional[str] = None


class GroupsRequest(BaseModel):
    coach: CoachProfile
    platforms: list[str]


class StrategyRequest(BaseModel):
    coach: CoachProfile
    duration_days: int = 30
