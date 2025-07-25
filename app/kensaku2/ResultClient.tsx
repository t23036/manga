'use client'; // このファイルはクライアントコンポーネントであることをNext.jsに明示する

import { useSearchParams } from "next/navigation"; // URLのクエリパラメータを取得するためのフックをインポート
import { useState, useEffect } from "react"; // Reactの状態管理と副作用フックをインポート
import React from "react"; // React本体（JSX構文に必要）をインポート
import axios from "axios"; // HTTP通信ライブラリaxiosをインポート
import ResultTable from "../components/ResultTable"; // 検索結果を表示するカスタムテーブルコンポーネントをインポート

export default function ResultClient() { // 検索結果ページ用のクライアントコンポーネントを定義
  const searchParams = useSearchParams(); // クエリパラメータ（例: ?keyword=xxx）を取得
  const keyword = searchParams.get("keyword"); // 取得したURLパラメータから"keyword"の値を取り出す
  const [data, setData] = useState([]); // 検索結果データを保持するstate（初期値は空配列）
  const [loading, setLoading] = useState(true); // 読み込み中フラグを管理するstate（初期値true）

  useEffect(() => { // keywordが変化するたびに実行される副作用処理を定義
    if (keyword) { // keywordがnullでないときだけ実行（＝クエリにkeywordがある場合）
      const fetchData = async () => { // 非同期でデータ取得を行う内部関数を定義
        setLoading(true); // 通信前にローディング状態に切り替える
        try {
          const response = await axios.post("http://localhost:8000/search", {
            query1: keyword, // サーバー（FastAPIなど）に検索キーワードを送信
          });
          const result = await response.data; // レスポンスのデータ部分を取得
          setData(result); // 検索結果データをstateに保存
        } catch (error) {
          console.error("Error fetching data:", error); // 通信エラーが発生した場合にエラーメッセージを出力
        } finally {
          setLoading(false); // 通信の成否に関わらずローディング終了
        }
      };

      fetchData(); // 定義した非同期関数を即時実行する
    }
  }, [keyword]); // keywordが変化したときだけuseEffectを再実行する

  return (
    <div>
      {loading ? ( // 読み込み中であれば
        <p>Loading...</p> // 「読み込み中」のメッセージを表示
      ) : data.length > 0 ? ( // データが1件以上ある場合
        <ResultTable data={data} /> // テーブル形式で検索結果を表示
      ) : (
        <p>No results found.</p> // データが空だった場合に表示するメッセージ
      )}
    </div>
  );
}
