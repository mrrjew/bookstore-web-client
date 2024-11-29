"use client"

import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup"

export default function Page() {

  //validate form using formik and yup

  const formik = useFormik({
    initialValues:{email:""},
    validationSchema: Yup.object({
      email:Yup.string().email("Invalid email address").required("Required")
    }),
    onSubmit: value => {
      console.log(value)
    }
  })

  return (
    <div className="flex  md:items-center md:justify-center font-var(--font-geist-mono) items-center h-screen w-full">
      <div className="w-4/6 h-screen font-kathen max-md:hidden">
       <Link href="/" className="absolute top-14 block-heading left-14 !text-light text-2xl">Kojo{"\'"}s Bookhub</Link>
        <img src='/assets/images/artwork.png' alt="artwork" className="h-screen w-full"/>
       <p className="absolute bottom-8 left-14 !text-light paragraph">@joelit</p>
      </div>
    
      
     <div className="w-full flex flex-col md:items-center md:justify-center bg-[url('app/assets/images/artwork.png vcfgtgf')] h-contain">
     <div className="flex bg-white  md:items-center md:justify-center rounded-xl w-full sm:w-2/4 py-8 px-8 flex-col p-10 text-left">
        <h1 className="block-heading mb-10 ">Forgot Password?</h1>
        <p className="paragraph">Enter the email address you used when you joined and we’ll send you instructions to reset your password.

        </p>
        <p className="paragraph mt-4">For security reasons, we do NOT store your password. So rest assured that we will never send your password via email.</p>
        
        <form onSubmit={() => formik.handleSubmit()}>
          <input type="email" {...formik.getFieldProps("email")} className="input rounded-md mt-10" placeholder="Email Address"/>
          {formik.touched.email && formik.errors.email && <p className="paragraph !text-cardinal">{formik.errors.email}</p>}
        </form>

        <button type="submit" className="button">Send Reset Instructions</button>

      </div>
     </div>
    </div>
  );
}
