from fastapi import APIRouter, HTTPException
from models.coach import StrategyRequest
from services.ai import build_strategy

router = APIRouter()


@router.post("/build")
async def build_strategy_route(request: StrategyRequest):
    try:
        result = build_strategy(
            coach=request.coach,
            duration_days=request.duration_days,
        )
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
