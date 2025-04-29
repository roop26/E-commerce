'use client';
import axios from 'axios';
import { Heart } from 'lucide-react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import useWishlist from '@/context/WishlistContext';
import useCartContext from '@/context/CartContext';

const BrowseProduct = () => {
  const { id } = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addItemToCart, isInCart } = useCartContext();
  const [searching, setSearching] = useState(false);

  const fetchProductData = async () => {
    try {
      setLoading(true);
      const searchQuery = searchParams.get('search');
      const category = searchParams.get('category');
      
      let url;
      if (searchQuery) {
        url = `http://localhost:5000/product/search?query=${encodeURIComponent(searchQuery)}`;
      } else if (category) {
        url = `http://localhost:5000/product/search?query=${encodeURIComponent(category)}`;
      } else {
        url = `http://localhost:5000/product/getall`;
      }
      
      const res = await axios.get(url);
      setProductData(res.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError('Failed to load products. Please try again later.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [searchParams]);

  const toggleWishlist = (product) => {
    const isWishlisted = isInWishlist(product._id);
    if (isWishlisted) {
      removeFromWishlist(product._id);
    } else {
      addToWishlist(product);
    }
  };

  const displayProductCards = () => {
    if (searching) {
      return (
        <div className="col-span-full text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Searching products...</p>
        </div>
      );
    }

    if (productData.length === 0) {
      return (
        <div className="col-span-full text-center py-8">
          <p className="text-xl text-gray-600">No products found</p>
          <p className="mt-2 text-gray-500">Try a different search term</p>
        </div>
      );
    }

    return productData.map((prod, index) => {
      const isWishlisted = isInWishlist(prod._id);
      const inCart = isInCart(prod._id);
      
      return (
        <div
          key={index}
          className="group bg-white shadow-sm hover:shadow-md rounded-sm transition-shadow duration-300 overflow-hidden border border-gray-200 hover:border-gray-300"
        >
          <div 
            className="relative overflow-hidden aspect-square cursor-pointer"
            onClick={() => router.push(`/view-product/${prod._id}`)}
          >
            <img
              className="object-cover w-full h-full"
              src={prod.image}
              alt={prod.productName}
            />
            {/* Wishlist Icon */}
            <button
              className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow hover:bg-gray-100 transition"
              onClick={(e) => {
                e.stopPropagation();
                toggleWishlist(prod);
              }}
            >
              <Heart 
                className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
              />
            </button>
          </div>
          <div className="p-4">
            <h3 className="font-medium text-gray-900 text-lg truncate">
              {prod.brandName}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{prod.productName}</p>
            {/* <p className="text-xs text-gray-400">{prod.category}</p> */}
            <p className="mt-1 text-sm text-gray-600 truncate">
              {prod.details}
            </p>
            <div className="mt-2 flex items-center gap-2">
              <span className="font-semibold text-lg text-gray-900">₹{prod.pprice}</span>
              <span className="text-sm text-gray-500 line-through">₹{prod.price}</span>
              <span className="text-sm text-green-600 font-medium">
                {Math.round(((prod.price - prod.pprice) / prod.price) * 100)}% OFF
              </span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                addItemToCart(prod);
              }}
              className={`mt-3 w-full py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                inCart
                  ? 'bg-green-50 text-green-600 border border-green-600'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {inCart ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        </div>
      );
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-red-600 mb-4">❌</p>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayProductCards()}
      </div>
    </div>
  );
};

export default BrowseProduct;