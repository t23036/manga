'use client';

import React from 'react'

const DarkRoundedButton2 = () => {
  return (
    <button className='bg-black dark:bg-black border-dark dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
      Go
    </button>
  )
}
const MultipleButtons = () => {
    const buttonRows = [
        5,  // 1行目に4つ
        4,  // 2行目に3つ
        5,  // 3行目に2つ
        4,  // 4行目に1つ
      ];
    
      return (
        <div>
          {buttonRows.map((buttonCount, rowIndex) => (
            <div key={rowIndex} className="flex justify-start mb-4"> {/* 横並びに配置 */}
              {Array.from({ length: buttonCount }, (_, index) => (
                <div key={index} className="mx-2"> {/* ボタン間に間隔を設定 */}
                  <DarkRoundedButton2 />
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    };    

export default MultipleButtons