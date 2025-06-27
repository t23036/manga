'use client';

import React, { useState } from "react";

export default function SearchBarSection() {
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    if (keyword.trim() === "") {
      alert("検索ワードを入力してください！");
      return;
    }
    console.log("検索ワード:", keyword);
    // ここでAPI呼び出しや画面遷移などの処理ができる
  };

  return (
    <div className="w-[1613px] h-[160px] relative z-[9] mt-[36px] ml-[127px]">
      {/* 入力検索ラベル */}
      <div className="w-[205px] h-[56px] bg-[#fffbf5] absolute top-0 left-[31px] z-[4]">
        <span className="flex h-[56px] justify-start items-start font-['Inter'] text-[40px] font-bold leading-[48.409px] text-[#33031e] tracking-[4px] absolute top-0 left-[16px] text-left whitespace-nowrap z-[6]">
          入力検索
        </span>
      </div>

      {/* 入力フォーム */}
      <div className="absolute top-[27px] left-0 z-[3]">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="キーワードを入力"
          className="w-[1399px] h-[133px] pl-[20px] text-[32px] bg-[#fffbf5] rounded-[10px] border-[3px] border-[#33031e] focus:outline-none"
        />
      </div>

      {/* ボタン */}
      <button
        onClick={handleSearch}
        className="w-[195px] h-[133px] bg-[#33031e] text-[#fffbf5] text-[40px] font-bold rounded-[10px] absolute top-[27px] left-[1418px] z-[9] tracking-[4px]"
      >
        開拓!
      </button>
    </div>
  );
}
