'use client';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const BrowseProduct = () => {
  const { id } = useParams();
  const router = useRouter();
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProductData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:5000/product/getall`);
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
  }, []);

  const displayProductCards = () => {
    return productData.map((prod) => {
      return (
        <div
          key={prod._id}
          className="group bg-white shadow-sm hover:shadow-md rounded-sm transition-shadow duration-300 overflow-hidden border border-gray-200 hover:border-gray-300"
          onClick={() => router.push(`/view-product/${prod._id}`)}
        >
          <div className="relative overflow-hidden aspect-square">
            <img
              className="object-cover w-full h-full"
              src={prod.image}
              alt={prod.productName}
            />
          </div>
          <div className="p-4">
            <h3 className="font-medium text-gray-900 text-lg truncate">
              {prod.brandName}
            </h3>
            <p className="mt-1 text-sm text-gray-600 line-clamp-2">
              {prod.details.slice(0, 30)}...
            </p>
            <div className="mt-2 flex items-center gap-2">
              <span className="font-semibold text-lg text-gray-900">₹{prod.price}</span>
              <span className="text-sm text-gray-500 line-through">₹999</span>
            </div>
            <button className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-sm font-medium transition-colors duration-300">
              View Details
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Browse Products</h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
        </div>
      ) : error ? (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayProductCards()}
          </div>

          {productData.length === 0 && !loading && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900">No products found</h3>
              <p className="mt-2 text-gray-500">Try again later or check your filters.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BrowseProduct;