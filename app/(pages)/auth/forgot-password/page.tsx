"use client"

import React from "react";
import artwork from "@/app/assets/images/artwork.png";
import Image from "next/image"
import Link from "next/link";

export default function Page() {

  return (
    <div className="flex  md:items-center md:justify-center font-var(--font-geist-mono) items-center h-screen w-full">
      <div className="w-4/6 h-screen max-md:hidden">
       <Link href="/" className="absolute top-14 block-heading left-14 !text-light text-2xl">Kojo{"\'"}s Bookhub</Link>
        <Image src={artwork} objectFit="cover" alt="artwork" className="h-screen w-full"/>
       <p className="absolute bottom-8 left-14 !text-light paragraph">@joelit</p>
      </div>
    
      
     <div className="w-full flex flex-col md:items-center md:justify-center bg-[url('app/assets/images/artwork.png vcfgtgf')] h-contain">
     <div className="flex bg-white  md:items-center md:justify-center rounded-xl w-2/4 py-8 px-8 flex-col p-10 text-left">
        <h1 className="block-heading mb-10 ">Forgot Password?</h1>
        <p className="paragraph">Enter the email address you used when you joined and we’ll send you instructions to reset your password.

        </p>
        <p className="paragraph mt-4">For security reasons, we do NOT store your password. So rest assured that we will never send your password via email.</p>
        
        <input type="email" className="input rounded-md mt-10" placeholder="Email Address"/>

        <button type="button" className="button">Send Reset Instructions</button>

      </div>
     </div>
    </div>
  );
}
