import React from 'react'
import { logo } from '../Assets/icons'
function NavBar() {
    return (
        <div className=''>
            <div className="NavBar flex text-white p-5"> 
                
                <div className="logo flex ml-20">{logo} <h2 className='mt-1 ml-5 text-[20px]	font-bold'>StartupLand</h2></div>
                <div className="list-item shrink w- h-1 ml-auto">
                <ul className='flex m-2 list-none '>
                    <li className='mr-4 font-semibold list-none '>HOME  </li>
                    <li className='mr-4 font-semibold'>ADVERSITES </li>
                    <li className='mr-4 font-semibold'>SUPPORT</li>
                </ul>
                </div>
                <div className="left-login ml-auto">
                <a className='m-2 font-bold'>See Pricing</a>
                <a className='m-2  bg-white p-3 text-[#87A9FF] font-bold'>Join Community</a>
                </div>
            </div>
        </div>
    )
}

export default NavBar
