'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { IconBuildingStore, IconShoppingCart, IconUserCircle, IconChevronDown } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import useCartContext from '@/context/CartContext';

const Header = () => {
  const { getCartItemsCount } = useCartContext();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/browse-product?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            SHOPWISE
          </Link>

          {/* Search Bar */}
          <div className="flex-1 mx-10">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                className="w-full py-3 pl-12 pr-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </div>

          {/* Cart and Profile/Login */}
          <div className="flex items-center space-x-6">
            {/* Cart */}
            <Link href="/cart" className="relative p-2 rounded-full hover:bg-gray-100">
              <IconShoppingCart className="h-7 w-7 text-gray-700 hover:text-indigo-600" />
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </Link>

            {/* Login/Profile */}
            <div className="relative">
              {isLoggedIn ? (
                <div className=''>
                  <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center p-2 rounded-full hover:bg-gray-100 focus:outline-none"
                  >
                    <IconUserCircle className="h-7 w-7 text-gray-700 hover:text-indigo-600" />
                    <IconChevronDown className="w-4 h-4 ml-1 text-gray-600" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100 transition duration-150 ease-in-out">
                      <Link
                        href="/user-profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        My Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link href="/login" className="p-2 rounded-full hover:bg-gray-100">
                  <IconUserCircle className="h-7 w-7 text-gray-700 hover:text-indigo-600" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;