import React from 'react'
import mockup from '../Assets/laptop.svg'
import { arrowRight } from '../Assets/icons'
function Mockup() {
    return (
        <div className='  container  m-auto pb-20'>
        <div className='flex flex-row  gap-10'>
            <div className="leftImage">
                <img src={mockup} alt="" srcset="" width="100%" />
            </div>
            <div className="mockupTexts">
                <h2 className='text-[#5B2B9D] text-lg  font-bold '>Website content builder</h2>
                <h4 className='text-[#0F2137] font-bold text-4xl pb-5 pt-5 '>Meet our premium features <br />
                    that will make you wow</h4>
                    <p className='pb-5 leading-10'>Build an incredible workplace and grow your business <br/>with Gusto’s all-in-one platform with amazing contents.</p>
                    <div className="texts  shadow-xl mb-5 mt-5 p-4 pl-8 w-[70%]  ">
                        <h2 className='font-bold mb-2 text-[#0F2137]'>Organize your project content</h2>
                        <p >Get your website ads tests delivered at let collect sample from the victory of the managments that supplies best design system which guidelines ever with multiple features.</p>

                    </div>
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

export default Mockup
