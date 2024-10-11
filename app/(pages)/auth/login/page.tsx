"use client"

import React from "react";
import artwork from "@/app/assets/images/artwork.png";
import google from "@/app/assets/images/google.png";
import Image from "next/image"
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup"

export default function Page() {
  //validate forms with yup and formik
  const formik = useFormik({
    initialValues: {
      email:"",
      password:""
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password:Yup.string().required("Required")
    }),
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <div className="flex font-var(--font-geist-mono) items-center h-screen w-full">
    
      
     <div className="w-full flex flex-col bg-[url('app/assets/images/artwork.png vcfgtgf')] h-contain items-center justify-center">
     <div className="flex bg-white rounded-xl w-full sm:w-3/5 py-8 px-8 flex-col p-10 text-left items-center justify-center ">
        <h1 className="block-heading">Sign in</h1>
        <p className="paragraph">Sign in to continue reading your starred books</p>

        <button type="button" className="p-2.5 my-2.5 w-full justify-center rounded-full flex items-center border-[0.5px] border-gray-200/80">
            <Image src={google} alt="google" className="w-8 h-8"/>
            <p className="paragraph !font-[400]"> Sign in with Google</p>
        </button>

        <form onSubmit={() => formik.handleSubmit} className="my-8">
            <input type="email" {...formik.getFieldProps("email")} className="input border-[0.5px] border-gray-200/80 rounded-t-md" placeholder="Email/Username"/>
            {formik.touched.email && formik.errors.email ? <p className="paragraph !text-cardinal">{formik.errors.email}</p> : null}
            
            <input type="password" {...formik.getFieldProps("password")} className="input rounded-b-md !border-t-0 border-[0.5px] border-gray-200/80" placeholder="Password"/>
        </form>

        <Link href="/auth/forgot-password" className="!text-seagreen paragraph">Forgot password?</Link>
        
        <button type="submit" className="button">Sign in</button>

        <p className="paragraph">Don{"\'"}t have an account yet? <Link href="/auth/register" className="!text-seagreen paragraph font-[600]"> Register</Link></p>
      </div>
     </div>

     <div className="w-4/6 max-md:hidden h-screen font-kathen relative">
       <Link href="/" className="absolute top-14 block-heading left-14 !text-light text-2xl">Kojo{"\'"}s Bookhub</Link>
        <Image src={artwork} objectFit="cover" alt="artwork" className="h-screen w-full"/>
       <p className="absolute bottom-8 left-14 !text-light paragraph">@joelit</p>
      </div>
    </div>
  );
}
