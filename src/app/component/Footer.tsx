import Image from 'next/image'
import React from 'react'

const FooterPage = () => {
  return (
    <div>
  <footer
    className="text-white body-font bg-black bg-cover"
    style={{ backgroundImage: "url(/banner1.png)" }}
  >
    <div className="container px-6 py-12 mx-auto flex flex-col md:flex-row md:items-start items-center md:space-x-6 space-y-6 md:space-y-0">
      <div className="w-full  md:w-1/4 text-center md:text-left flex flex-col items-center md:items-start">
        <Image
          src="/logo.png"
          alt="logo"
          width={200}
          height={200}
          className="mt-[-1rem]"
        />
        <h1 className="text-[20px] md:text-[25px] mt-4 md:mt-7">
          Subscribe to Our Newsletter
        </h1>
        <p className="mt-4 md:mt-7">
          Receive Updates on New Arrivals and Special Promotions!
        </p>
        <div className="flex mt-6 md:mt-11 rounded-lg w-full md:w-auto">
          <input
            type="text"
            placeholder="Your Email Here"
            className="bg-black opacity-30 h-10 md:h-[2.5rem] w-[70%] md:w-[13rem] rounded-l-lg text-white pl-2"
          />
          <button className="h-10 md:h-[2.5rem] w-[30%] md:w-[5rem] bg-orange-700 rounded-r-lg">
            Submit
          </button>
        </div>
      </div>

      <div className="flex-grow flex flex-wrap justify-center md:justify-start md:pl-20 -mb-10 md:mt-0 mt-10 text-center md:text-left space-y-8 md:space-y-0">
        <div className="w-1/2 md:w-1/4 px-2">
          <h2 className="title-font font-medium tracking-widest text-sm mb-3">
            CATEGORIES
          </h2>
          <nav className="list-none space-y-2">
            <li>
              <a className="hover:text-gray-800 cursor-pointer">Fashion</a>
            </li>
            <li>
              <a className="hover:text-gray-800 cursor-pointer">Jewelry</a>
            </li>
            <li>
              <a className="hover:text-gray-800 cursor-pointer">Third Link</a>
            </li>
            <li>
              <a className="hover:text-gray-800 cursor-pointer">Sports</a>
            </li>
            <li>
              <a className="hover:text-gray-800 cursor-pointer">Electronics</a>
            </li>
            <li>
              <a className="hover:text-gray-800 cursor-pointer">Indoor</a>
            </li>
          </nav>
        </div>

        <div className="w-1/2 md:w-1/4 px-2">
          <h2 className="title-font font-bold tracking-widest text-sm mb-3">
            SHOPPING
          </h2>
          <nav className="list-none space-y-2">
            <li>
              <a className="hover:text-gray-800 cursor-pointer">Payments</a>
            </li>
            <li>
              <a className="hover:text-gray-800 cursor-pointer">Delivery options</a>
            </li>
            <li>
              <a className="hover:text-gray-800 cursor-pointer">Buyer protection</a>
            </li>
          </nav>
        </div>

        <div className="w-1/2 md:w-1/4 px-2">
          <h2 className="title-font font-medium tracking-widest text-sm mb-3">
            CUSTOMER CARE
          </h2>
          <nav className="list-none space-y-2">
            <li>
              <a className="hover:text-gray-800 cursor-pointer">Help center</a>
            </li>
            <li>
              <a className="hover:text-gray-800 cursor-pointer">Terms & Conditions</a>
            </li>
            <li>
              <a className="hover:text-gray-800 cursor-pointer">Privacy policy</a>
            </li>
            <li>
              <a className="hover:text-gray-800 cursor-pointer">Returns & refund</a>
            </li>
            <li>
              <a className="hover:text-gray-800 cursor-pointer">Survey & feedback</a>
            </li>
          </nav>
        </div>

        <div className="w-1/2 md:w-1/4 px-2">
          <h2 className="title-font font-medium tracking-widest text-sm mb-3">
            PAGES
          </h2>
          <nav className="list-none space-y-2">
            <li>
              <a className="hover:text-gray-800 cursor-pointer">About Us</a>
            </li>
            <li>
              <a className="hover:text-gray-800 cursor-pointer">Shop</a>
            </li>
            <li>
              <a className="hover:text-gray-800 cursor-pointer">Contact Us</a>
            </li>
            <li>
              <a className="hover:text-gray-800 cursor-pointer">Services</a>
            </li>
            <li>
              <a className="hover:text-gray-800 cursor-pointer">Blog</a>
            </li>
          </nav>
        </div>
      </div>
    </div>

    <hr className="border-gray-600 my-6" />

    <div className="container mx-auto py-4 px-5 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0">
      <p className="text-sm text-center sm:text-left">
        @2024 Local Face Inc. All rights reserved
      </p>
    </div>
  </footer>
</div>

  )
}

export default FooterPage
