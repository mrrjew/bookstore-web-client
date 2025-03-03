'use client';
import React, { useEffect, useState } from 'react';
import { genres } from '@/app/data/genre';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { books } from '@/app/data/books';
import Book from '@/app/components/Book';
import Error from '@/app/components/Error';
import { Suspense } from 'react';

function StorePageContent() {
  const tabs = [{ search: 'All', href: '/store?search=All', image: '' }, ...genres];

  const query = useSearchParams();
  const name = query?.get('search') || 'All';

  // State to store category
  const [selectedGenre, setSelectedGenre] = useState('All');

  // Effect to synchronize state with URL query params and localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSelectedGenre(name);
      localStorage.setItem('search', name);
    }
  }, [name]);
  
  // Filter books based on selected genre
  const cleanString = (str:string) => str.toLowerCase().split(" ").join('');

  const booksReturned = selectedGenre === 'All'
    ? books
    : books.filter(book => {
      const cleanedGenre = cleanString(selectedGenre);
      const bookInfo = [
        book.category,
        book.title,
        book.author,
        book.description
      ].map(cleanString).join('');
  
      return bookInfo.includes(cleanedGenre);
    });
  


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
                selectedGenre === genre.search ? 'bg-cardinal !text-slate-50' : ''
              } px-3.5 py-2 ring-1 ring-inset ring-gray-200/80 hover:ring-gray-200 transition-all duration-300 ease-in-out max-sm:-my-1 my-1 flex items-center gap-3 rounded-lg`}
            >
              {genre.search !== 'All' && (
                <img src={genre.image} alt={genre.search} className='w-8 h-8 rounded-lg'/>
              )}
              <h2>{genre.search}</h2>
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

// Main export with Suspense wrapper
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StorePageContent />
    </Suspense>
  );
}
