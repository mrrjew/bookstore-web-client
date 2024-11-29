// Swiperrr.tsx
"use client";

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/style.css';

// Import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

export type Testimonial = {
  content: string;
  name: string;
  profileImage: string;
};

type SwiperrrProps = {
  data: Testimonial[];  // Corrected prop type
};

export default function Swiperrr({ data }: SwiperrrProps) {  // Destructure the data prop
  return (
    <Swiper
      speed={600}
      parallax={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Parallax, Pagination, Navigation]}
      className="mySwiper"
    >
      <div
        slot="container-start"
        className="parallax-bg"
        // style={{
        //   backgroundImage:
        //     'url(https://imgs.search.brave.com/cs5mGDvs8j1SEqtU9F_ZmT4xA0voTd6bJzx-nDNYMck/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQ4L2Ni/L2UzLzQ4Y2JlMzdj/NGE1MDk1YzIxMWU2/MzAzOWQ2NmI0NTJh/LmpwZw)'
        // }}
        data-swiper-parallax="-23%"
      ></div>
      {data.map((testimonial) => (
        <SwiperSlide key={testimonial.content}>
          <div className="text text-2xl text-gray-700 shadow-sm" data-swiper-parallax="-100">
            <p className='text-7xl font-geistMono'>{'\"'}</p>
            <p>{testimonial.content}</p>
            <p className='!text-xl font-italic'>— {testimonial.name}</p>  {/* Fixed dash and italic class */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
