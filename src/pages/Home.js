import React from "react";
import {DocumentPlusIcon, MagnifyingGlassIcon, QuestionMarkCircleIcon} from '@heroicons/react/24/outline'
import DocsSection from "../components/DocsSection";
export default function Home() {
    return (
        <div className=" py-10 space-y-9  ">
            <div className="flex flex-col gap-2 sm:flex-row justify-around items-center px-5 sm:px-12 text-center">
                <div className="flex flex-col  sm:flex-row justify-around items-center bg-white text-black px-5 py-4 rounded-xl  gap-3">
                    <div className="cursor-pointer rounded-lg  px-5 py-2  hover:bg-secondary/10 hover:text-secondary transition-all ease-in-out duration-300 ">Lorem Ipsum Lore</div>
                    <span className="h-1 w-9 sm:h-9 sm:w-1  bg-gray-600"></span>
                    <div className="cursor-pointer rounded-lg px-5 py-2  hover:bg-secondary/10 hover:text-secondary transition-all ease-in-out duration-300 ">Lorem Ipsum Lorem Ipsum </div>
                    <span className="h-1 w-9 sm:h-9 sm:w-1  bg-gray-600"></span>
                    <div className=" cursor-pointer rounded-lg px-5 py-2  hover:bg-secondary/10 hover:text-secondary transition-all ease-in-out duration-300 ">
                        Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem
                    </div>
                </div>
                <div>

                    <button className="flex justify-around items-center px-6 py-2 bg-primary text-white rounded-xl shadow-lg  transition-all ease-in-out duration-300 hover:opacity-50 ">
                        <DocumentPlusIcon className="w-6 h-6 "/>
                        <span>Ajouter Un Document</span>
                    </button>

                </div>
            </div>


            <div className=" w-full flex justify-center px-5 sm:px-12">
                <div className="flex flex-col  sm:flex-row gap-3  md:gap-20 justify-around items-center   px-5 py-4 bg-slate-100 rounded-xl  w-fit text-center ">
                    <div className="cursor-pointer rounded-lg  px-5 py-2  hover:bg-secondary/10 hover:text-secondary transition-all ease-in-out duration-300 ">
                        Documents courants
                    </div>
                    <div className="cursor-pointer rounded-lg  px-5 py-2  hover:bg-neutral/10 hover:text-neutral transition-all ease-in-out duration-300 ">
                        Documents archivés
                    </div>
                    <div className='relative   bg-white space-x-0 py-1 px-1  md:space-x-3 md:py-4 md:px-3  max-w-fit rounded-xl flex items-center justify-center '>
                        <input
                            type="text"
                            placeholder={"Recherche"}
                            className="outline-none text-black m-0 border-0 focus:ring-0 px-2 pr-1 "
                        />
                        <MagnifyingGlassIcon className="h-5 w-5 text-black" />

                    </div>


                </div>

            </div>


            <DocsSection />

          <div className="bg-white px-12 py-9">

                <div className="flex flex-col gap-8 sm:gap-2 sm:flex-row items-center justify-between">
                        <div className="space-y-2">
                            <h2 className="font-bold text-4xl">Besoin d'aide ?</h2>
                            <p className="text-sm text-gray-400">Consultez notre aide en ligne ou contactez-nous</p>
                        </div>
                    <button className="flex justify-around items-center px-6 py-2 bg-primary text-white rounded-xl shadow-lg transition-all ease-in-out duration-300 hover:opacity-50   ">
                        <QuestionMarkCircleIcon className="w-6 h-6 " />
                        <span>Consulter Le Centre D'aide</span>
                    </button>
                    </div>

            </div>
        </div>
    );
}
