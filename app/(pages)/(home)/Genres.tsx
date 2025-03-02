import Link from 'next/link';
import React from 'react';
import { genres } from '@/app/data/genre';

export default function Genres() {


    return (
        <div className='container h-max py-16 mt-60 px-4'>
            <h1 className='block-heading !mb-12'>Editor{'\''}s Popular Genres</h1>
            <div className="max-sm:mt-2.5 grid grid-cols-1 gap-8 sm:grid-cols-3 md:grid-cols-4 items-center justify-center ">
                {genres.map((genre, index) => (
                    <Link href={genre.href} key={index} className="px-3.5 py-2 ring-1 ring-inset ring-gray-200/80 hover:ring-gray-200 hover:py-2.5 transition-all duration-300 ease-in-out max-sm:-my-1 my-1 flex items-center gap-3 rounded-lg">
                        <img src={genre.image} alt={genre.search} className='w-8 h-8 rounded-lg'/>
                        <h2>{genre.search}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
}
