import React from "react";

// 各アイテム（1作品）の型定義
type Item = {
  example_id: number;
  manga: string;
  name: string;
  artist: string;
  release: number;
  fupdate: number;
  popular: string;
  image: string; // 画像パスを追加
};

// コンポーネントのprops型
interface DataTableProps {
  data: Item[];
}

// DataTableコンポーネント
export default function DataTable({ data }: DataTableProps) {
  return (
    <div className="bg-[#fffbf5]">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-[#33031e] black:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 black:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">画像</th> {/* 画像列のヘッダー */}
              <th className="px-6 py-3">漫画</th>
              <th className="px-6 py-3">作者</th>
              <th className="px-6 py-3">作画</th>
              <th className="px-6 py-3">発売年</th>
              <th className="px-6 py-3">最終更新</th>
              <th className="px-6 py-3">人気度</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                className="bg-white border-b black:bg-gray-800 black:border-gray-700 border-gray-200"
                key={item.example_id}
              >
                <td className="px-6 py-4">
                  <img
                    src={item.image}
                    alt={item.manga}
                    className="w-16 h-auto rounded"
                    loading="lazy"
                  />
                </td>
                <td className="px-6 py-4">{item.manga}</td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.artist}</td>
                <td className="px-6 py-4">{item.release}</td>
                <td className="px-6 py-4">{item.fupdate}</td>
                <td className="px-6 py-4">{item.popular}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
