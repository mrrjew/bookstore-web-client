"use client"

import React, { ChangeEvent, useState } from 'react'

export default function Search(){
    
    const [searchParams,setSearchParams] = useState({query:''})
    const GetPacket = (e:ChangeEvent<HTMLInputElement>) => {
        setSearchParams({
            query: e.target.value
        })
    }
    
    const ForwardPacket = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        window.location.href = `/store?name=${searchParams.query}`
        console.log(`/store?name=${searchParams.query}`)
        localStorage.setItem('name',searchParams.query.toString())
        
        localStorage.removeItem('show_search_nav')
    }
    
    const hideSearch = () => {
        localStorage.removeItem('show_search_nav')
        return searchParams.query == '' && window.location.reload()
    }
  return (
    <div className='fixed flex items-center justify-center'>
    <div onClick={hideSearch} className='cursor-normal -z-10 w-full absolute h-screen top-0 left-0 bg-slate-900/50 backdrop-blur-sm flex justify-center'>
    </div>
    <center>
    <div className="w-screen h-8 flex z-20 items-center justify-center">

            <form onSubmit={(e) => ForwardPacket(e)} >
                <div className='w-[70vw] h-max flex gap-2 rounded-xl z-10 p-2 sm:mt-60 mt-40 bg-cardinal bg-gradient-to-r from-cardinal to-purple-700'>
                <input className="bg-slate-800/60 focus:border-0 focus:outline-0 rounded-lg py-4 px-2 !text-white block-heading w-full h-full placeholder:text-white" placeholder="Enter name of book" onChange={(e) => GetPacket(e)}/>
                </div>
            </form>
    </div>
    </center>
    </div>
  )
}
