import React from 'react'

export default function AgendaSection() {
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

      <div className='  hidden md:flex'>
        <div className='flex flex-col  w-14 '>
          <div className='h-[100px]'>

          </div>
              {
            time.map((el,i)=>(
              <div className='h-16'>
                {el}
              </div>
            ))
              } 
            </div>
          <div className='bg-white  '>
          <div className='grid grid-cols-7 border-2  divide-y divide-x divide-gray-200 '>
            {daysOfWeekArray.map((el,i)=>(
              <div className={`py-8 text-center w-32 h-28 ${i == 0 && 'font-semibold drop-shadow-md'}`}>
                {el} <br/>
                {17+i}/04
                </div>
            ))}
            {Array.apply(null, Array(105)).map((el) => (
              <div className='   w-32 h-16 flex  items-center justify-center'> </div>
            ))}
          </div>
            <div></div>
          </div>


      </div>
    </div>
  )
}
