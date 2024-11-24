import Swiperrr from '@/app/components/Swiper'
import { testimonials } from '@/app/data/testimonials'
import React from 'react'

export default function Inspiration() {
  return (
    <div className="my-12">
        <h1 className='block-heading !text-center !text-3xl md:!text-5xl font-libre'>Be Inspired To Read More</h1>

        <Swiperrr data={testimonials}/>
    </div>
  )
}
