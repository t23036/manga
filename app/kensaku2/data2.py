import sqlite3
import csv
from datetime import datetime

def parse_date(date_str):
    try:
        cleaned_date = date_str.strip().replace("'", "")
        date_obj = datetime.strptime(cleaned_date, "%Y.%m.%d")
        return date_obj.strftime("%Y-%m-%d")
    except ValueError as e:
        print(f"日付変換エラー: '{date_str}' -> {e}")
        return None

# データベース接続
conn = sqlite3.connect('./example2.db')
cursor = conn.cursor()

# テーブル作成（example_id を主キーとして残す）
cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        example_id INTEGER PRIMARY KEY AUTOINCREMENT,
        manga TEXT NOT NULL,
        name TEXT NOT NULL,
        artist TEXT NOT NULL,
        release DATE,
        fupdate DATE,
        popular TEXT,
        image TEXT
    )
''')

# CSVファイル読み込み
with open('C:/Users/T23036/manga-app/app/kensaku2/data2.csv', 'r', encoding='utf-8') as file:
    reader = csv.reader(file)
    next(reader, None)  # ヘッダーをスキップ
    for row in reader:
    
        release_date = parse_date(row[3])
        fupdate_date = parse_date(row[4])

        cursor.execute('''
            INSERT OR IGNORE INTO users (manga, name, artist, release, fupdate, popular, image)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        ''', (row[0], row[1], row[2], release_date, fupdate_date, row[5], row[6]))

# 保存して閉じる
conn.commit()
conn.close()


# ✅ 漫画名で検索（ユーザー入力）
"""
search_title = input("検索したい漫画名を入力してください: ")

cursor.execute("SELECT * FROM users WHERE manga = ?", (search_title,))
results = cursor.fetchall()

if results:
    print(f"「{search_title}」の検索結果:")
    for row in results:
        print(row)
else:
    print(f"「{search_title}」に該当するレコードは見つかりませんでした。")


"""