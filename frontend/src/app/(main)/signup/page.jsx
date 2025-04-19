'use client';
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string().required('Confirm password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const Signup = () => {
  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: (value, { resetForm }) => {
      console.log(value);

      // send values to backend
      // sending request to backend
      axios.post('http://localhost:5000/user/add', value)
        .then(res => {
          toast.success('User registered successfully')
          resetForm();
        })
        .catch(err => {
          console.log(err);
          toast.error('Something went wrong');
        });
    },
    validationSchema: SignupSchema
  });

  return (
    <div className='bg-gradient-to-b from-blue-50 to-white min-h-screen'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-center items-center min-h-screen py-10'>
          <div className="w-full max-w-md bg-white shadow-lg rounded-xl overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-gray-800">Sign up</h1>
                <p className="mt-2 text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link href='/login' className="text-blue-600 decoration-2 hover:underline font-medium">
                    Login here
                  </Link>
                </p>
              </div>
              <div className="mt-6">
                <button
                  type="button"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-auto"
                    width={46}
                    height={47}
                    viewBox="0 0 46 47"
                    fill="none"
                  >
                    <path
                      d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                      fill="#34A853"
                    />
                    <path
                      d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                      fill="#EB4335"
                    />
                  </svg>
                  Sign up with Google
                </button>
                <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6">
                  Or
                </div>
                {/* Form */}
                <form onSubmit={signupForm.handleSubmit}>
                  <div className="grid gap-y-4">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                        Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          onChange={signupForm.handleChange}
                          onBlur={signupForm.handleBlur}
                          value={signupForm.values.name}
                          className={`py-3 px-4 block w-full border ${
                            signupForm.touched.name && signupForm.errors.name 
                              ? 'border-red-500 focus:ring-red-500' 
                              : 'border-gray-200 focus:ring-blue-500'
                          } rounded-lg text-sm`}
                        />
                        {signupForm.touched.name && signupForm.errors.name && (
                          <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                            <svg
                              className="size-5 text-red-500"
                              width={16}
                              height={16}
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </div>
                        )}
                      </div>
                      {signupForm.touched.name && signupForm.errors.name && (
                        <p className="text-xs text-red-600 mt-2">{signupForm.errors.name}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                        Email address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          onChange={signupForm.handleChange}
                          onBlur={signupForm.handleBlur}
                          value={signupForm.values.email}
                          className={`py-3 px-4 block w-full border ${
                            signupForm.touched.email && signupForm.errors.email 
                              ? 'border-red-500 focus:ring-red-500' 
                              : 'border-gray-200 focus:ring-blue-500'
                          } rounded-lg text-sm`}
                        />
                        {signupForm.touched.email && signupForm.errors.email && (
                          <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                            <svg
                              className="size-5 text-red-500"
                              width={16}
                              height={16}
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </div>
                        )}
                      </div>
                      {signupForm.touched.email && signupForm.errors.email && (
                        <p className="text-xs text-red-600 mt-2">{signupForm.errors.email}</p>
                      )}
                    </div>

                    {/* Password Field */}
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium mb-2 text-gray-700">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          onChange={signupForm.handleChange}
                          onBlur={signupForm.handleBlur}
                          value={signupForm.values.password}
                          className={`py-3 px-4 block w-full border ${
                            signupForm.touched.password && signupForm.errors.password 
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-gray-200 focus:ring-blue-500'
                          } rounded-lg text-sm`}
                        />
                        {signupForm.touched.password && signupForm.errors.password && (
                          <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                            <svg
                              className="size-5 text-red-500"
                              width={16}
                              height={16}
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </div>
                        )}
                      </div>
                      {signupForm.touched.password && signupForm.errors.password && (
                        <p className="text-xs text-red-600 mt-2">{signupForm.errors.password}</p>
                      )}
                    </div>

                    {/* Confirm Password Field */}
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2 text-gray-700">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          onChange={signupForm.handleChange}
                          onBlur={signupForm.handleBlur}
                          value={signupForm.values.confirmPassword}
                          className={`py-3 px-4 block w-full border ${
                            signupForm.touched.confirmPassword && signupForm.errors.confirmPassword 
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-gray-200 focus:ring-blue-500'
                          } rounded-lg text-sm`}
                        />
                        {signupForm.touched.confirmPassword && signupForm.errors.confirmPassword && (
                          <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                            <svg
                              className="size-5 text-red-500"
                              width={16}
                              height={16}
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </div>
                        )}
                      </div>
                      {signupForm.touched.confirmPassword && signupForm.errors.confirmPassword && (
                        <p className="text-xs text-red-600 mt-2">{signupForm.errors.confirmPassword}</p>
                      )}
                    </div>
                    
                    {/* Terms Checkbox */}
                    <div className="flex items-center">
                      <div className="flex">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                        />
                      </div>
                      <div className="ms-3">
                        <label htmlFor="remember-me" className="text-sm text-gray-600 cursor-pointer">
                          I accept the{" "}
                          <a
                            className="text-blue-600 decoration-2 hover:underline font-medium"
                            href="#"
                          >
                            Terms and Conditions
                          </a>
                        </label>
                      </div>
                    </div>
                    
                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-colors duration-200"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;