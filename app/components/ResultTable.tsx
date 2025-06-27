import React from "react";

type Item = {
  id: number;
  manga: string;
  name: string;
  artist: string;
  release: number;
  fupdate: number;
  popular: string;
};

interface DataTableProps {
  data: Item[];
}

export default function DataTable({ data }: DataTableProps) {
  return (
    <div className="bg-[#fffbf5]">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-[#33031e] black:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 black:bg-gray-700 dark:text-gray-400">
            <tr>
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
                key={item.id}
              >
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
