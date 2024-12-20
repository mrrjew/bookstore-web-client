// Inspiration.tsx
import React from 'react';
import Swiperrr from '@/app/components/Swiper';  // Ensure this path is correct
import { testimonials } from '@/app/data/testimonials';

export default function Inspiration() {
  return (
    <div className="mt-24">
      <h1 className='block-heading !text-center !text-3xl md:!text-5xl font-libre'>
        Be Inspired To Read More
      </h1>
      <Swiperrr data={testimonials} />  {/* Correct data passing */}
    </div>
  );
}
