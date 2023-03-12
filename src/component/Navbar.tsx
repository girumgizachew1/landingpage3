import React from 'react'
function Navbar() {
  return (
    <>
    <div className='w-full h-14 flex flex-row justify-between px-8 py-4 fixed z-50  blur-xs2'></div>
    <div className='w-full h-14 flex flex-row justify-between px-8 py-4 fixed z-50'>
        <div className=''>
          <img src="/logo2.png " className='w-10 h-10'  alt="" />  
        </div>
        <div className='space-x-14 ml-32 text-white font-serif font-light text-sm' style={{ fontFamily: 'PT Sans !important' }}>
            <a>HOME</a>
            <a>ABOUT US</a>  
            <a className='text-gray-500 ' >CONTACT US</a>
            <a className='text-gray-500' >LOCATION</a>    
       </div>
        <div className='text-black space-x-6 text-sm' style={{ fontFamily: 'Nosifer !important' }}  >  
            <button className='px-3 py-1 rounded-xl text-sm bg-gray-900 text-white' style={{ fontFamily: 'Nosifer !important' }} >| SEARCH </button>
            <a>pro</a>  
       </div>
    </div>
    </>
  )
}

export default Navbar