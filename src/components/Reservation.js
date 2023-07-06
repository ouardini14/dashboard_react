import React from 'react'
import { ClockIcon } from '@heroicons/react/24/outline'

export default function Reservation({reservation}) {
  return (
    <div className={`min-w-[280px] max-w-[550px]  rounded-lg  border border-orange-400 hover:shadow-lg cursor-pointer md:hover:scale-105 transition-all ease-in-out duration-300`}>
      <div className='flex items-center justify-between text-white bg-orange-400 px-3 py-3'>
        <div className=' flex gap-5 text-sm md:text-base'>
          <h3>{reservation?.title}</h3>
          <div className='flex items-center gap-1'>
            <ClockIcon className='w-6 h-6'/>
            <span>{reservation.time}</span>
          </div>
        </div>
          <img src="/img/health.png" alt=""  className='w-6 h-6'/>
      </div>

      <div className='px-3 pt-4'>
        <h3 className='text-xl font-semibold'>{reservation.by}</h3>
        <span className='text-xs text-gray-400'>{reservation.sub}</span>
        <p className= 'text-sm   pr-7 pt-1 '>{reservation.desc}</p>
      </div>

      <div className=' flex flex-wrap items-center justify-end gap-4 p-3'>
        {reservation?.tags?.map((tag,i)=>
        <div className='bg-primary text-white px-3 py-2 text-sm rounded-md' key={i}>
            {tag}
        </div>
        )}
      </div> 
    </div>
  )
}
