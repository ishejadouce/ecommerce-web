import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddProduct from './components/AddProduct';
import Category from './components/Category';
import ShoppingList from './components/ShoppingList';
import Home from './components/Home';
import Nav from './components/Nav';
import { useState } from 'react';
function App() {

 const [products, setProducts] = useState([])


  return (
    <>

      {/* <Home /> */}
      
      <Nav />
          <Routes>
            <Route path='/' element={< Home />} />
            <Route path='/category' element={< Category />} />
            <Route path='/shoppinglist' element={< ShoppingList />} />
            <Route path='/add' element={< AddProduct setProducts={setProducts}  products = {products} />} />
          </Routes>



    </>
  );
}

export default App;
