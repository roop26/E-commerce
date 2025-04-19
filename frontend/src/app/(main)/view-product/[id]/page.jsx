'use client';
import Feedback from '@/componants/Feedback';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ViewProduct = () => {
    const router = useRouter();
    const { id } = useParams();
    const [userData, setUserData] = useState(null);
    const [selectedImage, setSelectedImage] = useState(0);

    const fetchUserData = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/getbyid/${id}`);
            console.log(res.data);
            setUserData(res.data);
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const formSubmit = (values) => {
        axios.put(`http://localhost:5000/product/update/${id}`, values)
            .then((res) => {
                console.log(res.data);
                router.back();
            }).catch((err) => {
                console.log(err);
                setSubmitting(false);
            });
    };

    if (userData === null) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <h3 className="text-xl font-medium text-gray-700">Loading ...</h3>
            </div>
        );
    }

    // Mock images for gallery (keeping the original ones)
    const productImages = [
        userData.image,
        userData.image,
        userData.image
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <button
                    onClick={() => router.back()}
                    className="mb-6 flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back to Products
                </button>

                <div className="bg-white rounded-sm shadow-lg overflow-hidden">
                    <div className="grid gap-8 md:grid-cols-2">
                        {/* Product Gallery - Start */}
                        <div className="flex flex-col p-6 bg-white">
                            <div className="relative aspect-square mb-4 overflow-hidden rounded-sm">
                                <img
                                    src={productImages[selectedImage]}
                                    alt={userData.brand}
                                    className="h-full w-full object-cover object-center"
                                />
                                <button
                                    className="absolute right-4 top-4 inline-block rounded-full bg-white p-2 text-gray-500 shadow-md hover:bg-gray-100 hover:text-red-500 transition-all duration-200"
                                    aria-label="Add to wishlist"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex gap-3 overflow-x-auto pb-2">
                                {productImages.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`flex-shrink-0 w-20 h-20 rounded-sm overflow-hidden ${selectedImage === index ? 'ring-2 ring-indigo-500' : 'opacity-70'}`}
                                    >
                                        <img
                                            src={img}
                                            alt={`Product view ${index + 1}`}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </button>
                                ))}
                            </div>
                            
                            {/* CTA Buttons moved under the image */}
                            <div className="flex gap-3 mt-6 pt-6 border-t border-gray-200">
                                <a
                                    href="#"
                                    className="flex-1 rounded-sm bg-yellow-500 px-6 py-3.5 text-center text-lg font-medium text-white shadow-md hover:bg-yellow-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Add to Cart
                                </a>
                                <a
                                    href="#"
                                    className="flex-1 rounded-sm bg-orange-500 px-6 py-3.5 text-center text-lg font-medium text-white shadow-sm hover:bg-orange-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Buy Now
                                </a>
                            </div>
                        </div>
                        {/* Product Gallery - End */}

                        {/* Product Details - Start */}
                        <div className="p-6 md:p-8 flex flex-col">
                            <div className="mb-auto">
                                {/* Brand & Name */}
                                <div className="mb-6">
                                    <span className="text-lg text-gray-400 font-bold">
                                        {userData.brandName}
                                    </span>
                                </div>

                                {/* Rating */}
                                <div className="mb-6 flex items-center">
                                    <div className="flex items-center bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-1"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="font-medium">4.2</span>
                                    </div>
                                    <span className="ml-2 text-sm text-gray-500">
                                        56 verified ratings
                                    </span>
                                </div>

                                {/* Description - if available */}
                                <div className="mb-6">
                                    <p className="text-gray-600">
                                       {userData.details}
                                    </p>
                                </div>


                                {/* Size Selection */}
                                <div className="mb-8">
                                    <h3 className="text-sm font-medium text-gray-700 mb-3">
                                        Size
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        <button
                                            type="button"
                                            className="flex h-9 w-14 items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-800 transition duration-200 hover:border-indigo-500 hover:bg-indigo-50"
                                        >
                                            XS
                                        </button>
                                        <button
                                            type="button"
                                            className="flex h-9 w-14 items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-800 transition duration-200 hover:border-indigo-500 hover:bg-indigo-50"
                                        >
                                            S
                                        </button>
                                        <button
                                            type="button"
                                            className="flex h-9 w-14 items-center justify-center rounded-md border-2 border-indigo-500 bg-indigo-50 text-sm font-medium text-indigo-600"
                                        >
                                            M
                                        </button>
                                        <button
                                            type="button"
                                            className="flex h-9 w-14 items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-800 transition duration-200 hover:border-indigo-500 hover:bg-indigo-50"
                                        >
                                            L
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-200">
                                {/* Price */}
                                <div className="mb-4">
                                    <div className="flex items-center">
                                        <span className="text-3xl font-bold text-gray-900">
                                            ₹299
                                        </span>
                                        <del className="ml-2 text-gray-500">₹999</del>
                                        <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-md">
                                            77% OFF
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Inclusive of all taxes and shipping
                                    </p>
                                </div>

                                {/* Shipping */}
                                <div className="mb-6 flex items-center text-gray-600 bg-gray-50 p-3 rounded-lg">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 text-indigo-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                                        />
                                    </svg>
                                    <div>
                                        <p className="font-medium">2-4 day shipping</p>
                                        <p className="text-sm">Delivery estimated by Friday</p>
                                    </div>
                                </div>
                            </div>
                            <Feedback/>
                        </div>
                        {/* Product Details - End */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProduct;