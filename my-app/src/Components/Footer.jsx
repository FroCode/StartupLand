import React from 'react';

function Footer() {
  return (
    <div className='container rounded-2xl m-auto pt-5 bg-[#183656]' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2 className='text-white p-10 text-[40px] font-bold'>Do you have any question? <br/> Feel free to contact us</h2>
      <a className='m-2 bg-white p-2 text-[25px] text-[#183656] rounded font-black custom-button'>Contact Us Now </a>
    </div>
  );
}

export default Footer;
