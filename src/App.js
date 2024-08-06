import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { products } from './services/mockAPI';

function App() {
  return (
    <div className="App">
        <Header />
        <main className="container mx-auto p-4">
        <ProductList products={products} />
      </main>
    </div>
  );
}

export default App;
