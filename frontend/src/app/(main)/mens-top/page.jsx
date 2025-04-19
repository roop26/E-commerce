'use client';
import React, { useState } from 'react'

const page = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    return (
        <div className='flex'>
            {/* filter page */}
            <div className="p-6 max-w-lg mx-auto">
                <h2 className="text-xl font-semibold mb-4">Filter Products</h2>

                {/* Category Filter */}
                <div className="mb-4">
                    <h3 className="text-lg font-medium">Category</h3>
                    <div className="flex gap-2 mt-2">
                        {["Shirt", "T-Shirt"].map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-lg border ${selectedCategory === category ? "bg-blue-500 text-white" : "bg-white border-gray-300"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Size Filter */}
                <div className="mb-4">
                    <h3 className="text-lg font-medium">Size</h3>
                    <div className="flex gap-2 mt-2">
                        {["S", "L", "XL"].map((size) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`px-4 py-2 rounded-lg border ${selectedSize === size ? "bg-green-500 text-white" : "bg-white border-gray-300"
                                    }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Color Filter */}
                <div className="mb-4">
                    <h3 className="text-lg font-medium">Color</h3>
                    <div className="flex gap-2 mt-2">
                        {["Red", "Blue", "Black"].map((color) => (
                            <button
                                key={color}
                                onClick={() => setSelectedColor(color)}
                                className={`px-4 py-2 rounded-lg border ${selectedColor === color ? "bg-gray-800 text-white" : "bg-white border-gray-300"
                                    }`}
                            >
                                {color}
                            </button>
                        ))}
                    </div>
                </div>

                <button
                    className="w-full bg-blue-600 text-white py-2 mt-4 rounded-lg hover:bg-blue-700"
                    onClick={() => console.log({ selectedCategory, selectedSize, selectedColor })}
                >
                    Apply Filters
                </button>
            </div>
            {/* product page */}
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    {/* text - start */}
                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                            Selected
                        </h2>
                        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                            This is a section of some simple filler text, also known as placeholder
                            text. It shares some characteristics of a real written text but is
                            random or otherwise generated.
                        </p>
                    </div>
                    {/* text - end */}
                    <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
                        {/* product - start */}
                        <div className="hover:shadow-lg transition-shadow duration-300 p-2">
                            <a
                                href="#"
                                className="group relative mb-2 block h-96 overflow-hidden lg:mb-3"
                            >
                                <img
                                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/g/j/o/l-tblhn-dp-d144-tripr-original-imaha8k2mc8zcwgy.jpeg?q=70"
                                    loading="lazy"
                                    alt="Photo by Austin Wade"
                                    className="h-full w-full object-cover object-center"
                                />
                                <div className="absolute left-0 bottom-2 flex gap-2">
                                    <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-gray-800">
                                        New
                                    </span>
                                </div>
                            </a>
                            <div className="items-start justify-between gap-2 px-2">
                                <div className="text-gray-500">DEELMO</div>
                                <div className="text-xs text-gray-800 lg:text-sm">
                                    Men Fit Regular Shirt
                                </div>
                                <div className="space-x-3">
                                    <span className="text-gray-800 font-bold lg:text-sm">Rs 329</span>
                                    <span className="text-sm-200 text-gray-500 line-through">999</span>
                                    <span className="text-sm-200 text-green-500">70% off</span>
                                </div>
                            </div>
                        </div>
                        {/* product - end */}
                        {/* product - start */}
                        <div className="hover:shadow-lg transition-shadow duration-300 p-2">
                            <a
                                href="#"
                                className="group relative mb-2 block h-96 overflow-hidden lg:mb-3"
                            >
                                <img
                                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/y/e/h/l-st42-vebnor-original-imah4vzyhuex9h6w.jpeg?q=70"
                                    loading="lazy"
                                    alt="Photo by Austin Wade"
                                    className="h-full w-full object-cover object-center"
                                />
                            </a>
                            <div className="items-start justify-between gap-2 px-2">
                                <div className="text-gray-500">VeBnOR</div>
                                <div className="text-xs text-gray-800 lg:text-sm">
                                    Men Fit Regular Printed Shirt
                                </div>
                                <div className="space-x-3">
                                    <span className="text-gray-800 font-bold lg:text-sm">Rs 197</span>
                                    <span className="text-sm-200 text-gray-500 line-through">999</span>
                                    <span className="text-sm-200 text-green-500">80% off</span>
                                </div>
                            </div>
                        </div>
                        {/* product - end */}
                        {/* product - start */}
                        <div className="hover:shadow-lg transition-shadow duration-300 p-2">
                            <a
                                href="#"
                                className="group relative mb-2 block h-96 overflow-hidden lg:mb-3"
                            >
                                <img
                                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/p/p/q/l-ad-1-sti-original-imah7fha3yknjff4.jpeg?q=70"
                                    loading="lazy"
                                    alt="Photo by Austin Wade"
                                    className="h-full w-full object-cover object-center"
                                />
                            </a>
                            <div className="items-start justify-between gap-2 px-2">
                                <div className="text-gray-500">DEELMO</div>
                                <div className="text-xs text-gray-800 lg:text-sm">
                                    Men Fit Regular Shirt
                                </div>
                                <div className="space-x-3">
                                    <span className="text-gray-800 font-bold lg:text-sm">Rs 329</span>
                                    <span className="text-sm-200 text-gray-500 line-through">999</span>
                                    <span className="text-sm-200 text-green-500">70% off</span>
                                </div>
                            </div>
                        </div>
                        {/* product - end */}
                        {/* product - start */}
                        <div className="hover:shadow-lg transition-shadow duration-300 p-2">
                            <a
                                href="#"
                                className="group relative mb-2 block h-96 overflow-hidden lg:mb-3"
                            >
                                <img
                                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/t/e/g/l-skcsh-1106-mao-fubar-original-imah4zezjtghnpyb.jpeg?q=70"
                                    loading="lazy"
                                    alt="Photo by Austin Wade"
                                    className="h-full w-full object-cover object-center"
                                />
                            </a>
                            <div className="items-start justify-between gap-2 px-2">
                                <div className="text-gray-500">DEELMO</div>
                                <div className="text-xs text-gray-800 lg:text-sm">
                                    Men Fit Regular Shirt
                                </div>
                                <div className="space-x-3">
                                    <span className="text-gray-800 font-bold lg:text-sm">Rs 329</span>
                                    <span className="text-sm-200 text-gray-500 line-through">999</span>
                                    <span className="text-sm-200 text-green-500">70% off</span>
                                </div>
                            </div>
                        </div>
                        {/* product - end */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page