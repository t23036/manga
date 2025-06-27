from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from fastapi.responses import JSONResponse
from typing import Optional
import sqlite3

class Item(BaseModel):
    query1: Optional[str] = None

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000"
    ],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/search")
def search_users(item: Item):
    with sqlite3.connect('example2.db') as conn:
        cursor = conn.cursor()

        # クエリ指定がある場合は完全一致検索
        if item.query1:
            cursor.execute("SELECT * FROM users WHERE manga = ?", (item.query1,))
        else:
            cursor.execute("SELECT * FROM users")

        rows = cursor.fetchall()

        results = [
            {
                "example_id": row[0],
                "manga": row[1],
                "name": row[2],
                "release": row[3],
                "fupdate": row[4],
                "popular": row[5]
            }
            for row in rows
        ]

        return JSONResponse(content=results)
