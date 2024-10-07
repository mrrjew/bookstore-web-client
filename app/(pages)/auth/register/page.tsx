"use client"

import React, { useState } from "react";
import artwork from "@/app/assets/images/artwork.png";
import google from "@/app/assets/images/google.png";
import Image from "next/image"
import Link from "next/link";
import SwitchJsx from "@/app/components/Switch";

export default function Page() {

    // toggle subscription to newsletter
    const [newsLetter,setNewsLetterSubscription] = useState(false)

  return (
    <div className="flex font-var(--font-geist-mono) items-center h-screen w-full">
      <div className="w-4/6 h-screen relative">
       <Link href="/" className="absolute top-14 block-heading left-14 !text-light text-2xl">Kojo{"\'"}s Bookhub</Link>
        <Image src={artwork} objectFit="cover" alt="artwork" className="h-screen w-full"/>
       <p className="absolute bottom-8 left-14 !text-light paragraph">@joelit</p>
      </div>
    
      
     <div className="w-full flex flex-col bg-[url('app/assets/images/artwork.png vcfgtgf')] h-contain items-center justify-center">
     <div className="flex bg-white rounded-full w-3/5 py-8 px-8 flex-col p-10 text-left items-center justify-center ">
        <h1 className="block-heading">Create an account</h1>
        <p className="paragraph">Sign up to get access to 200k+ premium books</p>

        <button type="button" className="p-2.5 my-2.5 w-full justify-center rounded-full flex items-center gap-4 border-[0.5px] border-gray-200/80">
            <Image src={google} alt="google" className="w-8 h-8"/>
            <p className="paragraph !font-normal"> Sign up with Google</p>
        </button>

        <div className="my-8">
            <input type="text" className="input !border-b-0 rounded-t-lg" placeholder="Username"/>
            <input type="email" className="input !ring-b-transparent rounded-b-lg" placeholder="Email address"/>
            <br />
            <input type="password" className="input !border-b-0 rounded-t-lg mt-2 ring-t-transparent" placeholder="Password"/>
            <input type="password" className="input rounded-b-lg" placeholder="Confirm Password"/>
        </div>

        

        <SwitchJsx enabled={newsLetter} setEnabled={setNewsLetterSubscription} text="Stay up to date with latest books" bracketText=" Daily "/>

        <button type="button" className="button">Sign up</button>

        <p className="paragraph">Already have an account? <Link href="/auth/login" className="!text-seagreen paragraph"> Sign in</Link></p>
      </div>
     </div>
    </div>
  );
}
