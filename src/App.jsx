import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const ProductDetail = lazy(() => import('./components/ProductDetail'));
const Checkout = lazy(() => import('./components/Checkout'));
const NotFound = lazy(() => import('./components/NotFound'));

// Home component for the "/" route without the search bar
const Home = () => (
  <div className="home">
    <ProductList showSearchBar={false} />
  </div>
);

function App() {
  return (
    <div className="app">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route without search bar */}
          <Route path="/products" element={<ProductList showSearchBar={true} />} /> {/* ProductList with search bar */}
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
