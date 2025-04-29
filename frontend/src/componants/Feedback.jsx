import React, { useState } from 'react';
import { PlusCircle, MinusCircle, Upload, Star } from "lucide-react";

// Component for the product details page with image upload and star review
const ProductDetailsPage = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [showDetails, setShowDetails] = useState(false);
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const [submitted, setSubmitted] = useState(false);

    // Handle image selection
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Toggle product details visibility
    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    // Handle star selection
    const handleStarClick = (selectedRating) => {
        setRating(selectedRating);
    };

    // Handle review submission
    const handleSubmitReview = (e) => {
        e.preventDefault();
        if (rating > 0) {
            setSubmitted(true);
        }
    };

    // 
    // const FeedbackSchema = Yup.object().shape({
    //   userId: Yup.string().required('Name is required'),
    //   rating: Yup.string().required('Email is required'),
    //   discription: Yup.string(),
    //   createdAt: Yup.number(),
    //   image: Yup.string(),
      
    // });

     // const [preview, setPreview] = useState('');

//      axios.post('http://localhost:5000/review/add', value)
//      .then(res => {
//        toast.success('User registered successfully')
//        resetForm();
//      })
//      .catch(err => {
//        console.log(err);
//        toast.error('Something went wrong');
//      });
//  },
//  validationSchema: reviewSchema
// });

  const upload = (e) => {

    const file = e.target.files[0];
    const fd = new FormData();
    fd.append('file', file);
    fd.append('upload_preset', 'shoping')
    fd.append('colud_name', 'dm26f7gj5')

    axios.post('https://api.cloudinary.com/v1_1/dm26f7gj5/image/upload', fd)
        .then((result) => {
            toast.success('file upload successfully');
            console.log(result.data);
            setPreviewImage(result.data.url);
            productForm.setFieldValue('image', result.data.url);
        }).catch((err) => {
            console.log(err);
            toast.error('failed to upload file');

        });
    }

    return (
        <div className="max-w-3xl mx-auto p-4">
            {/* Product Details Section */}
            <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
                <div className="p-6 w-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-bold">Product Details</h1>
                        <button
                            className="p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            onClick={toggleDetails}
                        >
                            {showDetails ? (
                                <MinusCircle className="h-5 w-5 text-gray-500" />
                            ) : (
                                <PlusCircle className="h-5 w-5 text-gray-500" />
                            )}
                        </button>
                    </div>
                    {/* Expandable details */}
                    {showDetails && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            {/* Product details first as requested */}
                            <div className="mb-4">
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center">
                                        <span className="font-medium text-gray-400 w-24">Type</span>
                                        <span>Round Neck</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-medium text-gray-400 w-24">Fabric</span>
                                        <span>Polyester</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-medium text-gray-400 w-24">Pattern</span>
                                        <span>Printed</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-medium text-gray-400 w-24">Ideal For</span>
                                        <span>Men</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm text-gray-600">
                                    Mens 100% polyster all over print stylish t-shirt. Perfect and suitable for all seasons.
                                    Unique collection to your wardrobe. Short sleeve t-shirt with a pair of tracks can afford the wearer a very classic look.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Image Upload Section */}
            <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
                <div className="p-6">
                    <h2 className="text-lg font-semibold mb-4">Product Image</h2>

                    <div className="flex flex-col items-center border-2 border-dashed border-gray-300 rounded-lg p-6 mb-4">
                        {imagePreview ? (
                            <div className="w-full relative">
                                <img
                                    src={imagePreview}
                                    alt="Product preview"
                                    className="mx-auto max-h-64 rounded-md"
                                />
                                <button
                                    className="mt-4 px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                                    onClick={() => setImagePreview(null)}
                                >
                                    Remove Image
                                </button>
                            </div>
                        ) : (
                            <div className="text-center">
                                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                <p className="mt-2 text-sm text-gray-600">
                                    Drag and drop an image, or click to browse
                                </p>
                            </div>
                        )}

                        <div className="mt-4 w-full">
                            <label className="w-full">
                                <input
                                    type="file"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                />
                                <div className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer text-center">
                                    Choose Image
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

            {/* Review section with star rating */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                    <h2 className="text-lg font-semibold mb-4">Product Review</h2>
                    
                    {submitted ? (
                        <div className="bg-green-50 p-4 rounded-lg">
                            <h3 className="text-green-800 font-medium">Thank you for your review!</h3>
                            <div className="mt-2 flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                    />
                                ))}
                            </div>
                            <p className="mt-2 text-gray-700">{reviewText}</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmitReview}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Rate this product
                                </label>
                                <div className="flex space-x-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            type="button"
                                            key={star}
                                            onClick={() => handleStarClick(star)}
                                            className="focus:outline-none"
                                        >
                                            <Star
                                                className={`h-6 w-6 ${
                                                    star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                                                } cursor-pointer hover:text-yellow-400`}
                                            />
                                        </button>
                                    ))}
                                </div>
                                {rating === 0 && (
                                    <p className="text-xs text-red-500 mt-1">Please select at least 1 star</p>
                                )}
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-2">
                                    Your Review
                                </label>
                                <textarea
                                    id="review"
                                    rows="4"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Share your experience with this product..."
                                    value={reviewText}
                                    onChange={(e) => setReviewText(e.target.value)}
                                ></textarea>
                            </div>
                            
                            <button
                                type="submit"
                                disabled={rating === 0}
                                className={`w-full px-4 py-2 text-sm font-medium text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                                    rating > 0 
                                        ? 'bg-blue-600 hover:bg-blue-700' 
                                        : 'bg-blue-300 cursor-not-allowed'
                                }`}
                            >
                                Submit Review
                            </button>
                        </form>
                    )}
                </div>
            </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;