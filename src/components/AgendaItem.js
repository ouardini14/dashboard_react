import React from 'react'

export default function AgendaItem({reservation}) {
  return (
     <div className=' relative w-full h-full sm:flex  text-white bg-orange-400 rounded-lg hover:opacity-40 cursor-pointer transition-all ease-in-out duration-300  '>
      <div className=' sm:inline px-2 sm:px-0 sm:pl-2 sm:pr-4 py-2    '>
        <h3 className='text-[10px] text-center sm:text-[15px]  font-semibold sm:truncate'>{reservation.title}</h3>
        <span className='hidden sm:inline text-[13px] font-light'>{reservation.time}</span>
          </div>   
        <div className='hidden sm:inline absolute right-0 h-full text-center [writing-mode:vertical-lr] bg-primary rounded-r-lg  '>
        {reservation.tags[0]}
      </div>

    </div>
   
  )
}
