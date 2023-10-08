import React from 'react'
import { icon , arrowLeft } from '../Assets/icons';
function Topper() {
  console.log(icon);
  return (
    <div className='container-me font-medium bg-[#080111] font-medium text-white flex justify-center'>
      <div className="text-container m-auto p-1 flex flex-row">
        <a className='m-2'>{icon}</a>
        <h3 className='m-2'>Cyber monday sale begin, just grave the hot pricing</h3>
        <ul className='flex m-2 '>
          <li className='mr-4 font-semibold'>.COM  $15    </li>
          <li className='mr-4 font-semibold'>.NET  $14    </li>
          <li className='mr-4 font-semibold'>.ORG  $19</li>
        </ul>
        <a className='m-2 text-[#87A9FF] font-bold flex'>See Pricing <i className='p-2'>{arrowLeft}</i></a>
      </div>
    </div>
  )
}

export default Topper;
