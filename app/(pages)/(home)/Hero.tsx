import Link from "next/link";
import React from "react"
import { MdArrowRightAlt } from "react-icons/md";


export default function Hero(){
    return (
      <>
        <div className="bg-light bg-cream-pattern bg-blend-light bg-cover bg-no-repeat flex flex-col justify-center items-center w-full h-max sm:px-20 sm:py-20">
          <div className="space-y-6 w-full p-4 sm:w-1/2 text-center flex flex-col justify-center items-center mb-16 mt-16 container">
            <h1 className="font-libre font-semibold text-4xl sm:text-6xl">The <span className="text-cardinal">Book </span>Store</h1>
            <p>
              {" "}
              Dive into our curated collections of timeless classics and modern
              masterpieces, handpicked to captivate your imagination and expand
              your horizon. Whether you{"\'"}re seeking thrilling adventures,
              profound insights, or a cozy escape, our shelves await with the
              stories you've been longing to uncover.{" "}
            </p>

            <Link href="/store" className="px-6 py-4 paragraph rounded-md flex items-center bg-gradient-to-l from-tan to-light hover:from-light hover:to-tan w-max transition-all duration-500 delay-150 ease-in-out">Find Your Next Read <MdArrowRightAlt /></Link>
          </div>

          {/* carousel */}
            <div className="w-screen h-[90vh] bg-books-collage relative rounded-[3%] -mb-40">
              <div className="bg-gradient-to-t from-light to-transparent absolute bottom-0 w-full h-1/3"></div>
            </div>
        </div>
      </>
    );
}