'use client';
import React, { useState } from "react";

export default function Main2() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("人気順");
  const [isAsc, setIsAsc] = useState(true); // true: 昇順 ▲, false: 降順 ▼

  const options = ["更新順", "発売順", "漫画名順"];

  return (
  <><div className="main-container w-[1512px] h-[982px] bg-[#fff] relative overflow-hidden mx-auto my-0">
      <div className="w-[1512px] h-[982px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-08/9mMziynfw2.png)] bg-cover bg-no-repeat absolute top-[-15px] left-0 z-[1]" />
      <div className="w-[321px] absolute top-[3px] left-[1140px] z-[13]">
        
        {/* メインボタン */}
        <div className="w-[298px] h-[55px] bg-[#33031e] rounded-[10px] relative flex justify-center items-center">
          <span className="text-[#fffbf5] text-[36px] font-bold tracking-[3.6px]">
            {selected}
          </span>
        {/* 上下矢印：ボタン内に収まるよう調整 */}
        <div className="absolute top-[10px] left-[250px] h-[35px] z-[30] flex flex-col justify-between items-center text-[20px] font-bold cursor-pointer">
          <span
            className={`leading-none ${isAsc ? "text-[#af95a4]" : "text-[#fffbf5]"}`}
            onClick={() => setIsAsc(true)}
            title="昇順"
          >
            ▲
          </span>
          <span
            className={`leading-none ${!isAsc ? "text-[#af95a4]" : "text-[#fffbf5]"}`}
            onClick={() => setIsAsc(false)}
            title="降順"
          >
            ▼
          </span>
        </div>

        </div>

        {/* ドロップダウンメニュー */}
        {open && (
          <div className="w-[298px] bg-[#33031e] rounded-[10px] mt-2 absolute left-[23px] top-[73px] z-[11]">
            {options.map((option, index) => (
              <div
                key={option}
                className="px-[85px] py-2 text-[#fffbf5] text-[36px] font-bold tracking-[3.6px] hover:bg-[#551a34] cursor-pointer"
                onClick={() => {
                  setSelected(option);
                  setOpen(false);
                } }
              >
                {option}
                {index < options.length - 1 && (
                  <div className="w-[236px] h-px bg-[#fffbf5] opacity-20 mt-1" />
                )}
              </div>
            ))}
          </div>
        )}
        {/* トリガーエリア（全体クリックでメニュー開閉） */}
        <div
          className="absolute top-0 left-[23px] w-[298px] h-[55px] z-[20]"
          onClick={() => setOpen(!open)} />
      </div>
        <div className="w-[236px] h-px bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-08/7wSGNG7WFc.png)] bg-cover bg-no-repeat absolute top-[129.5px] left-0 z-[9]" />
        <div className="w-[236px] h-px bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-08/BLig47kjkn.png)] bg-cover bg-no-repeat absolute top-[180.5px] left-0 z-[8]" />
        <div className="w-[236px] h-px bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-08/2ebvY1kuMJ.png)] bg-cover bg-no-repeat absolute top-[237.5px] left-0 z-[7]" />
      </div>
        <div className="w-[1048px] h-[890px] absolute top-[38px] left-[74px] z-[6]">
        <div className="w-[165px] h-[197px] bg-[#fff] border-solid border border-[#33031e] relative z-[6] mt-0 mr-0 mb-0 ml-[14px]" />
        <div className="w-[1048px] h-[465px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-08/sOWE9OLr6k.png)] bg-cover bg-no-repeat relative z-[2] mt-[14.5px] mr-0 mb-0 ml-0">
          <div className="w-[165px] h-[197px] bg-[#fff] border-solid border border-[#33031e] relative z-[5] mt-[18.5px] mr-0 mb-0 ml-[14px]" />
          <div className="w-[165px] h-[197px] bg-[#fff] border-solid border border-[#33031e] relative z-[4] mt-[35px] mr-0 mb-0 ml-[14px]" />
        </div>
        <div className="w-[165px] h-[198px] bg-[#fff] border-solid border border-[#33031e] relative z-[3] mt-[15.5px] mr-0 mb-0 ml-[14px]" />
      </div></>
  );
}