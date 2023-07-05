import { AdjustmentsHorizontalIcon, ArchiveBoxArrowDownIcon, ChevronDownIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline'
import React from 'react'
import {docs} from '../media/data/data'
export default function DocsSection() {
    console.log(docs)
  return (
    <div>
          <div className='grid grid-cols-6 bg-gray-100 border-gray-200 border-2 '> 
              <div className='relative    space-x-3  flex items-center justify-center  px-4  border-r-2 border-gray-200 py-5'>
                  <AdjustmentsHorizontalIcon className="h-5 w-5 text-gray-400 " />
                  <input
                      type="text"
                      placeholder={"FILTRER PAR"}
                      className="outline-none  bg-transparent text-black placeholder-gray-400  "                  />
              </div>
              <input
                  type="text"
                  placeholder={"Nom du document"}
                  className="outline-none  bg-transparent text-black placeholder-gray-400 px-4  border-r-2 border-gray-200 py-5"              />
              <input
                  type="text"
                  placeholder={"Numero"}
                  className="outline-none  bg-transparent text-black placeholder-gray-400 px-4  border-r-2 border-gray-200 py-5  "              />

              <div className='text-black flex justify-between items-center group  cursor-pointer transition-all ease-in-out duration-300 gap-3 px-4  border-r-2 border-gray-200 py-5   '>
                      <span>Type</span>
                  <ChevronDownIcon className='h-6 w-6  group-hover:rotate-180  transition-all ease-in-out duration-300' />
              </div>

              <div className='text-black flex justify-between items-center group  cursor-pointer transition-all ease-in-out duration-300 gap-3 px-4  border-r-2 border-gray-200 py-2'>
                  <span>Date</span>
                  <ChevronDownIcon className='h-6 w-6  group-hover:rotate-180  transition-all ease-in-out duration-300' />
              </div>
              <input
                  type="text"
                  placeholder={"Ajouté par"}
                  className="outline-none  bg-transparent text-black placeholder-gray-400  px-4  border-r-2 border-gray-200 py-5"
              />
        </div>
          <table className="table-fixed w-screen mt-4 border-separate border-spacing-y-8  text-center">
              <thead className='py-5'>
                  <tr className='border-b-2 border-gray-400 text-lg  '>
                      <th>Documents</th>
                      <th>Numero</th>
                      <th>Type</th>
                      <th>Date d'ajout</th>
                      <th>Ajouté par</th>
                      <th>Fichier</th>

                  </tr>
              </thead>
              <tbody>
                  {docs.map((el,i)=>
                      <tr className='text-sm hover:bg-gray-200/20 ' key={i}>
                          <td className='flex border-b-2 border-b-gray-400 py-5 text-left pl-8'>
                              <input type="checkbox" />
                              <span className='pl-2'>{el.name}</span>  
                            </td>
                          <td className='border-b-2 border-b-gray-400 py-5 text-lg' >{el.num}</td>
                          <td className='border-b-2 border-b-gray-400 py-5' >{el.type}</td>
                          <td className='border-b-2 border-b-gray-400 py-5 text-lg'>{el.date}</td>
                          <td className='border-b-2 border-b-gray-400 py-5'>{el.by}</td>
                          <td  className='border-b-2 border-b-gray-400 py-5 flex items-center justify-evenly '>
                            <DocumentArrowDownIcon className='w-7 h-7 text-primary cursor-pointer'/>
                              <ArchiveBoxArrowDownIcon className='w-7 h-7 text-neutral cursor-pointer' />
                          </td>

                      </tr>
                  )}
                
                 
              </tbody>
          </table>


    </div>
  )
}
