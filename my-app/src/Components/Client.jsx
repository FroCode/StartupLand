import React from 'react'
import women from "../Assets/women.svg"
import { arrowRight } from '../Assets/icons'
function Client() {
  return (
    <div className="client  bg-[#F0F3F8] ">
      <div className=' flex flex-row  gap-10'>
          <div className='  container flex flex-row  m-auto'>
            <div className="leftImage ">
                <img src={women} alt="" srcset="" width="80%" className='relative bottom-20' />
            </div>
            <div className="mockupTexts w-[50%]">
                <h4 className='text-[#0F2137] font-bold text-4xl pb-5 pt-5 '>Best host I've had in 10 years. Smooth migration, no stress, and friendly support one click away. I'm very happy and recommend their services</h4>
                <p className='pb-5 leading-10'>Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever.</p>
                <h4 className='text-[#0F2137] font-bold text-sm pb-5 pt-5 '>Melina Pettendorfer, CEO of Uber</h4>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Client
