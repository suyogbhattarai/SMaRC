import React from 'react';
import './productDes.css'; // Importing the CSS file

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h2 className="product-name">{product.name}</h2>
      <p className="product-type">{product.type}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <p className="product-description">{product.description}</p>
      <button className="product-buy-button">Buy Now</button>
    </div>
  );
};

const ProductDes = () => {
  const product = {
    name: "Lamp",
    type: "Electronics",
    description: "This is a product you can use for convinience and emergencies",
    price: 199.99,
  };

  return (
    <div className="product-des-container">
      <ProductCard product={product} />
    </div>
  );
};

export default ProductDes;
  