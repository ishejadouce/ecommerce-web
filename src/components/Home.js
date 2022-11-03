import React from 'react'
// import img1 from '../Img/cake.jpg';
// import img2 from '../Img/cream.jpg';
// import img3 from '../Img/gingerbread.jpg';
// import img4 from '../Img/strawberry.jpg';
import HeloSection from './HeloSection'
import Nav from './Nav'
import SearchProductsByLocation from './SearchProductsByLocation'
import { useState } from 'react';
import Products from './Products'

const Home = (products) => {

  // const [products, setProducts] = useState([
  //   {
  //     Image: img1,
  //     Title: 'Cakes',
  //     Price: '$25 USD'
  //   },
  //   {
  //     Image: img2,
  //     Title: 'Ice cream',
  //     Price: '$25 USD'
  //   },
  //   {
  //     Image: img3,
  //     Title: 'Ginger Bread',
  //     Price: '$25 USD'
  //   },
  //   {
  //     Image: img4,
  //     Title: 'Strawberry',
  //     Price: '$50 USD'
  //   }
  // ])


  return (
    <>
    
    <HeloSection />
    <SearchProductsByLocation />
    <Products products={Products} />
    
    </>
  )
}

export default Home