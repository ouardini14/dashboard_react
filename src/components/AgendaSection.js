import React from 'react'
import AgendaItem from '../components/AgendaItem'
import { ChevronLeftIcon,ChevronRightIcon } from '@heroicons/react/24/outline'

export default function AgendaSection({reservations}) {
  const time = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
  const daysOfWeekArray = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

  return (
    <div>
      <div className='flex flex-col md:flex-row items-center justify-between gap-3 pb-10'>
        <div className='flex items-center  gap-3'>
          <h3 className='text-3xl font-semibold'>Mon agenda</h3>
          <button className='bg-blue-400 px-5 py-1 rounded-2xl text-white hover:opacity-30 transition-all ease-in-out duration-300'>Button 2</button>
        </div>
        <div className='flex items-center gap-3'>
          <button className='px-3 py-1 rounded-2xl bg-gray-200 text-gray-400 hover:bg-primary/10 hover:text-primary transition-all ease-in-out duration-300'>Journée</button>
          <button className='px-3 py-1 rounded-2xl  bg-primary/10 text-primary transition-all ease-in-out duration-300'>Semaine</button>
          <button className='px-3 py-1 rounded-2xl bg-gray-200 text-gray-400 hover:bg-primary/10 hover:text-primary transition-all ease-in-out duration-300'>Mois</button>
        </div>
      </div>

<div className='relative'>
        <div className=' 2xl:py-0 py-5 2xl:absolute origin-center top-9  flex items-center justify-center gap-5 2xl:justify-between 2xl:w-[1070px] text-black'>
          <button className='p-2 bg-white rounded-full shadow-xl '><ChevronLeftIcon className='h-5 w-5' /></button>
          <button className='p-2 bg-white rounded-full shadow-xl'><ChevronRightIcon className='h-5 w-5' /></button>
        </div>
        <div className='  flex max-w-[1000px]'>

          <div className='flex flex-col  px-2 text-xs sm:text-base md:text-lg '>
            <div className='h-14 sm:h-16 md:h-[100px]'>

            </div>
            {
              time.map((el, i) => (
                <div key={i} className='h-12 sm:h-16'>
                  {el}
                </div>
              ))
            }
          </div>
          <div className='bg-white  '>
            <div className='grid grid-cols-7 border-2  divide-y divide-x divide-gray-200 '>
              {daysOfWeekArray.map((el, i) => (
                <div key={i}  className={`text-xs sm:text-base md:text-lg py-8 flex items-center justify-center text-center w-auto h-14 sm:h-20 md:h-28 ${i == 0 && 'font-semibold drop-shadow-md'}`}>
                  {el} <br />
                  {17 + i}/04
                </div>
              ))}
              {Array.apply(null, Array(105)).map((el, i) => (
                <div key={i} className=' 2xl:min-w-[140px] w-auto xl:min-w-[180px]  h-12 sm:h-16 '>
                  {i == 29 && <AgendaItem reservation={reservations[0]} />}
                </div>
              ))}
            </div>
            <div></div>
          </div>


        </div>
</div>

    </div>
  )
}
