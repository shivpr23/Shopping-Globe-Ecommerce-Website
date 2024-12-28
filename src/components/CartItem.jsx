import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../redux/cartSlice';
import './CartItem.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>

      {/* Quantity modification buttons */}
      <div className="quantity-controls">
        <button onClick={() => dispatch(decrementQuantity(item.id))}>–</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
      </div>

      <button onClick={() => dispatch(removeFromCart(item.id))} className="remove-button">
        Remove from Cart
      </button>
    </div>
  );
};

export default CartItem;
