'use client';
import useCartContext from '@/context/CartContext';
import { IconMinus, IconPlus, IconX } from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const Cart = () => {
  const router = useRouter();
  const { 
    cartItems, 
    removeItemFromCart, 
    getCartTotal,
    updateItemQuantity 
  } = useCartContext();

  const totalAmount = getCartTotal();
  const deliveryCharge = 40;
  const discount = totalAmount > 0 ? 20 : 0;

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity >= 1) {
      updateItemQuantity(item._id, newQuantity);
    }
  };

  const handleCheckout = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('Please login to continue checkout');
      router.push('/login');
      return;
    }
    router.push('/user/checkout');
  };

  return (
    <div className="bg-white min-h-screen py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        {cartItems.length > 0 ? (
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 mb-5 flex flex-col sm:mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b">Shopping Cart ({cartItems.length} items)</h2>
              <div className="divide-y">
                {cartItems.map((item) => (
                  <div key={item._id} className="py-5 sm:py-6">
                    <div className="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
                      <div className="sm:-my-2.5">
                        <Link
                          href={`/view-product/${item._id}`}
                          className="group relative block h-40 w-24 overflow-hidden bg-gray-100 sm:h-48 sm:w-36"
                        >
                          <img
                            src={item.image}
                            loading="lazy"
                            alt={item.brandName}
                            className="h-full w-full object-cover object-center group-hover:opacity-75 transition"
                          />
                        </Link>
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <Link
                            href={`/view-product/${item._id}`}
                            className="mb-1 inline-block text-lg font-bold text-gray-800 hover:text-indigo-600 transition-colors lg:text-xl"
                          >
                            {item.brandName}
                          </Link>
                          <div className="mt-2 space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-lg text-indigo-600">₹{item.pprice}</span>
                              <span className="text-sm text-gray-500 line-through">₹{item.price}</span>
                              <span className="text-sm text-green-600 font-medium">
                                {Math.round(((item.price - item.pprice) / item.price) * 100)}% OFF
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap items-center gap-4">
                          <div className="flex items-center border rounded-lg">
                            <button
                              className="p-2 text-gray-600 hover:text-indigo-600 disabled:opacity-50"
                              onClick={() => handleQuantityChange(item, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <IconMinus size={16} />
                            </button>
                            <span className="px-4 py-2 text-gray-900 font-medium">
                              {item.quantity}
                            </span>
                            <button
                              className="p-2 text-gray-600 hover:text-indigo-600"
                              onClick={() => handleQuantityChange(item, item.quantity + 1)}
                            >
                              <IconPlus size={16} />
                            </button>
                          </div>
                          <button
                            className="flex items-center gap-1 text-sm font-medium text-red-600 hover:text-red-800 transition-colors"
                            onClick={() => removeItemFromCart(item)}
                          >
                            <IconX size={16} />
                            REMOVE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="md:w-80 lg:w-96 shrink-0">
              <div className="sticky top-20">
                <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b">Order Summary</h2>
                <div className="w-full rounded-lg bg-gray-50 p-4 border border-gray-200 shadow-sm">
                  <div className="space-y-3">
                    <div className="flex justify-between gap-4 text-gray-700">
                      <span>Total Items ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})</span>
                      <span className="font-medium">₹{totalAmount}</span>
                    </div>
                    <div className="flex justify-between gap-4 text-green-600">
                      <span>Discount</span>
                      <span className="font-medium">-₹{discount}</span>
                    </div>
                    <div className="flex justify-between gap-4 text-gray-700">
                      <span>Delivery Charges</span>
                      <span className="font-medium">₹{deliveryCharge}</span>
                    </div>
                  </div>
                  <div className="mt-4 border-t pt-4">
                    <div className="flex items-start justify-between gap-4 text-gray-800">
                      <span className="text-lg font-bold">Total Amount</span>
                      <span className="flex flex-col items-end">
                        <span className="text-lg font-bold text-indigo-700">₹{totalAmount + deliveryCharge - discount}</span>
                        <span className="text-xs text-gray-500">Including all taxes</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <button
                    onClick={handleCheckout}
                    className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-700 focus-visible:ring active:bg-indigo-800 md:text-base"
                  >
                    PROCEED TO CHECKOUT
                  </button>
                  <Link
                    href="/browse-product"
                    className="flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-gray-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
                  >
                    CONTINUE SHOPPING
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet.</p>
            <Link
              href="/browse-product"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-700 focus-visible:ring active:bg-indigo-800 md:text-base"
            >
              START SHOPPING
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;