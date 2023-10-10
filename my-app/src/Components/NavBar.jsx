import React from 'react'
import { lock, logo } from '../Assets/icons'
function NavBar() {
    return (
        <div className=''>
            <div className="NavBar flex text-white p-5"> 
                
                <div className="logo flex ml-20">{logo} <h2 className='mt-1 ml-5 text-[20px]	font-bold'>StartupLand</h2></div>
                <div className="shrink w- h-1 ml-auto">
                <ul className='flex m-2 list-none'>
                    <li className='mr-4  list-none '>Home  </li>
                    <li className='mr-4 '>Adversite </li>
                    <li className='mr-4 '>Supports</li>
                    <li className='mr-4 '>About</li>
                </ul>
                </div>
                <div className="left-login flex ml-auto">
                <a className='m-2 font-bold flex p-2 text-base	'> <i className='mr-3 mt-0.5 '>{lock}</i> Login</a>
               <a className='m-2  bg-white p-3 text-[#5B2B9D] rounded font-black'>Join Community</a> 
                </div>
            </div>
        </div>
    )
}

export default NavBar
