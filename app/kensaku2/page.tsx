'use client'; //このコンポーネントはクライアント側で実行されることをNext.jsに指示
import {useState} from "react"; //Reactの状態管理フックをインポート
import {useSearchParams} from "next/navigation"; //URLクエリパラメータを取得するフックをインポート
import {useEffect} from "react"; //副作用(データ取得など)を処理するフック
import React from "react"; //Reactの本体をインポート
import ResultTable from "../components/ResultTable"; //検索結果を表示するカスタムコンポーネントをインポート
import axios from "axios"; //HTTPライブラリaxiosをインポート

export default function Result(){ //Resultページのメインコンポーネント
    const searchParams = useSearchParams(); //URLのクエリパラメータ(keword)を取得
    const keyword = searchParams.get("keyword"); //クエリの中からkeywordを取り出す
    const [data, setData] = useState([]); //取得した検索結果を保存するstate
    const [loading, setLoading] = useState(true); //読込中かどうかのフラグ(初期状態はtrue)
    
    useEffect(() => { //keywordが変更されたときに実行される副作用
        if (keyword) { //keywordが存在する場合のみ実行
            const fetchData = async ()=>{ //データ取得用の非同期関数を定義
        setLoading(true); //データ取得中なのでローディング中にする
        try {

            const response = await axios.post('http://localhost:8000/search', {
                query1: keyword //FastAPIにキーワードを送信
              });

            if (!response.status) { //ステータスコードが存在しない(通常ありえない)
                throw new Error("Network response was not ok"); //エラーを投げる
            }

            const result = await response.data; //レスポンスデータを取得
            setData(result); //エラーを投げる
        } catch (error) {
            console.error("Error fething data:", error); //通信エラー時にログを出力
        } finally {
            setLoading(false); //通信が完了したらローディングを解除
        }
        
        };

        fetchData(); //データ取得関数を実行
    }
       },[keyword]); //keywordが変わったときだけこのuseEffectが発動

        return (
        <div>
         {loading ? ( //ローディング中であれば
            <p>Loading...</p> //「読み込み中」のメッセージを表示
         ) : data.length > 0 ?( //データが1件以上ある場合
            <ResultTable data={data} /> //結果表示用のテーブルコンポーネントを表示
         ) : (
            <p>No results found.</p> //データが0件だった場合のメッセージ
         )}
        </div>
        );
}
