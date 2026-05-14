from fastapi import APIRouter, HTTPException
from models.coach import ContentRequest
from services.ai import generate_viral_content

router = APIRouter()


@router.post("/generate")
async def generate_content(request: ContentRequest):
    try:
        result = generate_viral_content(
            coach=request.coach,
            platform=request.platform,
            content_type=request.content_type,
            topic=request.topic,
        )
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
