'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
  company: Yup.number().required('required'),
  email: Yup.string().email('Invalid email').required('Required'),
  subject: Yup.number().required('required'),
  message: Yup.string().required('Invalid').required('Required')
  // .oneOf([Yup.ref('password'), null], 'password must match')

});

const page = () => {

  const contactForm = useFormik({
    initialValues: {
      name: '',
      company: '',
      email: '',
      subject: '',
      message: ''
    },
    onSubmit: (value, { resetForm }) => {
      console.log(value);

      // send values to backend
      // sending request to backend

      axios.post('http://localhost:5000/contact/add', value)
        .then(res => {
          toast.success('User registered successfully')
          resetForm();
        })
        .catch(err => {
          console.log(err);
          toast.error('Something went wrong');
          setSubmitting(false);
        });

    },
    validationSchema: contactSchema
  })

  return (
      <div className="flex flex-col lg:flex-row items-center justify-center bg-red-50">
        {/* Wide Image */}
        <div className="w-full lg:w-2/3 bg-[url(https://i.pinimg.com/736x/57/57/06/575706e64ba9a433e4ebf2dc7c6b7b4a.jpg)] ...  bg-cover m-8">

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div>
              <div className="py-6 sm:py-8 lg:py-12">
                <div className=" max-w-screen-2xl px-4 md:px-8 w-[90%] ">
                  {/* form - start */}
                  <form onSubmit={contactForm.handleSubmit}
                    className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="name"
                        className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        onChange={contactForm.handleChange}
                        value={contactForm.values.name}
                        className="w-full rounded border px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                      >
                        Email*
                      </label>
                      <input
                        type="text"
                        id="email"
                        onChange={contactForm.handleChange}
                        value={contactForm.values.email}
                        className="w-full rounded border px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                      >
                        Message*
                      </label>

                      <textarea
                        name="message"
                        className="h-30 w-full rounded border px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                        defaultValue={""}
                      />
                    </div>
                    <div className="flex items-center justify-between sm:col-span-2">
                      <button
                        type="submit"
                        className="inline-block w-full rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                        Send Message
                      </button>
                    </div>
                  </form>
                  {/* form - end */}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
  );
};

export default page;
