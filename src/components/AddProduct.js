import React from 'react'
import { Link } from 'react-router-dom'

const AddProduct = () => {
  return (
    <>
    <div className='bg-none'>
    <div className='bg-none bg-gradient-to-b from-green-50 to-pink-200 p-16 h-screen'>
        
     <div className="bg-none max-w-md mx-auto">
        <div className='bg-none bg-white p-16 rounded-2xl drop-shadow-xl'>
           <p className='bg-none'>Add Product</p>

           <form className='bg-none h-[40vh]'>
                <p className='bg-none'>Product Image</p>
                <input type="file" className="bg-none w-full py-2 px-3 rounded focus:outline my-2"></input>

                <p className='bg-none'>Product Name</p>
                <input type="text" className="bg-none w-full py-2 px-3 rounded focus:outline my-2"></input>

                <p className='bg-none'> Product Price</p>
                <input type="text" className="bg-none w-full py-2 px-3 rounded focus:outline my-2"></input>

                <button className='bg-gradient-to-r from-cyan-500 to-blue-500 p-2  bg-none rounded-md w-[100px] mt-2'>Add</button>

           </form>

           <div className='bg-none flex space-x-4'>
            <Link to = '/' className='bg-none'><div className='bg-none text-xs'>Back to Home</div></Link>
            
        </div>
        </div>
     </div>


        </div>
    </div>
    </>
  )
}

export default AddProduct