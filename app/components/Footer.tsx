import Link from 'next/link'
import React from 'react'
import { NAV_SOCIALS } from '../data/navigation'

export default function Footer() {
    const year = new Date().getFullYear()
  return (
    <div className='main border-t-[0.1px] border-gray-400/10'>

        <div className='flex sm:flex-row flex-col justify-center sm:justify-between items-center py-6 mt-12 sm:py-12 px-8'>
            

            <div className="max-sm:text-center my-3.5">

             <p className="block-heading !font-kathen !mb-2">Joelit{"\'"}s Bookshub</p>
             <p>Contact us for more information or personalized order via email;</p>
             <a href='mailto:jwlarbi15@gmail.com'>jwlarbi15@gmail.com</a>
            </div>

            <p>
                Copyright @ {year} All Rights Reserved
            </p>

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
    </div>
  )
}
