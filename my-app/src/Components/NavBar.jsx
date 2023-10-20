import React from 'react';
import { lock, logo, dehazeIcon } from '../Assets/icons';


function NavBar() {
  return (
    <div className="lg:container  m-auto">
      <div className="NavBar sm: sm:w-screen lg:w-[100%] h-[100%] sm:z-50 top-0 sm:bg-black  lg:bg-transparent sm:fixed  lg:static   flex text-white p-5">
        <div className="logo flex ml-20">
          {logo}
          <h2 className="mt-1 ml-5 text-[20px] font-bold">StartupLand</h2>
        </div>
        <div className="shrink h-1 ml-auto">
          <ul className="sm:mt-20 text-center  lg:mt-0 sm:grid lg:flex m-2 list-none">
            <li className="mr-4 border-b-2 sm:p-5 lg:mb-0   sm:block sm:mb-5">Home</li>
            <li className="mr-4  border-b-2 sm:p-5 lg:mb-0   sm:block sm:mb-5 ">Support</li>
            <li className="mr-4  border-b-2 sm:p-5 lg:mb-0   sm:block sm:mb-5">Advertise</li>
            <li className="mr-4  border-b-2 sm:p-5 lg:mb-0   sm:block sm:mb-5">About</li>
          </ul>
        </div>
        <div className="left-login lg:flex ml-auto">
          <a className="m-2 font-bold  sm:border lg:border-none  rounded  sm:mb-5 flex p-2 text-base">
            <i className="mr-3  mt-0.5 ">{lock}</i> Login
          </a>
          <a className="m-2 bg-white p-3 text-[#5B2B9D] rounded font-black">Join Community</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
