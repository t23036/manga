import sqlite3
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

class Item(BaseModel):
    query1: str = None  # manga
    query2: str = None  # name

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/search")
def search_users(item: Item):
    with sqlite3.connect('example.db') as conn:
        cursor = conn.cursor()

        if item.query1:  # mangaで検索
            data = ('%' + item.query1 + '%',)
            sql = "SELECT * FROM users WHERE manga LIKE ?"
        elif item.query2:  # nameで検索
            data = ('%' + item.query2 + '%',)
            sql = "SELECT * FROM users WHERE name LIKE ?"
        else:
            return JSONResponse(content={"error": "検索ワードが空です"}, status_code=400)

        rows = cursor.execute(sql, data).fetchall()

        results = []
        for row in rows:
            results.append({
                "manga": row[0],
                "name": row[1],
                "artist":row[2],
                "release": row[3],
                "fupdate": row[4],
                "popular": row[5]
            })

        return JSONResponse(content=results)