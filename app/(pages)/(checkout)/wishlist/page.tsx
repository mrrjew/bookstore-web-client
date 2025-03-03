'use client'

import { myWishlist } from '@/app/store/wishlist-local'
import { Suspense, useState } from 'react'
import { CheckIcon, ClockIcon, XMarkIcon as XMarkIconMini } from '@heroicons/react/20/solid'
import Error from '@/app/components/Error'
import Modal from '@/app/components/modals-double-action'

function Book() {
  const [controlRerender,setControlRerender] = useState(false)
  const Wishlist_products = myWishlist.getWishlist()
  const [displayModal,setDisplayModal] = useState(false)

  const clearWishlist = () => {

    myWishlist.clearWishlist()

    setControlRerender(!controlRerender)
  }
  return (
    <div className="bg-white">

      <main className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
         <div className='flex justify-between items-center'>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Wishlist</h1>
          {
            displayModal && 
            <Modal title='Clear Wishlist' description='Are you sure you want to clear Wishlist. Once cleared, products are not recoverable unless added to Wishlist again' action='Clear' helperFunction={clearWishlist}/>
          }
          <button className={`underline underline-offset-2 ${Wishlist_products.length == 0 && 'cursor-not-allowed'}`} onClick={() => {setDisplayModal(!displayModal);setControlRerender(!controlRerender)}}>Clear Wishlist</button>
        </div>

        {
          Wishlist_products.length > 0 ? (
            <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start flex lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="Wishlist-heading" className="lg:col-span-7">
            <h2 id="Wishlist-heading" className="sr-only">
              Items in your shopping Wishlist
            </h2>

            <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
              {Wishlist_products.map((book) => (
                <li key={book.id} className="flex py-6 sm:py-10">
                  <div className="shrink-0">
                    <img
                      alt={book.title}
                      src={book.image as string | undefined ?? " "}
                      className="size-24 rounded-md object-cover sm:size-48"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <a href={`/store/${book.id}`} className="font-medium text-gray-700 hover:text-gray-800">
                              {book.title}
                            </a>
                          </h3>
                        </div>
                        <div className="mt-1 flex text-sm">
                          <p className="text-gray-500">{book.author}</p>
                          {book.pages ? (
                            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">{book.pages}</p>
                          ) : null}
                        </div>
                        <p className="mt-1 text-sm font-medium text-gray-900">{book.price}</p>
                      </div>

                      <div className="absolute right-0 top-0">
                          <button type="button" className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Remove</span>
                            <XMarkIconMini onClick={() => {myWishlist.removeBook(book.id);setControlRerender(!controlRerender)}} aria-hidden="true" className="size-5" />
                          </button>
                      </div>
                    </div>

                    <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                      {book.countInStock > 0 ? (
                        <CheckIcon aria-hidden="true" className="size-5 shrink-0 text-green-500" />
                      ) : (
                        <ClockIcon aria-hidden="true" className="size-5 shrink-0 text-gray-300" />
                      )}

                      <span>{book.countInStock > 0 ? 'In stock' : `Delivers in 2 days`}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </form>
          ):  <div className='w-full flex items-center justify-center'> 
                <Error title='No items found in wishlist' description='Visit the store page to add items to wishlist and checkout later'/>
              </div>

        }

        {/* Related books */}
        <section aria-labelledby="related-heading" className="mt-24">
          <h2 id="related-heading" className="text-lg font-medium text-gray-900">
            You may also like&hellip;
          </h2>

        </section>
      </main>

    </div>
  )
}


export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Book />
    </Suspense>
  )
}