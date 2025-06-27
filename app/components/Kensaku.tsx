"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

export default function Kensaku() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/kensaku2?keyword=${encodeURIComponent(keyword)}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="w-[1130px] h-[112px] relative z-10 mt-[3px] ml-[89px]">{/* 入力検索 UI ブロック */}
        <div className="w-[144px] h-[39px] bg-[#fffbf5] absolute top-0 left-[21px] z-[5]">{/* ラベル */}
          <span className="flex h-[33px] justify-start items-start font-['Inter'] text-[28px] font-bold leading-[33px] text-[#33031e] tracking-[2.8px] absolute top-[6px] left-[12px] text-left whitespace-nowrap z-[7]">
            入力検索
          </span>
        </div>
        <div className="w-[980px] h-[93px] bg-[#fffbf5] rounded-[10px] border-[3px] border-[#33031e] absolute top-[19px] left-0 z-[4]" />{/* 入力欄背景 */}
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="漫画名or作者名を入力"
          className="absolute top-[35px] left-[20px] w-[940px] h-[50px] bg-transparent text-[#33031e] text-[24px] focus:outline-none z-[6]"
        />{/* 入力欄（input） */}
        <button
          type="submit"
          className="w-[137px] h-[93px] bg-[#33031e] rounded-[10px] absolute top-[19px] left-[993px] z-10 hover:opacity-90"
        >
          <span className="flex h-[37px] justify-start items-start font-['Inter'] text-[36px] font-bold leading-[37px] text-[#fffbf5] tracking-[3.6px] absolute top-[22px] left-[24px] text-left whitespace-nowrap z-[11]">
            開拓!
          </span>
        </button>{/* 検索ボタン */}
      </div>
    </form>
  );
}