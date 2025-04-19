'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { IconBuildingStore, IconShoppingCart, IconUserCircle } from '@tabler/icons-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='border-b border-gray-200 py-4'>
      <nav className="container mx-auto flex items-center justify-between">
        <div className="relative flex items-center justify-between container sm:flex gap-6">
          {/* Logo Start */}
          <div className="shrink-0 items-center">
            <div className='font-bold text-4xl text-center pb-4 sm:pb-0 text-indigo-600'>
              ShopWise
            </div>
          </div>
          {/* Logo End */}

          {/* Search Bar Start */}
          <div className="relative w-full">
            <div className="absolute inset-y-0 flex items-center pointer-events-none z-20 ps-3.5">
              <svg
                className="shrink-0 size-4 text-gray-400 dark:text-white/60"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={11} cy={11} r={8} />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
            <input
              className="p-2 pl-10 px-4 py-2.5 sm:py-3 ps-10 pe-4 block w-full border border-gray-300 rounded-lg sm:text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              type="text"
              role="combobox"
              aria-expanded="false"
              placeholder="Search or type a command"
              defaultValue=""
              data-hs-combo-box-input=""
            />
          </div>
          {/* Search Bar End */}

          {/* User Menu Start */}
          <div className="relative inline-block">
            <div
              className="flex items-center gap-2 px-4 py-2 cursor-pointer"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <IconUserCircle />
              <Link href='/login'>Login</Link>
            </div>
            {isOpen && (
              <div
                className="absolute left-0 w-48 bg-white shadow-md rounded-md z-50"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                style={{ zIndex: 9999 }} /* Additional inline style for z-index */
              >
                <Link href="/user-profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-indigo-600 first:rounded-t-md">My Profile</Link>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-indigo-600">Wishlist</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-indigo-600 last:rounded-b-md">Log out</a>
              </div>
            )}
          </div>
          {/* User Menu End */}

          {/* Cart Icon */}
          <div className="flex items-center px-4 py-2">
            <Link href='/cart' className="flex items-center space-x-1"><IconShoppingCart />
            <span className="ml-1">Cart</span></Link>
          </div>

          {/* Become a Seller */}
          <div className="flex items-center px-4 py-2 whitespace-nowrap">
            <IconBuildingStore />
            <Link href='/seller' className="flex items-center space-x-1"><span className="ml-1">Become a Seller</span></Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;