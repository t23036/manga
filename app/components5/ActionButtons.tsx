'use client';

import React from 'react'

export default function ActionButtons() {
    return (
      <div className="flex w-[1160px] h-[132px] justify-between items-center absolute top-[1223px] left-[486px] z-[13]">
        {[1, 2].map((item, index) => (
          <div
            key={index}
            className="w-[195px] h-[132px] shrink-0 bg-[#33031e] rounded-[10px] relative z-[13]"
          >
            <span className="flex h-[45px] justify-start items-start font-['Inter'] text-[40px] font-bold leading-[45px] text-[#fffbf5] tracking-[4px] absolute top-[43px] left-[45px] text-left whitespace-nowrap z-[14]">
              開拓!
            </span>
          </div>
        ))}
      </div>
    );
  }
  