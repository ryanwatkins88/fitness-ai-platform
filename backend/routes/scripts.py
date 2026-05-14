from fastapi import APIRouter, HTTPException
from models.coach import ScriptRequest
from services.ai import generate_script

router = APIRouter()


@router.post("/generate")
async def generate_scripts(request: ScriptRequest):
    try:
        result = generate_script(
            coach=request.coach,
            script_type=request.script_type,
            platform=request.platform,
            objection=request.objection,
        )
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
