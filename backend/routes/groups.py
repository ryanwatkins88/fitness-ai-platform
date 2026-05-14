from fastapi import APIRouter, HTTPException
from models.coach import GroupsRequest
from services.ai import find_groups

router = APIRouter()


@router.post("/find")
async def find_groups_route(request: GroupsRequest):
    try:
        result = find_groups(
            coach=request.coach,
            platforms=request.platforms,
        )
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
