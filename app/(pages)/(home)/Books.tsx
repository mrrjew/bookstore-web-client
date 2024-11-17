
"use client"
import Book from '@/app/components/Book'
import { books } from '@/app/data/books'
import React from 'react'
import { BiSolidChevronLeft, BiSolidChevronRight } from 'react-icons/bi'

export default function Books() {
  

  return (
    <div className='my-24 relative '>
        <h1 className='block-heading !text-center !text-3xl md:!text-5xl font-libre'>Enjoy Personalized Content</h1>
        <div className="absolute top-[45%] z-10 flex items-center justify-between w-full ">
          <div className="bg-white shadow-lg cursor-pointer rounded-full mx-2 font-thin p-4">
            <BiSolidChevronLeft className='text-3xl text-gray-700'/>
          </div>
            
          <div className="bg-white shadow-lg cursor-pointer rounded-full mx-2 font-thin p-4">
            <BiSolidChevronRight className='text-3xl text-gray-700'/>
          </div>

        </div>

        <div className='relative my-8 w-screen h-max overflow-x-scroll '>
          <div className="flex gap-14  books w-max mt-12">
            {
              books.map((book) => (
                <Book key={book.title} {...book}/>
              ))
            }
            </div>
        </div>
    </div>
  )
}
