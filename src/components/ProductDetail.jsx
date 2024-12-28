import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading product details.</p>;

  return (
    <div className="product-detail">
      <div className="row">
        <div className="product-images">
          {product.images && (
            <div className="image-carousel">
              <button onClick={handlePreviousImage} className="carousel-arrow left-arrow">
                &lt;
              </button>
              <img
                src={product.images[currentImageIndex]}
                alt={`${product.title} - ${currentImageIndex + 1}`}
                className="carousel-image"
              />
              <button onClick={handleNextImage} className="carousel-arrow right-arrow">
                &gt;
              </button>
            </div>
          )}
        </div>
        <div className="descript">
          <h2>{product.title}</h2>
          <p className="price">Price: ${product.price}</p>
          <p>Discount: {product.discountPercentage}%</p>
          <p className="description">{product.description}</p>
          <p>Category: {product.category}</p>
          <p>Stock: {product.stock} ({product.availabilityStatus || 'In Stock'})</p>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>SKU:</strong> {product.sku}</p>
          <p><strong>Weight:</strong> {product.weight} grams</p>
          <p><strong>Dimensions:</strong> {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm</p>
          <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
          <p><strong>Shipping:</strong> {product.shippingInformation}</p>
          <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
        </div>
      </div>

      <div className="reviews">
        <h3>Customer Reviews</h3>
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map((review, index) => (
            <div key={index} className="review-card">
              <p><strong>{review.reviewerName}</strong> ({review.rating} stars)</p>
              <p>{review.comment}</p>
              <p className="review-date">{new Date(review.date).toLocaleDateString()}</p>
            </div>
          ))
        ) : (
          <p>No reviews available for this product.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
