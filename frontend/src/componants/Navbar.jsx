'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close dropdowns when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setOpenDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = (menu) => {
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };

  const toggleMobileDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  // Navigation categories
  const categories = [
    {
      id: 'mens',
      label: "MEN'S",
      subcategories: [
        { label: 'Top Wear', href: '/mens/topwear' },
        { label: 'Bottom Wear', href: '/mens/bottomwear' },
        { label: 'Footwear', href: '/mens/footwear' }
      ]
    },
    {
      id: 'womens',
      label: "WOMEN'S",
      subcategories: [
        { label: 'Top Wear', href: '/womens/topwear' },
        { label: 'Bottom Wear', href: '/womens/bottomwear' },
        { label: 'Footwear', href: '/womens/footwear' },
        { label: 'Sarres', href: '/womens/accessories' }
      ]
    },
    {
      id: 'kids',
      label: "KID'S",
      subcategories: [
        { label: 'Top Wear', href: '/kids/topwear' },
        { label: 'Bottom Wear', href: '/kids/bottomwear' },
        { label: 'Footwear', href: '/kids/footwear' }
      ]
    },
    {
      id: 'categories',
      label: "CATEGORIES",
      subcategories: [
        { label: 'Electronic', href: '/categories/electronic' },
        { label: 'Furniture', href: '/categories/furniture' },
        { label: 'Kitchen Set', href: '/categories/kitchen' }
      ]
    }
  ];

  // Static links
  const staticLinks = [
    { label: 'PERFUME', href: '/perfume' },
    { label: 'JEWELLERY', href: '/jewellery' },
    { label: 'BOOKS', href: '/books' }
  ];

  return (
    <div className="border-b border-gray-200 shadow-sm sticky top-0 bg-white z-50">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-center h-16">
          {/* Logo */}
          {/* <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-indigo-600">
              SHOPWISE
            </Link>
          </div> */}

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
              onClick={toggleMobileMenu}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isMobileMenuOpen && (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
              {/* Icon when menu is open */}
              {isMobileMenuOpen && (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <Link href="/" className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-indigo-600 transition duration-150">
              HOME
            </Link>

            {/* Categories with dropdowns */}
            {categories.map((category) => (
              <div 
                key={category.id}
                className="relative"
                onMouseEnter={() => handleMouseEnter(category.id)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-indigo-600 transition duration-150 focus:outline-none flex items-center">
                  {category.label}
                  <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openDropdown === category.id && (
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
                    {category.subcategories.map((subcategory, index) => (
                      <Link 
                        key={index}
                        href={subcategory.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                      >
                        {subcategory.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Static links */}
            {staticLinks.map((link, index) => (
              <Link 
                key={index}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-indigo-600 transition duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-2 pb-4 border-t border-gray-200">
            <div className="space-y-1 px-2">
              <Link 
                href="/"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-indigo-600 rounded-md"
              >
                HOME
              </Link>

              {/* Mobile dropdown categories */}
              {categories.map((category) => (
                <div key={category.id} className="space-y-1">
                  <button
                    className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-indigo-600 rounded-md"
                    onClick={() => toggleMobileDropdown(category.id)}
                  >
                    <span>{category.label}</span>
                    <svg
                      className={`${
                        openDropdown === category.id ? 'transform rotate-180' : ''
                      } h-5 w-5 transition-transform`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {openDropdown === category.id && (
                    <div className="pl-4 space-y-1 border-l-2 border-gray-100 ml-3">
                      {category.subcategories.map((subcategory, index) => (
                        <Link
                          key={index}
                          href={subcategory.href}
                          className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-600 rounded-md"
                        >
                          {subcategory.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile static links */}
              {staticLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-indigo-600 rounded-md"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;