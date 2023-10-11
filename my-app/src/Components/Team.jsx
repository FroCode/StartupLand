import React from 'react'
import teamIng from "../Assets/team.svg"
function Team() {
    return (
        <div className='container   m-auto pt-10'>
            <div className="mockupTexts m-auto text-center w-[50%] ">
                <h4 className='text-[#0F2137] font-bold text-4xl pb-5 pt-5 '>Meet our support team who always
                    work hardly behind the scenes</h4>
                <p className='pb-5 leading-10'>Focus only on the meaning, we take care of the design. As soon as the
                    meeting end you can export in one click into your preferred.</p>
                <h4 className='text-[#0F2137] font-bold text-sm pb-5 pt-5 '>Melina Pettendorfer, CEO of Uber</h4>
            </div>
            <div className="leftImage m-auto w-[full]">
                <img src={teamIng} alt="" srcset="" className='m-auto' width="80%"  />
            </div>
        </div>
    )
}

export default Team
