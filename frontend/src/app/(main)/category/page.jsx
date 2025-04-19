'use client';
import { IconChevronDown, IconChevronLeft, } from '@tabler/icons-react';
import React, { useState } from 'react';

const Category = () => {
    const categories = [
        {
            name: "Home & Kitchen",
            subcategories: [
                "Induction Cooktops",
                "Bowl",
                "Glass",
            ],
            moreCount: 12,
        },
        { 
            name: "Toys and Games", 
            subcategories: [
                'Electronic Kits'
            ] 
        },
        {
            name: "Women's Accessories",
            subcategories: [
                "Jewellery",
                "Hand Bags",
            ],
        },
        { name: "Home Decor", subcategories: [], },
        { name: "Furniture", subcategories: [], },
    ];

    // Move expanded state here
    const [expanded, setExpanded] = useState({});

    const toggleExpand = (category) => {
        setExpanded((prev) => ({
            ...prev,
            [category]: !prev[category],
        }));
    };

    return (
        <div className='flex '>
            <div className="w-full max-w-xs p-4 bg-white shadow-lg">
                <h2 className="text-lg font-semibold mb-2">Filters</h2>
                <p className="text-sm font-medium text-gray-700">PICK A CATEGORY</p>
                <div className="mt-2">
                    {categories.map((category, index) => (
                        <div key={index} className="mb-2">
                            <button
                                className="w-full flex items-center justify-start font-medium text-gray-800"
                                onClick={() => toggleExpand(category.name)}
                            >
                                {category.subcategories.length > 0 && (
                                    expanded[category.name] ? <IconChevronDown className="mr-2" /> : <IconChevronLeft className="mr-2" />
                                )}
                                {category.name}
                            </button>
                            {expanded[category.name] && category.subcategories.length > 0 && (
                                <ul className="mt-1 ml-4 text-sm text-gray-600">
                                    {category.subcategories.map((sub, i) => (
                                        <li key={i} className="py-1">{sub}</li>
                                    ))}
                                    {category.moreCount && (
                                        <li className="text-blue-500 cursor-pointer">Show {category.moreCount} more</li>
                                    )}
                                </ul>
                            )}
                        </div>
                    ))}
                    <p className="text-blue-500 cursor-pointer">Show 33 more categories</p>
                </div>
            </div>

            {/* Collections Section */}
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-6 flex items-end justify-between gap-4">
                        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Collections</h2>
                    </div>
                    <div className="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
                        {[
                            {
                                category: "Men",
                                title: "Business Casual",
                                img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700",
                            },
                            {
                                category: "Women",
                                title: "Summer Season",
                                img: "https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?auto=format&q=75&fit=crop&crop=top&w=600&h=700",
                            },
                            {
                                category: "Men",
                                title: "Streetwear",
                                img: "https://images.unsplash.com/photo-1552668693-d0738e00eca8?auto=format&q=75&fit=crop&crop=top&w=600&h=700",
                            },
                            {
                                category: "Women",
                                title: "Sale",
                                img: "https://images.unsplash.com/photo-1560269999-cef6ebd23ad3?auto=format&q=75&fit=crop&w=600&h=700",
                            },
                            {
                                category: "Container",
                                title: "Kitchen Set",
                                img: "https://rukminim2.flixcart.com/image/612/612/xif0q/container/v/p/q/1-lotusgrey-norvium-original-imahyup29rwtdqmz.jpeg?q=70",
                            },
                            {
                                category: "Artificial Tree",
                                title: "Home Decor",
                                img: "https://rukminim2.flixcart.com/image/612/612/xif0q/artificial-plant/f/f/u/60-yes-18-leaves-palm-plant-with-apple-pot-for-home-shop-office-original-imagy65vpuwgjxb3.jpeg?q=70",
                            },
                            {
                                category: "Table",
                                title: "Furniture",
                                img: "https://rukminim2.flixcart.com/image/612/612/xif0q/office-study-table/k/a/w/77-rubber-wood-engineered-wood-engineered-wood-computer-desk-original-imah9eg6mwgnar3z.jpeg?q=70",
                            },
                            {
                                category: " Bestseller",
                                title: "Book",
                                img: "https://rukminim2.flixcart.com/image/612/612/xif0q/book/x/p/f/gunahon-ka-devta-original-imah8wxddkhmrhkq.jpeg?q=70",
                            },
                        ].map((item, index) => (
                            <div key={index} className="group block overflow-hidden transition-shadow duration-200 hover:shadow-lg">
                                <a href="#" className="block h-96 overflow-hidden">
                                    <img
                                        src={item.img}
                                        loading="lazy"
                                        alt={item.title}
                                        className="h-full w-full object-cover object-center transition duration-200"
                                    />
                                </a>
                                <div className="p-4">
                                    <span className="text-gray-500">{item.category}</span>
                                    <a
                                        href="#"
                                        className="block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                                    >
                                        {item.title}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
