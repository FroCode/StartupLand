import React from 'react'
import NavBar from './NavBar'
import Box from './Box'
import header from '../Assets/header.svg'
function Header() {
  return (
    <div className='w-[100%] bg-[#5B2B9D] h-screen' >
      <div className="container xl m-auto">
      <NavBar/>
      <div className="flex w-[90%] mt-20 m-auto">
        <Box/>
        <img src={header} alt="" srcset="" />
      </div>
      </div>
      
    </div>
  )
}

export default Header
