import React from 'react'
import Cards from './Cards'
function Pricing() {
    return (
        <div>

            <div className='  container  m-auto pb-20'>


                <div className="container m-auto pb-20">
                    <div className="texts text-center pt-20">
                        <h3 className="text-[#5B2B9D] mb-5 font-bold text-lg">
                        Deal for your business
                        </h3>
                        <h3 className="text-[#0F2137] font-black text-[16px] text-xl">
                        Meet our pricing plan that suit you
                        </h3>
                    </div>
                </div>
                <Cards/>
            </div>
        </div>
    )
}

export default Pricing
