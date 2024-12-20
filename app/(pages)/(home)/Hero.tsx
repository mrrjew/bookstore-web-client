import Link from "next/link";
import React from "react"
import { MdArrowRightAlt } from "react-icons/md";


export default function Hero(){
    return (
      <>
        <div className="bg-light bg-cream-pattern bg-blend-light bg-cover bg-no-repeat flex flex-col justify-center items-center w-full h-max sm:px-20 sm:py-20">
          <div className="space-y-6 w-full p-4 sm:w-1/2 text-center flex flex-col justify-center items-center mb-16 mt-16 container">
            <h1 className="font-semibold text-gray-900  bgfont-libre text-4xl text-balance tracking-tight sm:text-5xl">The <span className="bg-gradient-to-r from-cardinal to-purple-600 bg-clip-text text-transparent">Book </span>Store</h1>
            <p className="text-lg/8 mt-2 text-gray-600">
              {" "}
              Dive into our curated collections of timeless classics and modern
              masterpieces, handpicked to captivate your imagination and expand
              your horizon. Whether you{"\'"}re seeking thrilling adventures,
              profound insights, or a cozy escape, our shelves await with the
              stories you{"\'"}ve been longing to uncover.{" "}
            </p>

            <div className="relative my-12 group animate-tilt">
               <div className="absolute group-hover:opacity-100 transition duration-200 bg-gradient-to-r from-cardinal to-purple-700 w-full h-full -inset-75 rounded-full blur"></div>
               <Link href="/store" className="group-hover:text-gray-900/60 relative px-6 py-2.5 bg-white paragraph2 rounded-full flex items-center !text-gray-900 ">Find Your Next Read <MdArrowRightAlt /></Link>
            </div>
          </div>

          {/* overlay */}
            <div className="w-screen h-[90vh] bg-books-collage relative rounded-[3%] -mb-40">
              <div className="bg-gradient-to-t from-light to-transparent absolute bottom-0 w-full h-1/3"></div>
            </div>
        </div>
      </>
    );
}