'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useState } from "react"
import { PhoneArrowDownLeftIcon } from "@heroicons/react/16/solid"
import { IoSearch } from "react-icons/io5";
import { NAV_ICONS, NAV_SOCIALS, NAVIGATION } from "../data/navigation"
import NavToggle from "./NavToggle"
import Search from "./Search"

export default function Navbar(){
    const pathname = usePathname()
    console.log(pathname)

    const isLoggedIn = false

    // function to toggle nav list
    const [show,setShow] = useState<boolean>(false)
    const toggleNav = () => {
      setShow((prev) => !prev)
    }

    //show search nav
    const [show_search_nav,set_show_search_nav] = useState<boolean>(false)
    localStorage.setItem('show_search_nav',show_search_nav.toString())

    const ShowSearchNav = () => {
      set_show_search_nav(prev => !prev)
      localStorage.setItem('show_search_nav',show_search_nav.toString())
    }

    return (
      <div
        className={`${
          pathname.includes("auth") ? "hidden" : "block"
        } paragraph w-full bg-light `}
      >
        {/* search nav */}
        {show_search_nav  &&  <Search/>}
        <div className="px-3.5 container">
          {/* first nav layer */}
          <div className="hidden sm:flex justify-between shadow-xs items-center py-2.5">
            <div className="flex gap-4 items-center">
              <Link href="#" className="">
                Find a book here
              </Link>
              <p className="flex items-center gap-2">
                <PhoneArrowDownLeftIcon className="text-cardinal w-4 h-4" />
                <span>+(233)-271-388-016</span>
              </p>
            </div>

            {/* socials */}
            <div className="flex gap-1.5 items-center">
              {NAV_SOCIALS.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="paragraph w-4 h-4"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/*  nav */}
          <div className="hidden sm:flex justify-between items-center py-6">
            {/* logo */}

            <Link href="/" className="block-heading !font-kathen">Joelit{"\'"}s Bookshub</Link>

            <div className="flex gap-12 items-center">
              {NAVIGATION.map((nav) => (
                <Link
                  key={nav.name}
                  className={`${
                    pathname === nav.href ? "text-cardinal" : ""
                  } relative hover:text-red-600/80 after:content-[" "] after:absolute after:bottom-0 after:top-6 after:right-[40%] after:h-[6px] after:w-[6px] after:bg-cardinal after:rounded-full ${
                    pathname !== nav.href ? "after:hidden" : ""
                  }`}
                  href={nav.href}
                >
                  {nav.name}
                </Link>
              ))}
            </div>

            {/**
             * render auth buttons if user isn't signed in
             * display nav icons once user is authenticated
             */}
            {isLoggedIn ? (
              <div className="flex gap-3.5 text-lg items-center ">
                {NAV_ICONS.map((icon) =>
                  icon.name?.toLocaleLowerCase() == "search" ? (
                    <button onClick={() => ShowSearchNav()} key={icon.name}>{icon.icon}</button>
                  ) : (
                    <Link href={icon.href ?? "#"} key={icon.name}>
                      {icon.icon}
                    </Link>
                  )
                )}
              </div>
            ) : <div className="flex gap-2">
                <Link href="/auth/register" className="py-2.5 px-2.5 rounded-sm bg-cardinal text-white">Get Started</Link>
                <Link href="/auth/login" className="py-2.5 px-2.5 rounded-sm underline">log in</Link>
              </div>}
          </div>

          {/* mobile nav */}
          <div className="sm:hidden flex items-center justify-between py-6">
            <button type="button" onClick={() => toggleNav()}>
              <NavToggle show={show}/>
            </button>
            <p className="block-heading !font-kathen">JB</p>

            <IoSearch className="w-6 h-6" onClick={() => ShowSearchNav()}/>
          </div>

          {/* display nav on toggle */}
          {show && (
            <div className="flex flex-col absolute top-[calc(100% - 20%)] left-0 bg-white w-full pt-10 pb-10 rounded-b-lg border-b-[0.1px] shadow-sm transition-all ease-in-out delay-150 duration-300 shadow-light gap-12 justify-center items-center">
              {NAVIGATION.map((nav) => (
                <Link
                  key={nav.name}
                  className={`${
                    pathname === nav.href ? "text-cardinal" : ""
                  } relative hover:text-red-600/80 after:content-[" "] after:absolute after:bottom-0 after:top-6 after:right-[40%] after:h-[6px] after:w-[6px] after:bg-cardinal after:rounded-full ${
                    pathname !== nav.href ? "after:hidden" : ""
                  }`}
                  href={nav.href}
                >
                  {nav.name}
                </Link>
              ))}

              {
                show && (
                  <div className="flex flex-col justify-between shadow-xs items-center py-2.5">
            <div className="flex gap-4 items-center">
              <Link href="#" className="">
                Find a book here
              </Link>
              <p className="flex items-center gap-2">
                <PhoneArrowDownLeftIcon className="text-cardinal w-4 h-4" />
                <span>+(233)-271-388-016</span>
              </p>
            </div>

            {/* socials */}
            <div className="flex gap-1.5 items-center">
              {NAV_SOCIALS.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="paragraph w-4 h-4"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
                )
              }
            </div>
          )}

      
        </div>
      </div>
    );
}