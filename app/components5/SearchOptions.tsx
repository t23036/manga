'use client';

import React from 'react'

export default function SearchOptions() {
    return (
      <div className="w-[1903px] h-[949px] absolute top-[435px] left-[130px] z-[16]">
        <div className="w-[356px] h-[75px] bg-[#fffbf5] rounded-[10px] border-[3px] border-[#33031e] absolute top-[16px] left-0 z-[1]">
          <span className="flex h-[51px] justify-start items-start font-['Inter'] text-[40px] font-bold leading-[48.409px] text-[#33031e] tracking-[4px] absolute top-[9px] left-[44px] text-left whitespace-nowrap z-[7]">
            ジャンル検索
          </span>
        </div>
        <div className="w-[258px] h-[75px] bg-[#fffbf5] rounded-[10px] border-[3px] border-[#33031e] absolute top-[16px] left-[967px] z-[2]">
          <span className="flex h-[45px] justify-start items-start font-['Inter'] text-[40px] font-bold leading-[45px] text-[#33031e] tracking-[4px] absolute top-[12px] left-[37px] text-left whitespace-nowrap z-[8]">
            作風検索
          </span>
        </div>
      </div>
    );
  }
  