import React from 'react'

const page = () => {
  return (
    <div>
    <div className="flex flex-col md:flex-row items-center justify-center p-8 max-w-6xl mx-auto">
      {/* Image Section */}
      <div className="w-full md:w-1/2 p-4">
        <img
          src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/slide-image-free-img.jpg"
          alt="About Us"
          className="w-full shadow-lg"
        />
      </div>
      
      {/* Content Section */}
      <div className="w-full md:w-1/2 p-4 text-center md:text-left">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Our Store</h2>
        <p className="text-lg text-gray-600 mb-4">
          Welcome to our e-commerce platform, where quality meets convenience.
          We are committed to providing the best online shopping experience with
          a vast range of products at competitive prices.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          Our mission is to deliver excellence and ensure customer satisfaction
          with fast shipping, secure payments, and top-notch customer service.
        </p>
      </div>
    </div>
    {/* our team */}
    <>
  {/* Team */}
  <div className="max-w-[50rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* Title */}
    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <p className='text-lg'>A Few Words About</p>
      <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
        Our Team
      </h2>
    </div>
    {/* End Title */}
    {/* Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 ">
      <div className="text-center bg-gray-100">
        <img
          className="sm:size-48 lg:size-60 mx-auto"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
            David Forren
          </h3>
          <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
            Founder / CEO
          </p>
        </div>
      </div>
      {/* End Col */}
      <div className="text-center bg-gray-100">
        <img
          className="sm:size-48 lg:size-60 mx-auto"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
            Amil Evara
          </h3>
          <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
            UI/UX Designer
          </p>
        </div>
      </div>
      {/* End Col */}
      <div className="text-center bg-gray-100">
        <img
          className="sm:size-48 lg:size-60 mx-auto"
          src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
            Ebele Egbuna
          </h3>
          <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
            Support Consultant
          </p>
        </div>
      </div>
      {/* End Col */}
      <div className="text-center bg-gray-100">
        <img
          className="sm:size-48 lg:size-60 mx-auto"
          src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
            Maria Powers
          </h3>
          <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
            Director of sales
          </p>
        </div>
      </div>
      {/* End Col */}
      <div className="text-center bg-gray-100">
        <img
          className="sm:size-48 lg:size-60 mx-auto"
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
            Delia Pawelke
          </h3>
          <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
            Front-end Developer
          </p>
        </div>
      </div>
      {/* End Col */}
      <div className="text-center bg-gray-100">
        <img
          className="sm:size-48 lg:size-60 mx-auto"
          src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
            Tom Lowry
          </h3>
          <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
            UI/UX Designer
          </p>
        </div>
      </div>
      {/* End Col */}
    </div>
    {/* End Grid */}
  </div>
  {/* End Team */}
</>

   </div>
  )
}

export default page;