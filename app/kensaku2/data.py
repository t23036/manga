import sqlite3 #SQLiteデータベース操作のためのモジュールをインポート
import csv #CSVファイル操作用モジュールをインポート
from datetime import datetime #日時処理のためのdatetimeをインポート

def parse_date(date_str): #日付文字列を変換する関数を定義
    try:
        cleaned_date = date_str.strip().replace("'", "") #空白とシングルフォートを除去
        date_obj = datetime.strptime(cleaned_date, "%Y.%m.%d") #"YYYY.MM.DD"形式をdatetime型に変換
        return date_obj.strftime("%Y-%m-%d") #"YYYY-MM-DD"形式の文字列に変換して返す
    except ValueError as e: #変換失敗時のエラー処理
        print(f"日付変換エラー: '{date_str}' -> {e}") #エラーメッセージを表示
        return None #Noneを返してスキップを可能にする

# DB接続
conn = sqlite3.connect('./example.db') #SQLiteデータベースに接続(なければ作成する)
cursor = conn.cursor() #クエリ実行用のカーソルを作成

# テーブル作成
cursor.execute('''
    CREATE TABLE IF NOT EXISTS users ( 
        example_id INTEGER PRIMARY KEY AUTOINCREMENT,
        manga TEXT NOT NULL,
        name TEXT NOT NULL,
        artist TEXT NOT NULL,
        release DATE,
        fupdate DATE,
        popular TEXT
    )
''') #テーブルがなかったら作る、自動採番の主キー、漫画タイトル(必須)、著者名(必須)、作画者名(必須)、発売日、最終更新日、人気度などのテーブルを定義

# CSVからデータ読み込み
with open('C:/Users/T23036/my-next-app3/app/kensaku2/data.csv', 'r', encoding='utf-8') as file:
    reader = csv.reader(file) #CSVリーダーを作成
    next(reader, None) #ヘッダー行をスキップ
    for row in reader: #各行をループ処理

        release_date = parse_date(row[3]) #発売日を変換
        fupdate_date = parse_date(row[4]) #更新日を変換

        cursor.execute('''
            INSERT OR IGNORE INTO users (manga, name, artist, release, fupdate, popular)
            VALUES (?, ?, ?, ?, ?, ?)
        ''', (row[0], row[1], row[2],release_date, fupdate_date, row[5])) #データベースに挿入(中風句は無視)

conn.commit() #変更を保存
conn.close() #データベース接続を閉じる

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
