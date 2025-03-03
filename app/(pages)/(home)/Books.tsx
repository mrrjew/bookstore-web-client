"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";
import { books } from "@/app/data/books";
import Book from "@/app/components/Book";
import { Pagination, Navigation, Mousewheel } from "swiper/modules";

export default function Books() {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <div className="my-24 relative">
      <h1 className="block-heading !text-center !text-3xl md:!text-5xl font-libre">
        Enjoy Personalized Content
      </h1>

      <div className="hidden absolute top-[45%] z-10 sm:flex items-center justify-between w-full">
        <div
          className="bg-white shadow-lg cursor-pointer rounded-full mx-2 font-thin p-4 custom-prev"
          onClick={() => swiperRef.current?.swiper?.slidePrev()}
        >
          <BiSolidChevronLeft className="text-3xl text-gray-700" />
        </div>
        <div
          className="bg-white shadow-lg cursor-pointer rounded-full mx-2 font-thin p-4 custom-next"
          onClick={() => swiperRef.current?.swiper?.slideNext()}
        >
          <BiSolidChevronRight className="text-3xl text-gray-700" />
        </div>
      </div>

      <Swiper
        ref={swiperRef}
        spaceBetween={14}
        mousewheel={{ forceToAxis: true }}
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 14,
          },
        }}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        modules={[Pagination, Navigation, Mousewheel]}
        className="relative my-8 w-screen h-max"
      >
        {books.map((book) => (
          <SwiperSlide key={book.title}>
            <Book {...book} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination"></div>
    </div>
  );
}
