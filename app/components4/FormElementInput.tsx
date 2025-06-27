'use client';

import React from "react";
import DarkRoundedButton from "./DarkRoundedButton";

const FormElementInput = () => {
  return (
    <section className='dark:bg-dark'>
      <div className='container'>
        <div className='-mx-4 flex flex-wrap'>
          <DefaultColumn>
            <div className="flex items-center space-x-4">  
            <ActiveInput />
            <DarkRoundedButton />
            </div>
          </DefaultColumn>
        </div>
      </div>
    </section>
  )
};

export default FormElementInput;

const DefaultColumn = ({children}) => {
  return (
    <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
      <div>{children}</div>
    </div>
  )
}

const ActiveInput = () => {
  return (
    <div className="flex-1">
      <label className='block text-base font-medium text-dark dark:text-white'>
      </label>
      <input
        type='text'
        placeholder='text'
        className='w-full bg-transparent rounded-md border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
      />
    </div>
  )
}