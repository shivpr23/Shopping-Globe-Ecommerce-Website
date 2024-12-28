import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <h1>ShoppyGlobe</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Product List</Link> {/* New Product List Link */}
        <Link to="/checkout">Checkout</Link> {/* New Checkout Link */}
        <Link to="/cart" className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
          {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
