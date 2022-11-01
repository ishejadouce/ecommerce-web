import React from 'react'

const addProduct = () => {
    return (
        <>
            <div className='bg-none bg-slate-50'>
                <img className='bg-none w-[830px] h-[230px]' src={img7} alt="img7" />
                <p className='bg-none text-gray-400 pl-10 pt-1'>Ginger Bread</p>
                <div className='flex space-x-20 ml-10  mt-2 bg-none'>
                    <h1 className='bg-none'>$52.2 USD</h1>
                    <button className='bg-none bg-cyan-300 w-[90px] rounded-md'>+ cart</button>
                </div>
            </div>
        </>
    )
}

export default addProduct