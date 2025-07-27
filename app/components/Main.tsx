'use client';
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from 'react';

export default function Main() {
    const [keyword, setKeyword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
        
      const handleSearch = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      if (!keyword.trim()) {
        setError("キーワードを入力してください!");
        return;
      }

      setError(""); 
      router.push(`/kensaku2?keyword=${encodeURIComponent(keyword)}`);
    // ここでAPI呼び出しや画面遷移などの処理ができる
    };

  return (
    <div className="main-container w-[1512px] h-[982px] text-[0px] bg-[#fff] relative overflow-hidden mx-auto my-0">
      <span className="block h-[127px] font-['Inter'] text-[110px] font-bold leading-[127px] text-[#33091d] tracking-[16.5px] relative text-left whitespace-nowrap z-[6] mt-[18px] mr-0 mb-0 ml-[504px]">
        漫画開拓
      </span>
      <div className="w-[1130px] h-[112px] relative z-10 mt-[3px] ml-[89px]">
      {/* ラベル */}
      <div className="w-[144px] h-[39px] bg-[#fffbf5] absolute top-0 left-[21px] z-[5]">
        <span className="flex h-[33px] justify-start items-start font-['Inter'] text-[28px] font-bold leading-[33px] text-[#33031e] tracking-[2.8px] absolute top-[6px] left-[12px] text-left whitespace-nowrap z-[7]">
          入力検索
        </span>
      </div>

      {/* 入力欄（背景） */}
      <div className="w-[980px] h-[93px] bg-[#fffbf5] rounded-[10px] border-[3px] border-[#33031e] absolute top-[19px] left-0 z-[4]" />

      {/* 入力欄（input） */}
      <form onSubmit={handleSearch}>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="漫画名or作者名を入力"
        className="absolute top-[35px] left-[20px] w-[940px] h-[50px] bg-transparent text-[#33031e] text-[24px] focus:outline-none z-[6]"
      />
      {error && (
        <div
          className="absolute top-[-40px] left-[20px] bg-red-100 text-red-700 text-[18px] px-4 py-2 rounded shadow transition-all duration-300 opacity-100 translate-y-0 z-[10]"
        >
          {error}
        </div>
      )}

      {/* 検索ボタン */}
      <button
        type="submit"
        className="w-[137px] h-[93px] bg-[#33031e] rounded-[10px] absolute top-[19px] left-[993px] z-10 hover:opacity-90"
      >
        <span className="flex h-[37px] justify-start items-start font-['Inter'] text-[36px] font-bold leading-[37px] text-[#fffbf5] tracking-[3.6px] absolute top-[22px] left-[24px] text-left whitespace-nowrap z-[11]">
          開拓!
        </span>
      </button>
      </form>
    </div>

      <div className="w-[1512px] h-[1008px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/NyNc5pVHOS.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[1]" />
      <div className="w-[1332px] h-[3px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/SsOQqWdoKC.png)] bg-cover bg-no-repeat absolute top-[301px] left-[91px] z-[16]" />
      <div className="w-[858px] h-[664px] absolute top-[304px] left-[91px] z-[17]">
        <div className="w-[3px] h-[664px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/o7Jk6TuiH8.png)] bg-cover bg-no-repeat absolute top-0 left-[665px] z-[17]" />
        <div className="w-[250px] h-[52px] bg-[#fffbf5] rounded-[10px] border-solid border-[3px] border-[#33031e] absolute top-[12px] left-0 z-[2]">
          <span className="flex h-[31px] justify-start items-start font-['Inter'] text-[28px] font-bold leading-[31px] text-[#33031e] tracking-[2.8px] absolute top-[7px] left-[28px] text-left whitespace-nowrap z-[8]">
            ジャンル検索
          </span>
        </div>
        <div className="w-[181px] h-[52px] bg-[#fffbf5] rounded-[10px] border-solid border-[3px] border-[#33031e] absolute top-[12px] left-[677px] z-[3]">
          <span className="flex h-[31px] justify-start items-start font-['Inter'] text-[28px] font-bold leading-[31px] text-[#33031e] tracking-[2.8px] absolute top-[7px] left-[25px] text-left whitespace-nowrap z-[9]">
            作風検索
          </span>
        </div>
      </div>
      <div className="flex w-[812px] h-[93px] justify-between items-center absolute top-[856px] left-[341px] z-[14]">
        <div className="w-[136px] h-[93px] shrink-0 bg-[#33031e] rounded-[10px] relative z-[14]">
          <span className="flex h-[33px] justify-start items-start font-['Inter'] text-[36px] font-bold leading-[33px] text-[#fffbf5] tracking-[3.6px] absolute top-[28px] left-[22px] text-left whitespace-nowrap z-[15]">
            開拓!
          </span>
        </div>
        <div className="w-[138px] h-[93px] shrink-0 bg-[#33031e] rounded-[10px] relative z-[12]">
          <span className="flex h-[38px] justify-start items-start font-['Inter'] text-[36px] font-bold leading-[38px] text-[#fffbf5] tracking-[3.6px] absolute top-[28px] left-[22px] text-left whitespace-nowrap z-[13]">
            開拓!
          </span>
        </div>
      </div>
    </div>
  );
}
