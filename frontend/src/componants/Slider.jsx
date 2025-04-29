'use client';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Link from 'next/link';

const Slider = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add animation after component mounts
    setIsLoaded(true);
  }, []);

  return (
    <>
    <Header/>
    <Navbar/>
      <div className="w-full max-w-8xl mx-auto relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-gradient-to-r from-pink-200 to-purple-200 blur-3xl opacity-20 z-0"></div>
        <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-gradient-to-r from-red-200 to-orange-200 blur-3xl opacity-20 z-0"></div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet custom-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
            renderBullet: function (index, className) {
              return `<span class="${className} w-3 h-3 inline-block mx-1 bg-gray-300 rounded-full transition-all duration-300 hover:bg-red-400"></span>`;
            }
          }}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          loop={true}
          className={`rounded-2xl shadow-2xl transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <SwiperSlide>
            <div className="relative h-96 md:h-[500px] overflow-hidden group">
              <img
                src="/images/banner1.jpg"
                alt="Trending Sunglasses"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent flex flex-col justify-center items-start p-4 md:p-16">
                <div className="max-w-md transform transition-all duration-500 mb-6">
                  <div className="overflow-hidden mb-2">
                    <p className="text-xl md:text-2xl font-medium text-red-300 transform translate-y-0 opacity-100 transition-all duration-500 ease-out">
                      <span className="inline-block relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-red-300 after:bottom-0 after:left-0">Trending Accessories</span>
                    </p>
                  </div>
                  <div className="overflow-hidden">
                    <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg transform translate-y-0 opacity-100 transition-all duration-700 delay-100 ease-out">
                      MODERN <br /> SUNGLASSES
                    </h2>
                  </div>
                  <div className="overflow-hidden mt-6">
                    <p className="text-xl md:text-2xl text-white/90 font-light transform translate-y-0 opacity-100 transition-all duration-500 delay-200 ease-out">
                      starting at <span className="font-semibold">₹299</span>
                    </p>
                  </div>
                  <div className="mt-8">
                    <Link href='/browse-product?category=sunglasses'><button className="relative bg-red-400 text-white overflow-hidden group py-3 px-8 rounded-full text-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-red-400/30 hover:-translate-y-1">
                      <span className="relative z-10">SHOP NOW</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </button></Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative h-96 md:h-[500px] overflow-hidden group">
              <img
                src="./images/banner2.jpg"
                alt="Summer Fashion Sale"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent flex flex-col justify-center items-start p-4 md:p-16">
                <div className="max-w-md transform transition-all duration-500 mb-8">
                  <div className="overflow-hidden mb-2">
                    <p className="text-xl md:text-2xl font-medium text-red-300 transform translate-y-0 opacity-100 transition-all duration-500 ease-out">
                      <span className="inline-block relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-red-300 after:bottom-0 after:left-0">Sale Offer</span>
                    </p>
                  </div>
                  <div className="overflow-hidden">
                    <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg transform translate-y-0 opacity-100 transition-all duration-700 delay-100 ease-out">
                      NEW FASHION <br /> SUMMER SALE
                    </h2>
                  </div>
                  <div className="overflow-hidden mt-6">
                    <p className="text-xl md:text-2xl text-white/90 font-light transform translate-y-0 opacity-100 transition-all duration-500 delay-200 ease-out">
                      starting at <span className="font-semibold">₹399</span>
                    </p>
                  </div>
                  <div className="mt-8">
                    <button className="relative bg-red-400 text-white overflow-hidden group py-3 px-8 rounded-full text-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-red-400/30 hover:-translate-y-1">
                      <span className="relative z-10">SHOP NOW</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative h-96 md:h-[500px] overflow-hidden group">
              <img
                src="./images/banner3.jpg"
                alt="Women's Fashion Sale"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent flex flex-col justify-center items-start p-4 md:p-16">
                <div className="max-w-md transform transition-all duration-500 mb-20">
                  <div className="overflow-hidden mb-2">
                    <p className="text-xl md:text-2xl font-medium text-red-300 transform translate-y-0 opacity-100 transition-all duration-500 ease-out">
                      <span className="inline-block relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-red-300 after:bottom-0 after:left-0">Trending Item</span>
                    </p>
                  </div>
                  <div className="overflow-hidden">
                    <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg transform translate-y-0 opacity-100 transition-all duration-700 delay-100 ease-out">
                      WOMEN'S LATEST <br /> FASHION SALE
                    </h2>
                  </div>
                  <div className="overflow-hidden mt-6">
                    <p className="text-xl md:text-2xl text-white/90 font-light transform translate-y-0 opacity-100 transition-all duration-500 delay-200 ease-out">
                      starting at <span className="font-semibold">₹299</span>
                    </p>
                  </div>
                  <div className="mt-8">
                    <button className="relative bg-red-400 text-white overflow-hidden group py-3 px-8 rounded-full text-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-red-400/30 hover:-translate-y-1">
                      <span className="relative z-10">SHOP NOW</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* image card */}
        <div className="flex space-x-4 bg-blue-100 p-6">
          {/* Card 1 */}
          <div className="rounded-lg">
            <img
              src="https://rukminid2.flixcart.com/fk-p-flap/520/280/image/003a6dfbfb66e12a.jpg?q=20"
              alt="Bulb"
              className="mt-4 w-full rounded"
            />
          </div>

          {/* Card 2 */}
          <div className="rounded-lg">
            <img
              src="https://rukminid2.flixcart.com/fk-p-flap/520/280/image/8aa1050f8e09607e.jpg?q=20"
              alt="Clothing"
              className="mt-4 w-full rounded"
            />
          </div>

          {/* Card 3 */}
          <div className="rounded-lg">
            <img
              src="https://rukminid2.flixcart.com/fk-p-flap/520/280/image/73a210718f53c81f.jpg?q=20"
              alt="Shoes"
              className="mt-4 w-full rounded"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;