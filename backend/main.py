from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import content, scripts, groups, strategy

app = FastAPI(title="Fitness AI Platform", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(content.router, prefix="/api/content", tags=["content"])
app.include_router(scripts.router, prefix="/api/scripts", tags=["scripts"])
app.include_router(groups.router, prefix="/api/groups", tags=["groups"])
app.include_router(strategy.router, prefix="/api/strategy", tags=["strategy"])


@app.get("/api/health")
async def health():
    return {"status": "ok"}
