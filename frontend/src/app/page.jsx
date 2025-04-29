'use client'
import React from 'react';
import Slider from '../componants/Slider';
import Footer from '@/componants/Footer';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Slider />
      {/* Recommended Items section */}
      <div className="max-w-8xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-6">Recommended Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Item 1 - Women's T-Shirts */}
          <div className="bg-white shadow-sm rounded-sm overflow-hidden p-4 flex flex-col">
            <Link href='/browse-product?category=t-shirt'><img
              src='https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/i/y/5/s-3-4-women-black-cutegirl-calm-down-original-imah4uz59fsjycnz.jpeg?q=70'
              alt='Women T-shirt'
              className="h-64 w-full object-cover mb-4 rounded-sm"
            />
            <h3 className="text-lg font-medium text-center">Women's T-Shirts</h3>
            <span className='text-green-500 text-center'>Min 50% Off</span></Link>
          </div>
          
          {/* Item 2 - Men's T-Shirt */}
          <div className="bg-white shadow-sm rounded-sm overflow-hidden p-4 flex flex-col">
          <Link href=''><img
              src='https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/c/f/9/xxl-ad-5-sti-original-imah7zgzbdwkzyn8.jpeg?q=70'
              alt='Men T-shirt'
              className="h-64 w-full object-cover mb-4 rounded-sm"
            />
            <h3 className="text-lg font-medium text-center">Men's T-Shirt</h3>
            <span className='text-green-500 text-center'>Min 50% Off</span></Link>
          </div>
          
          {/* Item 3 - Sling Bags */}
          <div className="bg-white shadow-sm rounded-sm overflow-hidden p-4 flex flex-col items-center">
            <Link href=''><img
              src='https://rukminim2.flixcart.com/image/612/612/xif0q/sling-bag/v/z/r/trendy-boxy-pu-sling-bag-for-women-zk-03-hndbg-mini-cg-crs-txtr-original-imah7n94hzfz9dvv.jpeg?q=70'
              alt='Sling bag'
              className="h-64 w-full object-cover mb-4 rounded-sm"
            />
            <h3 className="text-lg font-medium text-center">Sling Bags</h3>
            <span className='text-green-500 text-center'>Min 70% Off</span></Link>
          </div>
          
          {/* Item 4 - Neckband */}
          <div className="bg-white shadow-sm rounded-sm overflow-hidden p-4 flex flex-col items-center">
          <Link href=''><img
              src='https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/f/6/t/nb120-amaze-upto-50-hours-playtime-fast-charging-dual-pairing-original-imah6rvswdjuhnzg.jpeg?q=70'
              alt='Neckband headphones'
              className="h-64 w-full object-cover mb-4 rounded-sm"
            />
            <h3 className="text-lg font-medium text-center">Neckband</h3>
            <span className='text-green-500 text-center'>Min 40% Off</span></Link>
          </div>
          
          {/* Item 5 - Women's Shoes */}
          <div className="bg-white shadow-sm rounded-sm overflow-hidden p-4 flex flex-col items-center">
          <Link href=''><img
              src='https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/x/d/c/3-1335-wt-3-3-deals4you-white-blue-original-imah4w39wwdkbbub.jpeg?q=70&crop=false'
              alt='Women shoes'
              className="h-64 w-full object-cover mb-4 rounded-sm"
            />
            <h3 className="text-lg font-medium text-center">Women's Shoes</h3>
            <span className='text-green-500 text-center'>Min 60% Off</span></Link>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;