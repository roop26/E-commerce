'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import useCartContext from '@/context/CartContext';

const CheckoutSchema = Yup.object().shape({
  fullName: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  postalCode: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  paymentMethod: Yup.string().required('Please select a payment method')
});

export default function CheckoutPage() {
  const { cartItems, getCartTotal, clearCart } = useCartContext();
  const [isProcessing, setIsProcessing] = useState(false);
  const [userData, setUserData] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState('pending');
  const router = useRouter();
  
  const subtotal = getCartTotal();
  const shipping = 40; // Fixed shipping cost
  const tax = Math.round(subtotal * 0.18); // 18% tax
  const totalAmount = subtotal + shipping + tax;

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('Please login to continue');
      router.push('/login');
      return;
    }

    // Get user details
    getUserDetails();

    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const getUserDetails = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/user/getdetails', {
        headers: {
          'x-auth-token': token
        }
      });
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
      if (error.response?.status === 401) {
        router.push('/login');
      }
    }
  };

  const handlePayment = async (values) => {
    try {
      setIsProcessing(true);
      const token = localStorage.getItem('token');
      
      // Create Razorpay order
      const orderResponse = await axios.post('http://localhost:5000/pay/create-order', {
        amount: totalAmount, // Convert to paise
        currency: 'INR'
      }, {
        headers: { 'x-auth-token': token }
      });

      const { data: order } = orderResponse;

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: 'Vox Market',
        description: 'Purchase from Vox Market',
        order_id: order.id,
        prefill: {
          name: values.fullName,
          email: userData?.email,
          contact: userData?.phone
        },
        method: {
          upi: values.paymentMethod === 'upi',
          netbanking: false,
          card: values.paymentMethod === 'card',
          wallet: false
        },
        handler: async (response) => {
          console.log(response);
          
          try {
            // Verify payment
            const verifyResponse = await axios.post('http://localhost:5000/pay/verify-payment', {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature
            }, {
              headers: { 'x-auth-token': token }
            });

            if (verifyResponse.data.success) {
              setPaymentStatus('success');
              await createOrder(values, response);
              toast.success('Payment successful!');
              router.push('/user/thank-you');
              router.push('/user/orders'); // Redirect to orders page
              // Clear cart after successful payment
              clearCart();
              router.push('/user/thank-you');
            } else {
              setPaymentStatus('failed');
              toast.error('Payment verification failed');
            }
          } catch (error) {
            console.error('Payment verification error:', error);
            setPaymentStatus('failed');
            toast.error('Payment verification failed');
          }
        },
        modal: {
          confirm_close: true,
          ondismiss: function() {
            setIsProcessing(false);
            toast.error('Payment cancelled');
          }
        },
        theme: {
          color: '#3399cc'
        }
      };

      // Add UPI specific options if UPI is selected
      if (values.paymentMethod === 'upi') {
        options.config = {
          display: {
            blocks: {
              upi: {
                name: 'Pay via UPI',
                instruments: [
                  {
                    method: 'upi'
                  }
                ]
              }
            },
            sequence: ['block.upi'],
            preferences: {
              show_default_blocks: false
            }
          }
        };
      }

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Payment error:', error);
      toast.error('Failed to process payment');
      setIsProcessing(false);
    }
  };

  const createOrder = async (values, paymentResponse) => {
    try {
      const token = localStorage.getItem('token');
      const orderData = {
        shippingAddress: `${values.fullName}, ${values.address}, ${values.city}, ${values.postalCode}, ${values.country}`,
        items: cartItems,
        totalAmount,
        paymentMethod: values.paymentMethod,
        status: 'success',
        razorpay_order_id: paymentResponse.razorpay_order_id,
        razorpay_payment_id: paymentResponse.razorpay_payment_id,
        razorpay_signature: paymentResponse.razorpay_signature
      };

      await axios.post('http://localhost:5000/order/add', orderData, {
        headers: { 'x-auth-token': token }
      });
    } catch (error) {
      console.error('Error creating order:', error);
      toast.error('Error creating order');
    }
  };

  if (!userData) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping:</span>
            <span>₹{shipping}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (18%):</span>
            <span>₹{tax}</span>
          </div>
          <div className="flex justify-between font-bold pt-2 border-t">
            <span>Total:</span>
            <span>₹{totalAmount}</span>
          </div>
        </div>
      </div>

      <Formik
        initialValues={{
          fullName: userData?.name || '',
          address: userData?.address || '',
          city: userData?.city || '',
          postalCode: userData?.postalCode || '',
          country: userData?.country || '',
          paymentMethod: 'card'
        }}
        validationSchema={CheckoutSchema}
        onSubmit={handlePayment}
      >
        {({ isSubmitting }) => (
          <Form className="bg-white shadow-lg rounded-lg p-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <Field
                  type="text"
                  name="fullName"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <ErrorMessage name="fullName" component="div" className="mt-1 text-sm text-red-600" />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <Field
                  type="text"
                  name="address"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <ErrorMessage name="address" component="div" className="mt-1 text-sm text-red-600" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                  <Field
                    type="text"
                    name="city"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  <ErrorMessage name="city" component="div" className="mt-1 text-sm text-red-600" />
                </div>

                <div>
                  <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
                  <Field
                    type="text"
                    name="postalCode"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  <ErrorMessage name="postalCode" component="div" className="mt-1 text-sm text-red-600" />
                </div>
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                <Field
                  type="text"
                  name="country"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <ErrorMessage name="country" component="div" className="mt-1 text-sm text-red-600" />
              </div>

              {/* <div>
                <label className="block text-sm font-medium text-gray-700">Payment Method</label>
                <div className="mt-2 space-y-2">
                  <label className="inline-flex items-center">
                    <Field
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      className="form-radio h-4 w-4 text-indigo-600"
                    />
                    <span className="ml-2">Credit/Debit Card</span>
                  </label>
                  <label className="inline-flex items-center">
                    <Field
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      className="form-radio h-4 w-4 text-indigo-600"
                    />
                    <span className="ml-2">UPI</span>
                  </label>
                </div>
                <ErrorMessage name="paymentMethod" component="div" className="mt-1 text-sm text-red-600" />
              </div> */}

              <button
                type="submit"
                // disabled={isProcessing}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </div>
                ) : (
                  'Pay Now'
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}