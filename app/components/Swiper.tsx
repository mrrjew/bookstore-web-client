"use client";

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/style.css';
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';

export type Testimonial = {
  content: string;
  name: string;
  profileImage: string;
};

type SwiperrrProps = {
  data: Testimonial[];
};

export default function Swiperrr({ data }: SwiperrrProps) {
  const swiperRef = useRef(null);

  return (
    <div className="swiper-container">
      <Swiper
        ref={swiperRef}
        speed={600}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        parallax={true}
        pagination={{ clickable: true, el: '.custom-pagination' }}
        navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
        modules={[Parallax, Pagination, Navigation,Autoplay]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>
        {data.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="text text-2xl text-gray-700" data-swiper-parallax="-100">
              <p className='text-7xl font-geistMono'>{'\"'}</p>
              <p>{testimonial.content}</p>
              <p className='!text-xl font-italic'>— {testimonial.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="custom-pagination swiper-pagination"></div>
    </div>
  );
}
