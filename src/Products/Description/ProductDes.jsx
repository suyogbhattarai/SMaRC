import React from 'react';
import './productDes.css'; // Importing the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product, handleCrossClick, handleInspectClick}) => {
  return (
    <div className="product-card">
      {/* Close button positioned at the top-right corner */}
      <FontAwesomeIcon icon={faClose} className="product-close-button" onClick={handleCrossClick}/>
      <h2 className="product-name">{product.name}</h2>
      <p className="product-type">{product.type}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <p className="product-description">{product.description}</p>
      <div className="buttons-container">
      <button className="product-buy-button">Buy Now</button>
      <button className="product-inspect-button" onClick={handleInspectClick}>Inspect</button>
      </div>
    </div>
  );
};

const ProductDes = ({ name, type, description, price, handleCrossClick, handleInspectClick}) => {
  const product = {
    name: name,
    type: type,
    description: description,
    price: price,
  };

  return (
    <div className="product-des-container">
      <ProductCard product={product} handleCrossClick={handleCrossClick} handleInspectClick={handleInspectClick} />
    </div>
  );
};

export default ProductDes;
