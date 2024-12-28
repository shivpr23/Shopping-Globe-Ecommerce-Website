import React, { useState } from 'react';
import ProductItem from './ProductItem';
import { useFetchProducts } from '../hooks/useFetchProducts';
import './ProductList.css';

const ProductList = ({ showSearchBar }) => {
  const { products, loading, error } = useFetchProducts();
  const [searchCategory, setSearchCategory] = useState("");

  const filteredProducts = products.filter((product) =>
    product.category.toLowerCase().includes(searchCategory.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    // No additional actions needed here since filteredProducts is updated automatically
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products.</p>;

  return (
    <div className="product-list-container">
      {showSearchBar && (
        <form onSubmit={handleSearch} className="search-bar-container">
          <input
            type="text"
            placeholder="Search by category..."
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
            className="search-bar"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      )}
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
