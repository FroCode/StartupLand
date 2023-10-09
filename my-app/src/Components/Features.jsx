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
                <div className="text-center p-5 rounded border">
                        <h3 className="text-[#0F2137] p-5 font-black text-[16px] text-base">
                            {title} <br/> {<AddCircleIcon/>}
                        </h3>
                        <h3 className="text-[#7B72F0] pt-3 font-black text-[16px] text-base">
                            $0.63/mo {paragraphIcons.map((icon)=>{
                                return(
                                    <p className='p-2'>{icon}</p>
                                )
                })}
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
