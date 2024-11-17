import React from 'react'
import { Books } from '../types/books'
import Image from 'next/image'
import { GrFavorite } from "react-icons/gr";
import { FiShoppingCart, FiStar } from "react-icons/fi";
import Link from 'next/link';


 export default function Book({
    title,
    author,
    image,
    description,
    price,
    pages,
    language,
 }:Books) {
  return (
    <div className='w-80 h-max pb-8 rounded-lg shadow-sm bg-white px-6 py-3.5 flex flex-col' >
      <div className="w-full rounded-lg">
       <Image src={image} alt={title} className='w-full h-[250px] rounded-lg' width={100} height={100}/>
      </div>

       <div className="flex flex-col space-y-4 mt-3.5">
         <h1 className='block-heading'>{title}</h1>
         <i className='font-italic text-gray-600'>_{author}</i>
         <p>{description}</p>

         <div className="flex items-center justify-between">
           <div className="flex flex-col">
              <p className='block-heading !text-3xl tracking-tight !font-bold my-2'>$ {price}</p>
              <p className='text-sm'>{pages} pages</p>
              <p className='text-sm font-semibold'>{language}</p>
           </div>

            <div className='flex flex-col mt-2.5 gap-2 text-xl text-gray-600'>
               <div className="flex w-full justify-around ">
                 <GrFavorite className='cursor-pointer'/>
                 <FiShoppingCart className='cursor-pointer'/>
                 <FiStar className='cursor-pointer' />
               </div>

               <Link href="" className='button !rounded-lg !py-2.5 !my-0 !mt-2.5'>View Book</Link>
            </div>
         </div>
       </div>
    </div>
  )
}
