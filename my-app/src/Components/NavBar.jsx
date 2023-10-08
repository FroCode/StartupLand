import React from 'react'

function NavBar() {
    return (
        <div className=''>
            <div className="NavBar flex text-white "> 
                
                <div className="logo flex-none">Logo</div>
                <div className="list-item shrink w- h-1 ml-auto">
                <ul className='flex m-2  '>
                    <li className='mr-4 font-semibold'>.COM  $15    </li>
                    <li className='mr-4 font-semibold'>.NET  $14    </li>
                    <li className='mr-4 font-semibold'>.ORG  $19</li>
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
