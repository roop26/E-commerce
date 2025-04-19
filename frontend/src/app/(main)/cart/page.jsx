import { IconX } from '@tabler/icons-react'
import React from 'react'

const Cart = () => {
    return (
        <div>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-lg px-4 md:px-8 flex flex-col md:flex-row gap-6">
                    <div className="flex-1 mb-5 flex flex-col sm:mb-8 sm:border-b">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b">Product Details</h2>
                        {/* product - start */}
                        <div className="py-5 sm:py-6">
                            <div className="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
                                <div className="sm:-my-2.5">
                                    <a
                                        href="#"
                                        className="group relative block h-40 w-24 overflow-hidden bg-gray-100 sm:h-48 sm:w-36"
                                    >
                                        <img
                                            src="https://images.unsplash.com/photo-1612681621979-fffe5920dbe8?auto=format&q=75&fit=crop&w=200"
                                            loading="lazy"
                                            alt="Photo by Thái An"
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </a>
                                </div>
                                <div className="flex flex-1 flex-col justify-between">
                                    <div>
                                        <a
                                            href="#"
                                            className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                                        >
                                            Top
                                        </a>
                                        <span className="block text-lg font-semibold text-indigo-600">Rs. 199</span>
                                    </div>
                                    <div className="mt-2">
                                        <span className="block text-gray-600">Size: Free Size</span>
                                        <span className="block text-gray-600">Qty: 1</span>
                                    </div>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <button className="py-2 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition duration-100">
                                            SAVE FOR LATER
                                        </button>
                                        <button className="flex px-4 py-2 text-sm font-medium text-red-600 hover:text-red-800 transition duration-100">
                                        <IconX 
                                         className=''
                                        />REMOVE
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* product - end */}
                    </div>
                    {/* totals - start */}
                    <div className="md:w-80 lg:w-96">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b">Price Details</h2>
                        <div className="w-full rounded-lg bg-gray-50 p-4 border border-gray-200 shadow-sm">
                            <div className="space-y-3">
                                <div className="flex justify-between gap-4 text-gray-700">
                                    <span>Total Product Price</span>
                                    <span className="font-medium">Rs. 199</span>
                                </div>
                                <div className="flex justify-between gap-4 text-green-600">
                                    <span>Discount</span>
                                    <span className="font-medium">-Rs. 20</span>
                                </div>
                                <div className="flex justify-between gap-4 text-gray-700">
                                    <span>Delivery Charges</span>
                                    <span className="font-medium">Rs. 40</span>
                                </div>
                            </div>
                            <div className="mt-4 border-t pt-4">
                                <div className="flex items-start justify-between gap-4 text-gray-800">
                                    <span className="text-lg font-bold">Order Total</span>
                                    <span className="flex flex-col items-end">
                                        <span className="text-lg font-bold text-indigo-700">Rs. 219</span>
                                        <span className="text-xs text-gray-500">Including all taxes</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <button className="w-full rounded-lg bg-indigo-600 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-700 focus-visible:ring active:bg-indigo-800 md:text-base">
                                PLACE ORDER
                            </button>
                        </div>
                        <div className="mt-4 text-center text-sm text-gray-500">
                            <span className="flex items-center justify-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                </svg>
                                Secure checkout
                            </span>
                        </div>
                    </div>
                    {/* totals - end */}
                </div>
            </div>
        </div>
    )
}

export default Cart