import Link from "next/link";
import React from "react"
import { MdArrowRightAlt } from "react-icons/md";


export default function Hero(){
    return (
      <>
        <div className="bg-light bg-cover bg-no-repeat flex justify-between w-full h-[80vh] px-20 py-20">
          <div className="space-y-6 w-1/2 mt-16 container">
            <h1 className="font-libre font-semibold text-6xl">The <span className="text-seagreen">Book </span>Store</h1>
            <p>
              {" "}
              Dive into our curated collections of timeless classics and modern
              masterpieces, handpicked to captivate your imagination and expand
              your horizon. Whether you're seeking thrilling adventures,
              profound insights, or a cozy escape, our shelves await with the
              stories you've been longing to uncover.{" "}
            </p>

            <Link href="/store" className="px-6 py-4 paragraph flex items-center bg-gradient-to-l from-tan to-light hover:from-light hover:to-tan w-max transition-all duration-500 delay-150 ease-in-out">Find Your Next Read <MdArrowRightAlt /></Link>
          </div>

          {/* carousel */}
            <div className="w-1/2 p-4 bg-tan"></div>
        </div>
      </>
    );
}