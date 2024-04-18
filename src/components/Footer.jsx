import React from 'react'
import { NavItems } from '../constants'

function Footer() {
  return (
    <div className='sticky bottom-0 bg-white'>
    <hr className='border-t-2'/>
    <div className='flex justify-between items-center w-[327px] mx-auto py-2'>{
      NavItems.map((item, index) => (
        <div key={index} className='flex flex-col items-center gap-1'>
          <img src={item.Icon} alt="" />
          <p className={`text-[#707070] text-[10px] ${item.title === null? "hidden":"block"}`}>{item.title}</p>
        </div>
      ))
    }</div>
      </div>
  )
}

export default Footer