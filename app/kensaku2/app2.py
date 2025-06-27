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
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/search")
def search_users(item: Item):
    with sqlite3.connect('example.db') as conn:
        cursor = conn.cursor()

        if item.query1:
            data = ('%' + item.query1 + '%',)
            sql = "SELECT * FROM users WHERE manga LIKE ?"
        else:
            return JSONResponse(content={"error": "検索ワードが空です"}, status_code=400)

        rows = cursor.execute(sql, data).fetchall()

        results = []
        for row in rows:
            results.append({
                "example_id": row[0],
                "manga": row[1],
                "name": row[2],
                "release": row[3],
                "fupdate": row[4],
                "popular": row[5]
            })

        return JSONResponse(content=results)
