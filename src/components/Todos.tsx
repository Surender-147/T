import React from 'react'
import { Check, Trash } from './common/Icons'

const Todos = () => {
  return (
    <div className='flex items-center min-h-screen '>
       <div className="rounded-lg w-full  bg-white border border-solid border-[#E2E8F0] p-7 max-w-[480px] mx-auto">
       <h1 className="text-[24px] font-[600] text-[#020617] leading-normal text-center mb-7">Todos</h1>
       <p className='text-[12px] font-medium mb-2 text-[#64748B] leading-normal'>Enter Todo</p>
       <div className="flex justify-between mb-[18px] pt-1 pb-1 pr-[6px] pl-6 rounded-lg bg-white border border-solid border-[#E2E8F0]">
        <input className='w-[80%] text-[#334155] text-[14px] font-normal leading-normal ' type="text" placeholder='Learn html css'/>
        <button className="common_btn">Add</button>
       </div>
       <div className="flex justify-between  py-[10px] px-4 !border-b-0 rounded-t-lg  bg-white border border-solid border-[#E2E8F0]">
          <span className='text-[#334155] text-[14px] font-normal leading-normal'>Todo one</span>
          <div className="flex gap-3">
                  <Trash />
                  <Check />
          </div>
       </div>
       <div className="flex justify-between  py-[10px] px-4 !border-b-0  bg-white border border-solid border-[#E2E8F0]">
          <span className='text-[#334155] text-[14px] font-normal leading-normal'>Todo one</span>
          <div className="flex gap-3">
                  <Trash />
                  <Check />
          </div>
       </div>
       <div className="flex justify-between  py-[10px] px-4 !border-b-0  bg-white border border-solid border-[#E2E8F0]">
          <span className='text-[#334155] text-[14px] font-normal leading-normal'>Todo one</span>
          <div className="flex gap-3">
                  <Trash />
                  <Check />
          </div>
       </div>
       <div className="flex justify-between  py-[10px] px-4  rounded-b-lg  bg-white border border-solid border-[#E2E8F0]">
          <span className='text-[#334155] text-[14px] font-normal leading-normal'>Todo one</span>
          <div className="flex gap-3">
                  <Trash />
                  <Check />
          </div>
       </div>
       </div>
    </div>
  )
}

export default Todos
