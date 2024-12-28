import React from 'react';
import { useSelector } from 'react-redux';
import './Checkout.css';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Calculate average delivery time in months
  const totalDeliveryMonths = cartItems.reduce((sum, item) => {
    const months = parseInt(item.shippingInformation.match(/\d+/)[0], 10);
    return sum + months;
  }, 0);
  const averageDeliveryMonths = totalDeliveryMonths / cartItems.length;
  
  // Set delivery date based on average shipping time
  const currentDate = new Date();
  const estimatedDeliveryDate = new Date(currentDate);
  estimatedDeliveryDate.setMonth(currentDate.getMonth() + averageDeliveryMonths);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="checkout-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="checkout-item">
              <h3>{item.title}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <div className="checkout-summary">
        <p><strong>Total Price:</strong> ${totalPrice.toFixed(2)}</p>
        <p><strong>Estimated Delivery Date:</strong> {estimatedDeliveryDate.toDateString()}</p>
      </div>
    </div>
  );
};

export default Checkout;
