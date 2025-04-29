'use client';
import { useApp } from '@/context/appcontext';
import useCartContext from '@/context/CartContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
    const router = useRouter();
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { getCartItemsCount } = useCartContext();
    const { isAuthenticated, user, logout } = useApp();
    const navRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setOpenDropdown(null);
                setIsMobileMenuOpen(false);
            }
        };

        const handleEscapeKey = (event) => {
            if (event.key === 'Escape') {
                setOpenDropdown(null);
                setIsMobileMenuOpen(false);
            }
        };

        // Close dropdowns when screen size changes
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);
        window.addEventListener('resize', handleResize);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleMouseEnter = (menu) => {
        if (window.innerWidth >= 1024) { // Only on desktop
            setOpenDropdown(menu);
        }
    };

    const handleMouseLeave = () => {
        if (window.innerWidth >= 1024) { // Only on desktop
            setOpenDropdown(null);
        }
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
                { label: 'Top Wear', href: '/browse-product?category=mens-topwear' },
                { label: 'Bottom Wear', href: '/browse-product?category=mens-bottomwear' },
                { label: 'Footwear', href: '/browse-product?category=mens-footwear' }
            ]
        },
        {
            id: 'womens',
            label: "WOMEN'S",
            subcategories: [
                { label: 'Top Wear', href: '/browse-product?category=womens-topwear' },
                { label: 'Bottom Wear', href: '/browse-product?category=womens-bottomwear' },
                { label: 'Footwear', href: '/browse-product?category=womens-footwear' },
                { label: 'Sarres', href: '/browse-product?category=womens-sarres' }
            ]
        },
        {
            id: 'kids',
            label: "KID'S",
            subcategories: [
                { label: 'Top Wear', href: '/browse-product?category=kids-topwear' },
                { label: 'Bottom Wear', href: '/browse-product?category=kids-bottomwear' },
                { label: 'Footwear', href: '/browse-product?category=kids-footwear' }
            ]
        },
        {
            id: 'categories',
            label: "CATEGORIES",
            subcategories: [
                { label: 'Electronic', href: '/browse-product?category=electronic' },
                { label: 'Furniture', href: '/browse-product?category=furniture' },
                { label: 'Kitchen Set', href: '/browse-product?category=kitchen' }
            ]
        }
    ];

    // Static links
    const staticLinks = [
        { label: 'PERFUME', href: '/browse-product?category=perfume' },
        { label: 'JEWELLERY', href: '/browse-product?category=jewellery' },
        { label: 'BOOKS', href: '/browse-product?category=books' }
    ];

    const renderLink = (link, index) => {
        if (link.onClick) {
            return (
                <button
                    key={index}
                    onClick={link.onClick}
                    className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-indigo-600 transition duration-150"
                >
                    {link.label}
                </button>
            );
        }
        return (
            <Link
                key={index}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-indigo-600 transition duration-150 relative"
            >
                {link.label}
                {link.badge > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {link.badge}
                    </span>
                )}
            </Link>
        );
    };

    // // Add this section before the return statement
    // const authLinks = isAuthenticated ? [
    //     { 
    //         label: user?.name || 'Profile', 
    //         href: '/user-profile'
    //     },
    //     { 
    //         label: 'Logout', 
    //         onClick: logout 
    //     }
    // ] : [
    //     { label: 'Login', href: '/login' },
    //     { label: 'Sign Up', href: '/signup' }
    // ];

    return (
        <div className="border-b border-gray-200 shadow-sm sticky top-0 bg-white z-40">
            <nav className="container mx-auto px-4 lg:px-8" ref={navRef}>
                <div className="flex items-center justify-between h-16">
                   
                    {/* Center - Navigation Items */}
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
                                <button className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-indigo-600 transition duration-150 focus:outline-none flex items-center ">
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
                        {staticLinks.map((link, index) => renderLink(link, index))}
                    </div>

                    {/* Right side - Auth & Cart */}
                    <div className="flex items-center space-x-4">
                        {/* <Link href="/cart" className="relative">
                            <span className="sr-only">Cart</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {getCartItemsCount() > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                                    {getCartItemsCount()}
                                </span>
                            )}
                        </Link> */}

                        {/* Auth Links
                        // <div className="hidden lg:flex lg:items-center lg:space-x-4">
                        //     {authLinks.map((link, index) => (
                        //         link.onClick ? (
                        //             <button
                        //                 key={index}
                        //                 onClick={link.onClick}
                        //                 className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
                        //             >
                        //                 {link.label}
                        //             </button>
                        //         ) : (
                        //             <Link
                        //                 key={index}
                        //                 href={link.href}
                        //                 className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
                        //             >
                        //                 {link.label}
                        //             </Link>
                        //         )
                        //     ))}
                        // </div> */}
                    </div>
                </div>

                {/* Mobile menu */}
                {/* ...existing mobile menu code... */}
            </nav>
        </div>
    );
};

export default Navbar;