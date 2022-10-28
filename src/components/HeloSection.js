import React from 'react'
import img from '../Img/one.png'

const HeloSection = () => {

  return (
    <>
      <div className='main-container bg-none flex space-x-20'>
        <div className='left-container bg-none mt-40 ml-20 w-[20%]'>
          <h1 className='bg-none text-5xl font-extrabold leading-40'>Every Purchase will be made with Pleasure</h1>
          <p className='bg-none pt-5 text-gray-600'>Buyind and Selling of goods or services using internet.</p>
          <button className='bg-gradient-to-r from-cyan-500 to-blue-500 p-3 bg-none mt-10 rounded-full pl-[20px]'>Start Shopping<button className='bg-slate-50 text-2xl text-cyan-500 rounded-full p-1 cursor-pointer ml-5 w-[40px] height-[5px]'> > </button></button>
        </div>

        <div className='mr-8 bg-none w-[8%]'>

        </div>

        <div className='bg-none w-[50%] mt-10 float-right h-[50vh]'>
          <img className='bg-none h-[80vh]' src={img} alt='img' />
        </div>
      </div>



    </>
  )
}

export default HeloSection