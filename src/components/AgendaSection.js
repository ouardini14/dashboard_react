import React from 'react'

export default function AgendaSection() {
  return (
    <div>
      <div className='flex flex-col md:flex-row items-center justify-between gap-3'>
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

    </div>
  )
}
