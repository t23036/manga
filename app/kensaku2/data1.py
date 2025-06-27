import sqlite3
import csv
from datetime import datetime

def parse_date(date_str):
    try:
        cleaned_date = date_str.strip().replace("'", "")  # ' を除去
        date_obj = datetime.strptime(cleaned_date, "%Y.%m.%d")
        return date_obj.strftime("%Y-%m-%d")  # SQLiteに入れやすいISO形式に変換
    except ValueError as e:
        print(f"日付変換エラー: '{date_str}' -> {e}")
        return None

conn = sqlite3.connect('example.db')
cursor = conn.cursor()

cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        example_id INTEGER PRIMARY KEY AUTOINCREMENT,
        manga TEXT NOT NULL,
        name TEXT NOT NULL,
        release DATE,
        fupdate DATE,
        popular TEXT
    )
''')

with open('C:/Users/T23036/my-next-app3/app/kensaku2/data.csv', 'r', encoding='utf-8') as file:
    reader = csv.reader(file)
    next(reader, None)  # ヘッダーをスキップ
    for row in reader:
        if len(row) < 6:
            print(f"スキップ（列数不足）: {row}")
            continue

        release_date = parse_date(row[3])
        fupdate_date = parse_date(row[4])

        cursor.execute('''
            INSERT INTO users (example_id, manga, name, release, fupdate, popular)
            VALUES (?, ?, ?, ?, ?, ?)
        ''', (row[0], row[1], row[2], release_date, fupdate_date, row[5]))

conn.commit()

cursor.execute("SELECT * FROM users")
rows = cursor.fetchall()
print("ROWS", rows)
for row in rows:
    print(row)

conn.close()