"use client"

import React, { useState } from "react";
import Link from "next/link";
import SwitchJsx from "@/app/components/Switch";
import {useFormik} from "formik"
import * as Yup from "yup"

export default function Page() {

    // toggle subscription to newsletter
    const [newsLetter,setNewsLetterSubscription] = useState(false)

    //form validation with yup & formik
    const formik = useFormik({
      initialValues:{
        username:'',
        email:'',
        password:''
      },
      validationSchema: Yup.object({
        username: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().min(3, 'Must be 3 characters or more')
        .max(32, 'Must be 32 characters or less').required('Required')
        ,
      }),
      onSubmit: values => {
        const payload = {
          ...values,
          newsLetter
        }
        console.log("payload",payload)
      }
    })

    //check if passwords match
    const [passwordsMatch,setPasswordsMatch] = useState<boolean | null>(null)


  return (
    <div className="flex items-center h-screen w-full">
      <div className="w-4/6 h-screen font-kathen max-md:hidden relative">
       <Link href="/" className="absolute top-14 block-heading left-14 !text-light text-2xl">Kojo{"\'"}s Bookhub</Link>
        <img src='/assets/images/artwork.png' alt="artwork" className="h-screen w-full"/>
       <p className="absolute bottom-8 left-14 !text-light paragraph">@joelit</p>
      </div>
    
      
     <div className="w-full flex flex-col h-contain items-center justify-center">
     <div className="flex bg-white rounded-md w-full w-3/5 py-8 sm:px-8 flex-col p-10 text-left items-center justify-center ">
        <h1 className="block-heading">Create an account</h1>
        <p className="paragraph !text-center">Sign up to get access to 200k+ premium books</p>

        <button type="button" className="p-2.5 my-2.5 w-full justify-center rounded-full flex items-center gap-4 border-[0.5px] border-gray-200/80">
            <img src='/assets/images/google.png' alt="google" className="w-8 h-8"/>
            <p className="paragraph !font-normal"> Sign up with Google</p>
        </button>

        <form onSubmit={() => formik.handleSubmit} className="my-8">
            <input type="text" {...formik.getFieldProps("username")} className="input !border-b-0 rounded-t-lg" placeholder="Username"/>
            {formik.touched.username && formik.errors.username ? <p className="paragraph !text-cardinal">{formik.errors.username}</p> : null}
            
            <input type="email" {...formik.getFieldProps("email")} className="input !ring-b-transparent rounded-b-lg" placeholder="Email address"/>
            {formik.touched.email && formik.errors.email ? <p className="paragraph !text-cardinal">{formik.errors.email}</p> : null}
            <br />
            <input type="password" {...formik.getFieldProps("password")} className="input !border-b-0 rounded-t-lg mt-2 ring-t-transparent" placeholder="Password"/>
            {formik.touched.password && formik.errors.password ? <p className="paragraph !text-cardinal">{formik.errors.password}</p> : null}
            
            <input type="password" onChange = {(e) => {
(function() {
  if (formik.touched.password && e.target.value === formik.values.password) {
    setPasswordsMatch(true);
  } else {
    setPasswordsMatch(false);
  }
})();            }} className="input rounded-b-lg" placeholder="Confirm Password"/>
            {(passwordsMatch === true) ? <p className="paragraph !text-seagreen">Passwords match</p> :
            (passwordsMatch === false) ? <p className="paragraph !text-cardinal">Passwords do not match</p> : null}
        </form>

        

        <SwitchJsx enabled={newsLetter} setEnabled={setNewsLetterSubscription} text="Stay up to date with latest books" bracketText=" Daily "/>

        <button type="submit" className="button">Sign up</button>

        <p className="paragraph">Already have an account? <Link href="/auth/login" className="!text-seagreen paragraph"> Sign in</Link></p>
      </div>
     </div>
    </div>
  );
}
