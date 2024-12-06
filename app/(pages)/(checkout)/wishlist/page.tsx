'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XMarkIcon as XMarkIconMini } from '@heroicons/react/20/solid'
import {cartBooks as books} from "@/app/data/books"
import { useParams } from 'next/navigation'

export default function Book() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">

      <main className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>

        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start flex lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
              {books.map((book, bookIdx) => (
                <li key={book._id} className="flex py-6 sm:py-10">
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
                            <a href={`/store/${book._id}`} className="font-medium text-gray-700 hover:text-gray-800">
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
