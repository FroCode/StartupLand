import React from 'react'
import img from '../Assets/img.svg'
import { arrowRight } from '../Assets/icons'
function Ultimate() {
    return (
        <div className='  container  m-auto pb-20'>
        <div className='flex flex-row  gap-10'>
            <div className="leftImage">
                <img src={img} alt="" srcset="" width="100%" />
            </div>
            <div className="mockupTexts">
                <h4 className='text-[#0F2137] font-bold text-4xl pb-5 pt-5 '>Customer support is our main priority with their hundred percent satisfaction. <br />
                    that will make you wow</h4>
                    <p className='pb-5 leading-10'>Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever.</p>
                    
                    <div className="containButtons rtl w-[70%]">
                        <div className="singleButton font-bold flex justify-between text-[#0F2137] text-lg p-5 rounded bg-[#F6F8FB] ">
                        Collaborate your multiple team support easily  <i className='p-2'>{arrowRight}</i>
                        </div>
                        <div className="singleButton font-bold relative  justify-between flex text-[#0F2137] mt-4 rounded bg-[#F6F8FB] text-lg  p-5">
                        Build your team's knowledge base system <i className='p-2  '>{arrowRight}</i>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    )
}

export default Ultimate
