import React from 'react'
import NavBar from './NavBar'
import Box from './Box'
function Header() {
  return (
    <div className='w-[100%] bg-[#5B2B9D] h-screen' >
      <div className="container xl m-auto">
      <NavBar/>
      <div className="flex w-[90%] mt-20 m-auto">
        <Box/>
        <Box/>
      </div>
      </div>
      
    </div>
  )
}

export default Header
