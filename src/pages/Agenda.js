import React from 'react'
import AgendaSection from '../components/AgendaSection'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
import Reservation from '../components/Reservation'
import { reservations } from '../data/data'

export default function Agenda() {
    return (
        <div className=' space-y-9 '>

            <div className='flex flex-col  2xl:flex-row  min-h-[90vh]'>
                <div className=' relative px-3 sm:px-7 py-10 2xl:border-r-2 border-x-gray-300 2xl:max-w-[380px]'>
                    <div className='flex justify-between  pb-8'>
                        <h1 className='text-xl sm:text-3xl font-semibold'>Mes Lorem Ipsum</h1>
                        <button className='flex items-center gap-1 text-sm text-gray-400 border border-gray-400 p-2 rounded-md'>
                            <AdjustmentsHorizontalIcon className="h-4 w-4  " />
                            Filter
                        </button>
                    </div>
                    <div className=' flex 2xl:flex-col flex-row flex-nowrap  gap-5 2xl:max-h-[60vh] overflow-x-auto overflow-y-hidden 2xl:overflow-y-auto py-5 2xl:px-3 '>
                        {
                            reservations.map((el, i) => (
                                <Reservation reservation={el} key={i} />
                            ))
                        }

                    </div>

                    <div className=' w-full py-10  z-10 flex justify-around text-center'>
                        <div className="cursor-pointer text-sm sm:text-base rounded-xl  px-5 py-2  bg-neutral/10 text-neutral transition-all ease-in-out duration-300 ">

                            Documents courants
                        </div>
                        <div className="cursor-pointer text-sm sm:text-base rounded-xl  px-5 py-2  hover:bg-secondary/10 hover:text-secondary transition-all ease-in-out duration-300 ">

                            Documents archivés
                        </div>
                    </div>

                </div>
                <div
                 className=' flex-1 py-10 px-5 xl:px-7 self-center justify-self-center'  >
                    <AgendaSection  reservations={reservations}/> 
                </div>

            </div>




        </div>
    )
}
