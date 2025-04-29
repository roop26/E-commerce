'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState, useRef } from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const ProductSchema = Yup.object().shape({
  brandName: Yup.string().required('Brand name is required'),
  productName: Yup.string().required('Product name is required'),
  size: Yup.string().required('Size is required'),
  price: Yup.number().required('Price is required'),
  details: Yup.string().required('Product details are required'),
  category: Yup.string().required('Category is required'),
  // image: Yup.mixed().required('Product image is required')
});

const AddProduct = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);

  // Add categories array
  const categories = [
    'Footwear',
    'Apparel',
    'Accessories',
    'Equipment',
    'Electronics',
    'Home Decor',
    'Beauty',
    'Men',
    'Women',
    'Kid',
    'Kitchen Sets',
    'Furniture',
    'Jwellery',
    'Sports',
    'Sunglasses',
    'Perfume',
    'Watches',
    'Bags',
    'Toys',
    'Books',
  ];

  // Add sizes array
  const sizes = [
    'XS',
    'S',
    'M',
    'L',
    'XL',
    'XXL',
    '36',
    '37',
    '38',
    '39',
    '40',
    '41',
    '42',
    '43',
    '44',
    '45',
    '46',
    '5',
    '6',
    '7',
    '8',
    'One Size'
  ];

  const handleImageChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      // Update formik value
      productForm.setFieldValue('image', file);

      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const productForm = useFormik({
    initialValues: {
      brandName: '',
      productName: '',
      size: '',
      price: '',
      details: '',
      category: '',
      image: null
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setIsSubmitting(true);
      // Create FormData to handle file upload
      // const formData = new FormData();
      // formData.append('brandName', values.brandName);
      // formData.append('productName', values.productName);
      // formData.append('size', values.size);
      // formData.append('price', values.price);
      // formData.append('details', values.details);
      // formData.append('category', values.category);
      // formData.append('image', values.image);

      axios.post('http://localhost:5000/product/add', values)
        .then(res => {
          toast.success('Product added successfully');
          resetForm();
          // setPreviewImage(null);
          setIsSubmitting(false);
          toast.success('Product added successfully');
        })
        .catch(err => {
          console.log(err);
          toast.error('Something went wrong');
          setIsSubmitting(false);
        });
    },
    validationSchema: ProductSchema
  });

  // const [preview, setPreview] = useState('');

  const upload = (e) => {

      const file = e.target.files[0];
      const fd = new FormData();
      fd.append('file', file);
      fd.append('upload_preset', 'shoping')
      fd.append('colud_name', 'dm26f7gj5') // Corrected 'colud_name' to 'cloud_name'

      axios.post('https://api.cloudinary.com/v1_1/dm26f7gj5/image/upload', fd)
          .then((result) => {
              toast.success('file upload successfully');
              console.log(result.data);
              setPreviewImage(result.data.url); // Update preview
              productForm.setFieldValue('image', result.data.url);
          }).catch((err) => {
              console.log(err);
              toast.error('failed to upload file');

          });
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Add New Product</h1>
          <p className="mt-2 text-gray-600">Fill in the details to add a new product to your inventory</p>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-indigo-600 h-2" aria-hidden="true"></div>

          <div className="p-6 sm:p-8">
            <form onSubmit={productForm.handleSubmit} encType="multipart/form-data">
              <div className="space-y-6">
                {/* Brand Name */}
                <div>
                  <label htmlFor="brandName" className="block text-sm font-medium text-gray-700">
                    Brand Name
                  </label>
                  <div className="mt-1 relative">
                    <input
                      type="text"
                      id="brandName"
                      onChange={productForm.handleChange}
                      onBlur={productForm.handleBlur}
                      value={productForm.values.brandName}
                      className={`block w-full px-4 py-3 rounded-lg border ${productForm.touched.brandName && productForm.errors.brandName
                        ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
                        : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                        }`}
                      placeholder="Nike, Adidas, etc."
                    />
                    {productForm.touched.brandName && productForm.errors.brandName && (
                      <p className="mt-1 text-sm text-red-600">{productForm.errors.brandName}</p>
                    )}
                  </div>
                </div>

                {/* Product Name */}
                <div>
                  <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
                    Product Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="productName"
                      onChange={productForm.handleChange}
                      onBlur={productForm.handleBlur}
                      value={productForm.values.productName}
                      className={`block w-full px-4 py-3 rounded-lg border ${productForm.touched.productName && productForm.errors.productName
                        ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
                        : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                        }`}
                      placeholder="Air Max 270, Ultraboost, etc."
                    />
                    {productForm.touched.productName && productForm.errors.productName && (
                      <p className="mt-1 text-sm text-red-600">{productForm.errors.productName}</p>
                    )}
                  </div>
                </div>

                {/* Category Dropdown */}
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <div className="mt-1">
                    <select
                      id="category"
                      name="category"
                      onChange={productForm.handleChange}
                      onBlur={productForm.handleBlur}
                      value={productForm.values.category}
                      className={`block w-full px-4 py-3 rounded-lg border ${productForm.touched.category && productForm.errors.category
                        ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
                        : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                        }`}
                    >
                      <option value="" disabled>Select a category</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                    {productForm.touched.category && productForm.errors.category && (
                      <p className="mt-1 text-sm text-red-600">{productForm.errors.category}</p>
                    )}
                  </div>
                </div>

                {/* Size and Price - Two Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Size Dropdown */}
                  <div>
                    <label htmlFor="size" className="block text-sm font-medium text-gray-700">
                      Size
                    </label>
                    <div className="mt-1">
                      <select
                        id="size"
                        name="size"
                        onChange={productForm.handleChange}
                        onBlur={productForm.handleBlur}
                        value={productForm.values.size}
                        className={`block w-full px-4 py-3 rounded-lg border ${productForm.touched.size && productForm.errors.size
                          ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
                          : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                          }`}
                      >
                        <option value="" disabled>Select a size</option>
                        {sizes.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                      {productForm.touched.size && productForm.errors.size && (
                        <p className="mt-1 text-sm text-red-600">{productForm.errors.size}</p>
                      )}
                    </div>
                  </div>

                  {/* Price */}
                  <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                      Price
                    </label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">₹</span>
                      </div>
                      <input
                        type="number"
                        id="price"
                        name="price"
                        onChange={productForm.handleChange}
                        onBlur={productForm.handleBlur}
                        value={productForm.values.price}
                        className={`block w-full pl-8 pr-4 py-3 rounded-lg border ${productForm.touched.price && productForm.errors.price
                          ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
                          : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                          }`}
                        placeholder="1999"
                      />
                      {productForm.touched.price && productForm.errors.price && (
                        <p className="mt-1 text-sm text-red-600">{productForm.errors.price}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Image Upload */}
                <div>
                  <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                    Product Image
                  </label>
                  <div className="mt-1 flex items-center space-x-5">
                    <div className="flex-shrink-0">
                      {previewImage ? (
                        <div className="relative h-40 w-40 rounded-lg overflow-hidden bg-gray-100">
                          <img
                            src={previewImage}
                            alt="Product preview"
                            className="h-full w-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              // setPreviewImage(null);
                              productForm.setFieldValue('image', null);
                              // if (fileInputRef.current) {
                              //   fileInputRef.current.value = "";
                              // }
                            }}
                            className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <div className="h-40 w-40 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                          <svg className="h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <input
                        type="file"
                        id="image"
                        accept="image/*"
                        // ref={fileInputRef}
                        onChange={upload}
                        // onBlur={productForm.handleBlur}
                        className="hidden"
                      />
                      <label
                        htmlFor="image"
                        className="cursor-pointer inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        {previewImage ? 'Change Image' : 'Upload Image'}
                      </label>
                      <p className="mt-1 text-xs text-gray-500">
                        PNG, JPG, JPEG up to 5MB
                      </p>
                      {productForm.touched.image && productForm.errors.image && (
                        <p className="mt-1 text-sm text-red-600">{productForm.errors.image}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-gray-700">
                    Product Details
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="details"
                      rows={4}
                      onChange={productForm.handleChange}
                      onBlur={productForm.handleBlur}
                      value={productForm.values.details}
                      className={`block w-full px-4 py-3 rounded-lg border ${productForm.touched.details && productForm.errors.details
                        ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
                        : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                        }`}
                      placeholder="Describe the product details, materials, features, etc."
                    />
                    {productForm.touched.details && productForm.errors.details && (
                      <p className="mt-1 text-sm text-red-600">{productForm.errors.details}</p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      "Add Product"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;