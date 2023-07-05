import React from 'react'
import AgendaSection from '../components/AgendaSection'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
import Reservation from '../components/Reservation'
import { reservations } from '../data/data'

export default function Agenda() {
    return (
        <div className=' space-y-9 '>

            <div className='grid grid-cols-3 min-h-[90vh]'>
                <div className=' relative px-7 py-10 border-r-2 border-x-gray-300'>
                    <div className='flex justify-between  pb-8'>
                        <h1 className='text-3xl font-semibold'>Mes Lorem Ipsum</h1>
                        <button className='flex items-center gap-1 text-sm text-gray-400 border border-gray-400 p-2 rounded-md'>
                            <AdjustmentsHorizontalIcon className="h-4 w-4  " />
                            Filter
                        </button>
                    </div>
                    <div className=' flex flex-col  gap-5 max-h-[85vh] overflow-y-auto px-5 '>
                        {
                            reservations.map((el, i) => (
                                <Reservation reservation={el} key={i} />
                            ))
                        }

                    </div>

                    <div className=' w-full py-10  z-10 flex justify-around'>
                        <div className="cursor-pointer rounded-xl  px-5 py-2  bg-neutral/10 text-neutral transition-all ease-in-out duration-300 ">

                            Documents courants
                        </div>
                        <div className="cursor-pointer rounded-xl  px-5 py-2  hover:bg-secondary/10 hover:text-secondary transition-all ease-in-out duration-300 ">

                            Documents archivés
                        </div>
                    </div>

                </div>
                <div className=' col-start-2 col-end-4 py-10 px-7'  >
                    <AgendaSection />
                </div>

            </div>




        </div>
    )
}
