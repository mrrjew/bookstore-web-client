'use client'

import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XMarkIcon as XMarkIconMini } from '@heroicons/react/20/solid'
import { myCart } from '@/app/store/cart-local'
import Error from '@/app/components/Error'
import { Suspense, useState } from 'react'
import Modal from '@/app/components/modals-double-action'

function Example() {
  const [controlRerender,setControlRerender] = useState(false)
  const [displayModal,setDisplayModal] = useState(false)
  const cart_products = myCart.getCart()

  const subTotal = cart_products.reduce((acc, product) => acc + product.price * (product.quantity !== undefined ? product.quantity : 0), 0).toFixed(2);
  const delivery = (0.05 * +subTotal).toFixed(2)
  const tax = (0.06 * +subTotal).toFixed(2)

  const updateProductQuantity = (id:string,e:number) => {
    myCart.updateBook(id,e)
    setControlRerender(!controlRerender)
  }

  const clearCart = () => {

    myCart.clearCart()

    setControlRerender(!controlRerender)
  }
  return (
    <div className="bg-white">

      <main className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className='flex justify-between items-center'>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
          {
            displayModal && 
            <Modal title='Clear shopping cart' description='Are you sure you want to clear cart. Once cleared, products are not recoverable unless added to cart again' action='Clear' helperFunction={clearCart}/>
          }
          <button className={`underline underline-offset-2 ${cart_products.length == 0 && 'cursor-not-allowed'}`} onClick={() => {setDisplayModal(!displayModal);setControlRerender(!controlRerender)}}>Clear Cart</button>
        </div>

        {
          cart_products.length > 0 ? (
            <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
              {cart_products.map((book, bookIdx) => (
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
                        <p className="mt-1 text-sm font-medium text-gray-900">${book.price}</p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
                        <div className="inline-grid w-full max-w-16 grid-cols-1">
                          <select
                            defaultValue={book.quantity}
                            id={`quantity-${bookIdx}`}
                            name={`quantity-${bookIdx}`}
                            aria-label={`Quantity, ${book.title}`}
                            onChange={(e) => updateProductQuantity(book.id,+e.target.value)}
                            className="col-start-1 row-start-1 appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                          >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                          </select>
                          <ChevronDownIcon
                            aria-hidden="true"
                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                          />
                        </div>

                        <div className="absolute right-0 top-0">
                          <button type="button" className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Remove</span>
                            <XMarkIconMini onClick={() => {myCart.removeBook(book.id);setControlRerender(prev => !prev)}} aria-hidden="true" className="size-5" />
                          </button>
                        </div>
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

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
              Order summary
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Subtotal</dt>
                <dd className="text-sm font-medium text-gray-900">${subTotal}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>Delivery estimate</span>
                  <a href="#" className="ml-2 shrink-0 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Learn more about how shipping is calculated</span>
                    <QuestionMarkCircleIcon aria-hidden="true" className="size-5" />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">${delivery}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex text-sm text-gray-600">
                  <span>Tax estimate</span>
                  <a href="#" className="ml-2 shrink-0 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Learn more about how tax is calculated</span>
                    <QuestionMarkCircleIcon aria-hidden="true" className="size-5" />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">${tax}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">Order total</dt>
                <dd className="text-base font-medium text-gray-900">${(+subTotal + +delivery + +tax).toFixed(2)}</dd>
              </div>
            </dl>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-cardinal px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-cardinal-900 focus:outline-none focus:ring-2 focus:ring-cardinal focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Checkout
              </button>
            </div>
          </section>
        </form>
          ):(
            <div className='w-full flex items-center justify-center'> 
              <Error title='No items found in cart' description='Visit the store page to add items to cart before checking out'/>
            </div>
          )
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

export default function Page(){
  return (
  <Suspense fallback='Loading...'>
    <Example />
  </Suspense>
  )
}
