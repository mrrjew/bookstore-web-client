'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { PhoneArrowDownLeftIcon } from "@heroicons/react/16/solid";
import { IoSearch } from "react-icons/io5";
import { NAV_ICONS, NAV_SOCIALS, NAVIGATION } from "../data/navigation";
import NavToggle from "./NavToggle";
import Search from "./Search";

export default function Navbar() {
  const pathname = usePathname();
  const isLoggedIn = true; // Replace with real authentication state

  // States for navigation visibility
  const [showNav, setShowNav] = useState(false);
  const [showSearchNav, setShowSearchNav] = useState(false);

  // Initialize search visibility state from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedSearchNav = localStorage.getItem('show_search_nav');
      setShowSearchNav(storedSearchNav === 'true'); // Default to false if null
    }
  }, []);

  // Toggle functions
  const toggleNav = () => setShowNav(prev => !prev);

  const toggleSearchNav = () => {
    setShowSearchNav((prev) => {
      const newState = !prev;
      // Only set localStorage if available
      if (typeof window !== 'undefined') {
        localStorage.setItem('show_search_nav', newState.toString());
      }
      return newState;
    });
  };

  return (
    <div className={`${pathname.includes("auth") ? "hidden" : "block"} paragraph w-full bg-light`}>
      {/* Conditional Search Component */}
      {showSearchNav && <Search />}

      <div className="px-3.5 container">
        {/* First nav layer */}
        <div className="hidden sm:flex justify-between shadow-xs items-center py-2.5">
          <div className="flex gap-4 items-center">
            <Link href="#">Find a book here</Link>
            <p className="flex items-center gap-2">
              <PhoneArrowDownLeftIcon className="text-cardinal w-4 h-4" />
              <span>+(233)-271-388-016</span>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-1.5 items-center">
            {NAV_SOCIALS.map((social) => (
              <Link key={social.name} href={social.href} className="paragraph w-4 h-4">
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Main Navigation */}
        <div className="hidden sm:flex justify-between items-center py-6">
          {/* Logo */}
          <Link href="/" className="block-heading !font-kathen">Joelit{'\''}s Bookshub</Link>

          {/* Navigation Links */}
          <div className="flex gap-12 items-center">
            {NAVIGATION.map((nav) => (
              <Link key={nav.name} href={nav.href}
                className={`${pathname === nav.href ? "text-cardinal" : ""} relative hover:text-red-600/80`}>
                {nav.name}
              </Link>
            ))}
          </div>

          {/* Authenticated User Icons */}
          {isLoggedIn ? (
            <div className="flex gap-3.5 text-lg items-center">
              {NAV_ICONS.map((icon) => (
                icon.name.toLowerCase() === "search" ? (
                  <button onClick={toggleSearchNav} key={icon.name} aria-label="Toggle search">
                    {icon.icon}
                  </button>
                ) : (
                  <Link href={icon.href ?? "#"} key={icon.name} aria-label={icon.name}>
                    {icon.icon}
                  </Link>
                )
              ))}
            </div>
          ) : (
            <div className="flex gap-2">
              <Link href="/auth/register" className="py-2.5 px-2.5 rounded-sm bg-cardinal text-white">Get Started</Link>
              <Link href="/auth/login" className="py-2.5 px-2.5 rounded-sm underline">Log in</Link>
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex items-center justify-between py-6">
          <button type="button" onClick={toggleNav} aria-label="Toggle navigation">
            <NavToggle show={showNav} />
          </button>
          <p className="block-heading !font-kathen">JB</p>
          <IoSearch className="w-6 h-6" onClick={toggleSearchNav} aria-label="Toggle search" />
        </div>

        {/* Mobile Dropdown Nav */}
        {showNav && (
          <div className="flex flex-col absolute top-full left-0 bg-white w-full pt-10 pb-10 rounded-b-lg shadow-light gap-12 justify-center items-center">
            {NAVIGATION.map((nav) => (
              <Link key={nav.name} href={nav.href} className={`${pathname === nav.href ? "text-cardinal" : ""}`}>
                {nav.name}
              </Link>
            ))}
            {/* Mobile Social Media Links */}
            <div className="flex flex-col gap-4 items-center">
              <Link href="#">Find a book here</Link>
              <p className="flex items-center gap-2">
                <PhoneArrowDownLeftIcon className="text-cardinal w-4 h-4" />
                <span>+(233)-271-388-016</span>
              </p>
              <div className="flex gap-1.5 items-center">
                {NAV_SOCIALS.map((social) => (
                  <Link key={social.name} href={social.href} className="paragraph w-4 h-4">
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
