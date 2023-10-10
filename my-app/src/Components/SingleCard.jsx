import React from 'react';

const PricingCard = ({ title, price, features, par, key , num }) => {

  return (
    <div className={`bg-white rounded-lg ml-2 p-10 mx-4 hover:border hover:shadow-xl  ${num === 1  ?  "  shadow-lg  " : ""} `}>
      <h2 className="text-2xl font-bold mb-5">{title}</h2>
      <p className='pb-5'>{par}</p>
      <p className="text-2xl font-bold  mb-10">${price}</p>
      <ul className="text-gray-600">
      <a className={`m-2   p-4 pr-7 pl-7  rounded font-black ${num !== 1 ? "bg-white text-[#5B2B9D] border ": "bg-[#5B2B9D] text-white"}`}>Start Free Trial</a> 
        {features.map((feature, index) => (
          <li key={index} className={`mb-2 flex items-center mt-8`}>
            <svg
              className="w-5 h-5 fill-current text-green-500 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
              
            </svg>
            
            {feature}
            
          </li>
          
        ))}
        
      </ul>
      
    </div>
  );
};

export default PricingCard;
