import React from 'react'

function Box() {
    return (
        <div className='flex flex-col w-9/1 rounded p-5 bg-white'>
                
            <h1 className='text-[65px] text-[#02073E] font-black'>Built Your Buisness with a Website</h1>
            <div className="relative">
                <input type="text" className='border-1 border-[#DCE5EA] p-4 w-full' placeholder='Your Domain Name' name="domain" />
                <div className="absolute right-0 top-0 h-full flex items-center">
                    <select name="" className='p-4 font-bold' id="" >
                        <option value=".COM">.COM</option>
                        <option value=".DZ">.DZ</option>
                        <option value=".FR">.FR</option>
                        <option value=".PL">.PL</option>
                    </select>
                </div>
            </div>
            
            <a className='m-2  text-white p-4 text-center bg-[#5B2B9D] rounded font-black'>Start For Free</a>
            <p className='text-center '>No Credit Card Required</p>
        </div>
    )
}

export default Box
