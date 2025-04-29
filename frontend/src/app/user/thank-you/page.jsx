"use client";
import Link from 'next/link';
import { useEffect } from 'react';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

export default function ThankYou() {
  useEffect(() => {
    // Clear any shopping cart data if needed
    // You can add cart clearing logic here
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <IoCheckmarkCircleOutline className="text-green-500 text-6xl mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Thank You for Your Order!
        </h1>
        <p className="text-gray-600 mb-6">
          Your order has been successfully placed. You will receive an email confirmation shortly.
        </p>
        <div className="space-y-4">
          <Link 
            href="/browse-product"
            className="block w-full bg-blue-600 text-white rounded-md py-3 px-4 font-medium hover:bg-blue-700 transition-colors"
          >
            Continue Shopping
          </Link>
          <Link 
            href="/user-profile"
            className="block w-full bg-gray-200 text-gray-700 rounded-md py-3 px-4 font-medium hover:bg-gray-300 transition-colors"
          >
            View Order History
          </Link>
        </div>
      </div>
    </div>
  );
}