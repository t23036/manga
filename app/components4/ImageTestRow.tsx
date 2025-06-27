"use client";

import React from "react";

export default function ImageTextRow() {
  return (
    <section className="bg-white dark:bg-dark">
      <div className="">
        <div className="w-full max-w-[700px] flex items-center gap-8">
          {/* 画像エリア */}
          <div className="flex-shrink-0">
            <img
              src="https://via.placeholder.com/300x200"
              alt="サンプル画像"
              className="rounded-xl w-[300px] h-[200px] object-cover"
            />
          </div>

          {/* テキストエリア */}
          <div className="w-full space-y-3">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              サンプルタイトル
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              これはテキストの例です。画像の横に並べて表示されます。
              Tailwind CSSを使ってスタイルも簡単に整えられます。
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              レスポンシブ対応も簡単！必要なら `flex-col md:flex-row` にもできます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
