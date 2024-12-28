import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './Cart.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
