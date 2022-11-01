import React from 'react'

const Nav = () => {

  return (
    <>
      <div className='Nav-bar flex bg-slate-50 drop-shadow-lg bg-none'>
        <h1 className='logo text-2xl pl-[70px] pt-10 text-gray-600 bg-none'>e-Buy</h1>
        <ul className=' ul inline-flex space-x-20 ml-80 pt-10 text-gray-600 bg-none'>
          <li className='bg-none cursor-pointer'>Home</li>
          <li className='bg-none cursor-pointer'>Categories</li>
          <li className='bg-none cursor-pointer'>Shopping List</li>
        </ul>
        <button className=' myBtn btn-add text-white p-4 rounded-md mt-9 cursor-pointer mb-5 text-1xl ml-80 bg-none float-right bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-400'>Add Product</button>
      </div>0
    </>
  )
}

export default Nav