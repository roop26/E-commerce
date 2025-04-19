import React from 'react';

const Seller = () => {
  const stats = [
    { value: "11 Lakh+", text: "Trust ShopWise to sell online" },
    { value: "14 Crore+", text: "Customers buying across India" },
    { value: "19000+", text: "Pincode Supported for delivery" },
    { value: "700+", text: "Categories to sell online" }
  ];

  const suppliers = [
    {
      name: "Amit and Rajat Jain",
      business: "Smartees, Tiruppur",
      testimonial:
        "Our business has grown beyond our imagination, getting up to 10,000 orders consistently during sale days. We are now constantly bringing new products thanks to ShopWise's insights.",
      video: "amit-rajat.mp4",
    },
    {
      name: "Suman",
      business: "Keshav Fashion, Hisar",
      testimonial:
        "I started selling on ShopWise with 4-5 orders on the very first day. In no time I was getting over 1000 orders a day, like a dream come true.",
      video: "suman.mp4",
    },
    {
      name: "Mohit Rathi",
      business: "Meira Jewellery, Ahmedabad",
      testimonial:
        "ShopWise made it extremely simple to transition to online business during lockdown. Suddenly we were all over India to our surprise, seeing up to 5X growth on sale days.",
      video: "mohit.mp4",
    },
  ];

  const categories = [
    "Sell Sarees Online",
    "Sell Jewellery Online",
    "Sell Tshirts Online",
    "Sell Watches Online",
    "Sell Electronics Online",
    "Sell Clothes Online",
    "Sell Shirts Online",
    "Sell Socks Online",
  ];

  return (
    <div className="font-sans">
      {/* Hero Section with improved contrast and spacing */}
      <div 
        className="relative bg-cover bg-center h-96 flex items-center px-8 md:px-16"
        style={{ backgroundImage: "url('/images/bgimg.jpg')" }}
      >
        <div className="max-w-2xl bg-white/90 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Sell online to <span className="text-pink-600">14 Cr+ customers</span> at
            <span className="text-pink-600"> 0% Commission</span>
          </h1>
          <p className="text-gray-700 mt-4 text-lg">
            Become a ShopWise seller and grow your business across India
          </p>
          <div className="mt-4 flex items-center">
            <span className="bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
            <p className="text-gray-700 ml-2">
              Don't have a GSTIN? You can still sell on ShopWise.
            </p>
          </div>
          <button className="mt-6 bg-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300 flex items-center">
            Start Selling
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Stats Cards with improved layout */}
      <div className="py-12 px-8 md:px-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300 text-center border-t-4 border-pink-500">
              <h2 className="text-pink-600 text-3xl font-bold">{stat.value}</h2>
              <p className="text-gray-800 text-lg font-medium mt-2">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Supplier Rewards Section with improved layout */}
      <div className="bg-gray-50 py-12 px-8 md:px-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-2/5">
            <h2 className="text-3xl font-bold text-gray-800 leading-tight">
              Exclusive Supplier+ Rewards <br /> for the first 30 days
            </h2>
          </div>
          <div className="w-full md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-pink-500 hover:shadow-xl transition duration-300">
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-pink-600 text-2xl">📢</span>
                <h3 className="text-lg font-semibold">Free catalog visibility of ₹600</h3>
              </div>
              <p className="text-gray-600 mt-2">
                Run advertisements for your catalogs to increase the visibility of your products and get more orders. Currently, not available for sellers who don't have a Regular GSTIN.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-blue-500 hover:shadow-xl transition duration-300">
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-blue-600 text-2xl">🔄</span>
                <h3 className="text-lg font-semibold">No Order Cancellation Charges</h3>
              </div>
              <p className="text-gray-600 mt-2">
                Cancel orders that you can't fulfill for unforeseen reasons without worrying about penalties.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Videos with improved cards */}
      <div className="py-16 px-8 md:px-16 bg-white">
        <h2 className="text-3xl font-bold mb-10 text-center">Experiences suppliers love to talk about</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {suppliers.map((supplier, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="relative">
                <video 
                  src={supplier.video} 
                  poster="/images/video-thumbnail.jpg" 
                  className="w-full h-56 object-cover"
                ></video>
                <button className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/30 group">
                  <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center group-hover:bg-pink-700 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{supplier.name}</h3>
                <p className="text-pink-600 text-sm font-medium mb-4">{supplier.business}</p>
                <p className="text-gray-700 leading-relaxed">{supplier.testimonial}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section with improved layout */}
      <div className="text-center py-12 px-8 md:px-16 bg-gray-50">
        <h2 className="text-2xl font-bold mb-8">Popular Categories to Sell Online</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6 text-lg max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <a 
              key={index} 
              href="#" 
              className="text-gray-700 hover:text-pink-600 hover:underline transition duration-300 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-pink-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              {category}
            </a>
          ))}
        </div>
        <div className="mt-8">
          <a href="#" className="inline-flex items-center text-gray-800 font-semibold hover:text-pink-600 transition duration-300">
            View More Categories
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Seller;