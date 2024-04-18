import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
function Header() {
  return (
    < div className=''>
    <div className='flex mx-10 justify-between items-center pt-8 pb-2 '>
        <FaArrowLeft />
        <h1 className='text-2xl mx-2'>$38,692.02</h1>
        <FaStar />
    </div>
    <hr className=' border-b-1' />
    </div>
  )
}

export default Header