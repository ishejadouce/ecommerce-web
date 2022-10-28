import './App.css';
import Nav from './components/Nav';
import HeloSection from './components/HeloSection';
import SearchProductsByLocation from './components/SearchProductsByLocation';
import Products from './components/Products';

function App() {

  return (
    <>
      <Nav />
      <HeloSection />
      <SearchProductsByLocation />
      <Products />
    </>
  );
}

export default App;
