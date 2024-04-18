import React from 'react'
import { cart} from '../assets'
import { About, Market_Stats, Resources, heropart } from '../constants';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='w-[327px] mx-auto my-5  min-h-screen flex flex-col gap-3'>
            <button className='w-full  h-10  bg-[#2752E7] hover:bg-blue-700 text-white  py-2 px-4 rounded'>Trade</button>

            <div className='flex justify-around px-5 items-center gap-2 rounded-md  border-2 min-h-[162px]'>
                <div className='flex flex-col justify-start gap-4 w-9/12'>
                    <h1 className='text-[14px] font-abel'>{ heropart.title}</h1>
                    <p className='text-[#707070] text-[10px] font-abel'>{ heropart.description}</p>
                </div>
                <div className='icon mt-auto mb-10 '>
                    <img src={cart} alt="" />
                </div>
            </div>
            
            <div className='About flex flex-col items-start m-2 gap-2'>
                <h1 className='text-[16px] font-abel'>{About.title}</h1>
                <p className='text-[#707070] text-[10px] '>{About.description}</p>
            </div>

            {/* Resources */}

            <div className='About flex flex-col items-start m-2 gap-2'>
                <h1 className='text-[16px]'>Resources </h1>
                 <div className='flex justify-start flex-col gap-3'>
                    {Resources.map((item,index)=>(
                        <div className='flex justify-start items-center gap-2' key={index}>
                         <img src={item.Icon} alt=""  className='text-[#707070]' />
                        <Link to={item.url}>
                        <p className='text-[#2752E7] text-[16px]'>{item.title}</p>
                        </Link>
                    </div>
                    ))}
                 </div>
            </div>

        {/*  Market States */}

        <div className='w-[327px] mx-auto my-5  flex flex-col gap-8  '>
            <h1 className='text-[16px]'>Market Stats</h1>
             {Market_Stats.map((item,index)=>(
                 <div className='flex justify-between gap-3'key={index}>
                <div className='flex gap-2'>
                <img src={item.Icon} alt=""  className='text-[#707070]' />
                 <p className='text-[#707070] text-[16px]'>{item.title}</p>
                </div>
                 <p className='text-[#707070]'>
                    {item.value}
                 </p>
             </div>
             ))}
        </div>
        </div>
    )
}

export default Home