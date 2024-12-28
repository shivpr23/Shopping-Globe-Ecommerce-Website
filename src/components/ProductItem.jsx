import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import './ProductItem.css';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-item">
      <img src={product.thumbnail} alt={product.title} className="product-thumbnail" />
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <Link to={`/product/${product.id}`} className="details-link">View Details</Link>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
