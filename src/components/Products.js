import React from 'react'
// import img1 from '../Img/cake.jpg'
// import img2 from '../Img/blue bellies.jpg'
// import img3 from '../Img/gingerbread.jpg'
// import img4 from '../Img/strawberry.jpg'
// import img5 from '../Img/cream.jpg'
// import img6 from '../Img/cookies.jpg'
// import img7 from '../Img/coffee.jpg'
// import img8 from '../Img/pig.jpg'

const Products = (props) => {

    console.log(props.products)

    return (
        <>
            <div className='product-container bg-none flex space-x-20 mx-8 mt-10'>


                {props.products.map((product) => {
                    return (
                        <div className='bg-none bg-slate-50'>
                            <img className='bg-none' src={product.Image} alt="img4" />
                            <p className='bg-none text-gray-400 pl-10 pt-1'>{product.Title}</p>
                            <div className='flex space-x-20 ml-10  mt-2 bg-none'>
                                <h1 className='bg-none'>{product.Price}</h1>
                                <button className='bg-none bg-cyan-300 w-[90px] rounded-md '>+ cart</button>
                            </div>
                        </div>
                    )

                })}



            </div>


            <div className='bg-none mt-8 ml-[35%]'>
                <button className='bg-none w-[400px] p-5 rounded-full bg-gradient-to-r from-slate-300 to-blue-50'>Next Page > </button>

            </div>
        </>
    )
}

export default Products