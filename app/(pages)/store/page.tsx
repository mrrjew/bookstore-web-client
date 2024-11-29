'use client';
import React, { useEffect, useState } from 'react';
import { genres } from '@/app/data/genre';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { books } from '@/app/data/books';
import Book from '@/app/components/Book';
import Error from '@/app/components/Error';

export default function Page() {
  const tabs = [{ name: 'All', href: '/store?name=All', image: '' }, ...genres];

  const query = useSearchParams();
  const name = query.get('name') || 'All';

  // State to store category
  const [selectedGenre, setSelectedGenre] = useState<string>('All');

  // Effect to synchronize localStorage and state with URL query params
  useEffect(() => {
    const storedGenre = localStorage.getItem('name') || 'All';
    setSelectedGenre(storedGenre);
    localStorage.setItem('name', name);
  }, [name]);

  // Filter books based on selected genre
  const booksReturned = selectedGenre === 'All'
    ? books
    : books.filter(book => book.category.toLowerCase() === selectedGenre.toLowerCase());

  return (
    <div className='scrollbar'>
      <h1 className='block-heading !my-12 container max-sm:mx-2'>
        Browse through a collection of mysterious treasures
      </h1>

      {/* Genre Tabs */}
      <div className='w-screen p-2 h-max overflow-x-scroll scrollbar py-6'>
        <div className="w-max flex gap-4">
          {tabs.map((genre, index) => (
            <Link
              href={genre.href}
              key={index}
              className={`${
                selectedGenre === genre.name ? 'bg-cardinal text-white' : ''
              } px-3.5 py-2 ring-1 ring-inset ring-gray-200/80 hover:ring-gray-200 transition-all duration-300 ease-in-out max-sm:-my-1 my-1 flex items-center gap-3 rounded-lg`}
            >
              {genre.name !== 'All' && (
                <img src={genre.image} alt={genre.name} className='w-8 h-8 rounded-lg'/>
              )}
              <h2>{genre.name}</h2>
            </Link>
          ))}
        </div>
      </div>

      {/* Books Display */}
      <div className="flex flex-wrap items-center justify-center gap-14 books w-full mt-12">
        {booksReturned.length > 0 ? (
          booksReturned.map((book) => (
            <Book key={book.title} {...book} />
          ))
        ) : (
          <Error
            title="No Books Found in Collection"
            description="Kindly refresh the page, choose a different category, or come back later"
          />
        )}
      </div>
    </div>
  );
}
