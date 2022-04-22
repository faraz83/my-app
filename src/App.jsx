import React from 'react';
import About from './component/about/About';
import Contact from './component/contact/Contact';
import Intro from './component/intro/Intro';
import ProductList from './component/productList/ProductList';

function App() {
  return (
    <div>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  );
}

export default App;