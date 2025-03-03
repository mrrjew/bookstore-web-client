import React, { useState, useEffect } from 'react';
import { Books } from '../types/books';
import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi';
import Link from 'next/link';
import { myCart } from '../store/cart-local';
import { myWishlist } from '../store/wishlist-local';

export default function Book({
  _id,
  title,
  author,
  image,
  description,
  price,
  pages,
  language,
  countInStock
}: Books) {
  const [cartUpdated, setCartUpdated] = useState(false);
  const [wishlistUpdated, setWishlistUpdated] = useState(false);

  const addToCart = (_id: string) => {
    if (!myCart.verifyBookInCart(_id)) {
      myCart.addBook({
        id: _id,
        title,
        image,
        price,
        pages,
        author,
        countInStock
      });
      setCartUpdated(!cartUpdated);
    }else{
      myCart.removeBook(_id)
      setCartUpdated(!cartUpdated);
    }
  };

  const addToWishList = (_id: string) => {
    if (!myWishlist.verifyBookInWishlist(_id)) {
      myWishlist.addBook({
        id: _id,
        title,
        image,
        price,
        pages,
        author,
        countInStock
      });
      setWishlistUpdated(!wishlistUpdated);
    }else{
      myWishlist.removeBook(_id)
      setWishlistUpdated(!wishlistUpdated);
    }
  };

  useEffect(() => {
    // Optionally, you can perform additional actions here when the cart updates
  }, [cartUpdated]);

  return (
    <div className='w-80 h-max pb-8 rounded-lg shadow-sm paragraph bg-white px-2 py-3.5 flex flex-col'>
      <Link href={`/store/${_id}`} className="w-full rounded-lg h-max">
        <Image src={image} alt={title} className='w-full rounded-lg h-[40vh]' width={100} height={100} />
      </Link>

      <div className="flex flex-col space-y-2 mt-3.5">
        <div className="flex justify-between items-center">
          <h1 className='font-bold text-lg leading-[20px] !text-gray-700/90'>{title}</h1>
          <p className='font-bold text-lg leading-[20px] flex tracking-tight text-cardinal text-nowrap'>$ {price}</p>
        </div>
        <p className='text-gray-700/50 font-[600]'>{author}</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p className='text-sm'>{pages} pages</p>
            <p className='text-sm font-semibold'>{language}</p>
          </div>
          <div className="flex gap-3">
            {
              myWishlist.verifyBookInWishlist(_id) ? (
                <svg onClick={() => addToWishList(_id)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 cursor-pointer text-cardinal/40">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
              ):
              (
              <svg onClick={() => addToWishList(_id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="cursor-pointer text-cardinal/40 size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
              )
            }

            <Link href={`/store/${_id}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="cursor-pointer text-blue-500/50 text-xl size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            </Link>
          </div>
        </div>
        <p>{description}</p>
        <button onClick={() => addToCart(_id)} className='mt-2.5 button flex items-center !bg-gradient-to-br hover:!bg-gradient-to-tl transition-all duration-200 ease-in-out !from-cardinal !to-purple-700/40 justify-center gap-3 text-lg !text-white'>
          {
            myCart.verifyBookInCart(_id) ? (
              <p className='flex gap-2 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Book added to cart
              </p>
            ) : (
              <>
                <FiShoppingCart className='cursor-pointer' /> Add to Cart
              </>
            )
          }
        </button>
      </div>
    </div>
  );
}
