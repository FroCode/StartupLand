import React from 'react'
import {titles , paragraphIcons } from '../Assets/icons'
import AddCircleIcon from '@mui/icons-material/AddCircle';
function Features() {
  return (
    <div className='  container  m-auto pb-20'>
        
        
        <div className="container m-auto pb-20">
            <div className="texts text-center pt-20">
                <h3 className="text-[#5B2B9D] mb-5 font-bold text-lg">
                    Ideal solutions for you
                </h3>
                <h3 className="text-[#0F2137] font-black text-[16px] text-xl">
                    Didn’t find what you were looking for?
                </h3>
            </div>



            <div className="services pt-10 pb-10">
                <div className="grid md:grid-cols-3 gap-4 m-auto">
                {titles.map((title)=>{
            return(
                <div className="text-center p-5 rounded ">
                        <h3 className="text-[#0F2137] p-5 font-black text-[16px] text-base">
                            {title} <br/> <i>{<AddCircleIcon/>}</i>
                        </h3>
                        <h3 className=" pt-3 font-black text-[16px] text-base">
                        A free domain name for life now included with every shared plan on all billing cycles.
                        </h3>
                        
                    </div>
            )
        })}
                    
                   </div>
            </div>
        </div>
    </div>
  )
}

export default Features
