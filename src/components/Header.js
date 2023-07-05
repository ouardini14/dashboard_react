import React from 'react'
import { BellIcon, CalendarDaysIcon, ChevronDownIcon, DocumentDuplicateIcon, QuestionMarkCircleIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className='w-screen px-12 py-10 bg-gradient-to-r from-primary to-[#85CAFA] text-white '>
      <div className='flex justify-between items-center'>
        <h1 className='font-semibold text-5xl'>
          Logo
        </h1>

        <div className='flex justify-around items-center gap-5'>
          <div className='flex justify-around items-center gap-3' >
            <NavLink
              to="/Agenda"
              className={({ isActive }) =>
                isActive ? "text-white bg-primary rounded-full" : "text-primary bg-white rounded-full" 
              }
            >
              <CalendarDaysIcon className='h-10 w-10      hover:opacity-40 transition-all ease-in-out duration-300 p-2  ' />
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
               `${isActive ? "text-white bg-primary rounded-full" : "text-primary bg-white rounded-full"} relative hover:opacity-40 transition-all ease-in-out duration-300  rounded-full`
              }
            >
              <span className='bg-red-500 w-3 h-3 rounded-full absolute top-0 right-0'></span>

              <DocumentDuplicateIcon className='h-10 w-10      p-2  ' />
            </NavLink>
            <NavLink
              to="/"
              className="relative hover:opacity-40 transition-all ease-in-out duration-300 bg-white rounded-full text-primary   "
                          >
              <span className='bg-red-500 w-3 h-3 rounded-full absolute top-0 right-0'></span>

              <BellIcon className='h-10 w-10    p-2  ' />
            </NavLink>
            <NavLink
              to="/Help"
              className={({ isActive }) =>
                isActive ? "text-white bg-primary rounded-full" : "text-primary bg-white rounded-full"
              }
            >
              <QuestionMarkCircleIcon className='h-10 w-10      hover:opacity-40 transition-all ease-in-out duration-300 p-2  ' />
            </NavLink>


          </div>

          <div className='flex justify-between items-center group hover:bg-white/50 cursor-pointer transition-all ease-in-out duration-300 gap-3 px-4 py-2 rounded-lg'>
            <div className='flex justify-between items-center gap-1'>
              <UserCircleIcon className='h-6 w-6 text-white  ' />
              <span>Full name Lorem</span>
            </div>
            <ChevronDownIcon className='h-6 w-6 text-white group-hover:rotate-180  transition-all ease-in-out duration-300' />


          </div>

        </div>




      </div>


    </div>
  )
}
