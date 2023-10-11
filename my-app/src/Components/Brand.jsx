import React from 'react';
import {logo } from '../Assets/icons';
const Footer = () => {
  return (
    <footer className=" font-bold py-10">
      <div className="container mx-auto  p-7 rounded-3xl flex flex-wrap pl-10">
        <div className="w-full md:w-1/4">
        <div className="logo flex mb-5 mt-20">{logo} <h2 className='mt-1 ml-5 text-[20px]	font-bold'>StartupLand</h2></div>
          <p className='mb-4'>Our Information</p>
          <p className='mb-4'>My Account</p>
          <p className='mb-4'>Connect</p>
          
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-2xl  mb-10">About Us</h3>
          <p className='mb-4'>Our Information</p>
          <p className='mb-4'>My Account</p>
          <p className='mb-4'>Connect</p>
          <p className='mb-4'>Costumer Service</p>
          <p className='mb-4'>Site Map</p>
          <p className='mb-4'>Press Inquiries</p>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-2xl mb-10">Terms of Use | Privacy</h3>
          <p className='mb-4'>Support Center</p>
          <p className='mb-4'>Customer Support</p>
          <p className='mb-4'>About Us</p>
          <p className='mb-4'>Copyright</p>
          <p className='mb-4'>Return Policy</p>
          <p className='mb-4'>Privacy Policy</p>
          <p className='mb-4'>Terms & Conditions</p>
          
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-2xl mb-3">Social Media</h3>
          <ul className="space-y-4">
        {/* Facebook */}
        <li>
          <a href="https://www.facebook.com/" className="flex items-center text-blue-600 hover:text-blue-800" target="_blank" rel="noopener">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h2v10H4zm3-10v10m5-10v10m5-10v5h-5" />
            </svg>
            Facebook
          </a>
        </li>

        {/* Instagram */}
        <li>
          <a href="https://www.instagram.com/" className="flex items-center text-pink-600 hover:text-pink-800" target="_blank" rel="noopener">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 6.96v10.08M16 5.96v13.08M11 6.96v10.08M6 5.96v13.08" />
            </svg>
            Instagram
          </a>
        </li>

        {/* Twitter */}
        <li>
          <a href="https://twitter.com/" className="flex items-center text-blue-400 hover:text-blue-600" target="_blank" rel="noopener">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 2L11 13.74l-3.85-3.87L2 12" />
            </svg>
            Twitter
          </a>
        </li>

        {/* LinkedIn */}
        <li>
          <a href="https://www.linkedin.com/" className="flex items-center text-indigo-600 hover:text-indigo-800" target="_blank" rel="noopener">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 10V7a5 5 0 00-5-5H7a5 5 0 00-5 5v12a5 5 0 005 5h5a5 5 0 005-5v-3" />
            </svg>
            LinkedIn
          </a>
        </li>
      </ul>
        </div>
        
      </div>
      <div className="text-center mt-8">
        &copy; FroCode 2023
      </div>
    </footer>
  );
};

export default Footer;
