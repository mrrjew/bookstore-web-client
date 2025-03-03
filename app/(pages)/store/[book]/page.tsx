'use client'

import { CheckIcon, QuestionMarkCircleIcon, StarIcon } from '@heroicons/react/20/solid'
import { ShieldCheckIcon } from '@heroicons/react/24/outline'
import { books } from '@/app/data/books'
import { useParams } from 'next/navigation'
import { myCart } from '@/app/store/cart-local'
import { FiShoppingCart } from 'react-icons/fi'
import { useState } from 'react'


const reviews = { average: 4, totalCount: 1624 }

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Book() {
  const [cartUpdated, setCartUpdated] = useState(false);

  
  const {book} = useParams()

  const _book = books.filter((b) => b._id === book)[0]
  console.log(_book)

  const {_id,
    title,
    image,
    price,
    pages,
    author,
    countInStock} = _book

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
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-2">
                <li>
                  <div className="flex items-center text-sm">
                    <a href="/store" className="font-medium text-gray-500 hover:text-gray-900">
                      Books
                    </a>
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="ml-2 size-5 shrink-0 text-gray-300"
                      >
                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                      </svg>
                  
                    <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
                      {_book.title}
                    </a>
                  </div>
                </li>
            </ol>
          </nav>

          <div className="mt-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{_book.title}</h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>

            <div className="flex items-center">
              <p className="text-lg text-gray-900 sm:text-xl">{_book.price}</p>

              <div className="ml-4 border-l border-gray-300 pl-4">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <div>
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          aria-hidden="true"
                          className={classNames(
                            _book.numReviews / 2 > rating ? 'text-yellow-400' : 'text-gray-300',
                            'size-5 shrink-0',
                          )}
                        />
                      ))}
                    </div>
                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                  </div>
                  <p className="ml-2 text-sm text-gray-500">{reviews.totalCount} reviews</p>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">{_book.description}</p>
            </div>

            <div className="mt-6 flex items-center">
              <CheckIcon aria-hidden="true" className="size-5 shrink-0 text-green-500" />
              <p className="ml-2 text-sm text-gray-500">In stock and ready to ship</p>
            </div>
          </section>
        </div>

        {/* Product image */}
        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <img alt={_book.title} src={_book.image as string | undefined ?? " "} className="aspect-square w-full rounded-lg object-cover" />
        </div>

        {/* Product form */}
        <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
          <section aria-labelledby="options-heading">
            <h2 id="options-heading" className="sr-only">
              Product options
            </h2>

            <form>
              
              <div className="mt-4">
                <a href="#" className="group inline-flex text-sm text-gray-500 hover:text-gray-700">
                  <span>What book should I buy?</span>
                  <QuestionMarkCircleIcon
                    aria-hidden="true"
                    className="ml-2 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                  />
                </a>
              </div>
              <div className="mt-10">
              <button onClick={() => addToCart(_id)} 
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-cardinal px-8 py-3 text-base font-medium text-white hover:bg-cardinal focus:outline-none focus:ring-2 focus:ring-cardinal focus:ring-offset-2 focus:ring-offset-gray-50"
                  >
                {
                  myCart.verifyBookInCart(_id) ? (
                    <p className='flex gap-2 items-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      Book already in cart
                    </p>
                  ) : (
                    <div className="flex items-center gap-2">
                      <FiShoppingCart className='cursor-pointer' />  Add to Cart
                    </div>
                  )
                }
              </button>
              </div>
              <div className="mt-6 text-center">
                <a href="#" className="group inline-flex text-base font-medium">
                  <ShieldCheckIcon
                    aria-hidden="true"
                    className="mr-2 size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                  />
                  <span className="text-gray-500 hover:text-gray-700">Success Guarantee</span>
                </a>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}
