import React from "react";
import {
  FaDribbble,
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-800">
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center space-x-2">
            <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center flex-col">
              <MdDeliveryDining className="text-2xl dark:text-black" />
            </div>
            <p className="text-white font-semibold text-2xl">Foodie</p>
          </div>
          <p className="mt-4 text-gray-200 font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
            ullam consequuntur voluptate eligendi, blanditiis ab quae maiores!
          </p>
          <div className="mt-6 flex items-center space-x-2">
            <div className="bg-blue-600 rounded-full p-2">
              <FaFacebookF className="text-white" />
            </div>
            <div className="bg-pink-500 rounded-full p-2">
              <FaInstagram className="text-white" />
            </div>
            <div className="bg-blue-400 rounded-full p-2">
              <FaTwitter className="text-white" />
            </div>
            <div className="bg-red-600 rounded-full p-2">
              <FaYoutube className="text-white" />
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <h1 className="text-white font-bold text-lg">Company</h1>
          <p className="footer__link">About</p>
          <p className="footer__link">News & Press</p>
          <p className="footer__link">Our Customers</p>
          <p className="footer__link">Leadership</p>
          <p className="footer__link">Careers</p>
        </div>
        <div className="space-y-5">
          <h1 className="text-white font-bold text-lg">Resources</h1>
          <p className="footer__link">Blog</p>
          <p className="footer__link">Webinar & Events</p>
          <p className="footer__link">Our Customers</p>
          <p className="footer__link">Podcast</p>
          <p className="footer__link">E-book & Guides</p>
        </div>
        <div className="space-y-5">
          <h1 className="text-white font-bold text-lg">Contact Us</h1>
          <div>
            <p className="text-white text-sm">Our Mobile Number</p>
            <p className="text-yellow-300 text-base font-bold mt-1">
              +1893842134923
            </p>
          </div>
          <div>
            <p className="text-white text-sm">Our Email</p>
            <p className="text-yellow-300 text-base font-bold mt-1">
              example@gmail.com
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p className="text-center text-white md:text-left">
          Copyright © 2025. All rights reserved
        </p>
        <div className="flex items-center text-white space-x-4 mt-4 md:mt-0">
          <span>Social : </span>
          <span className="hover:text-gray-500 text-white">
            <FaFacebook className="text-sm" />
          </span>
          <span className="hover:text-gray-500 text-white">
            <FaTwitter className="text-sm" />
          </span>
          <span className="hover:text-gray-500 text-white">
            <FaDribbble className="text-sm" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
