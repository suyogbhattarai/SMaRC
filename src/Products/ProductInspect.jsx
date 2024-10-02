import React from 'react';
import { OrbitControls } from '@react-three/drei';
import './productInspect.css'; // Import your CSS file for styling

const ProductInspect = ({ model }) => {
  return (
    <>
      {/* Render the passed model */}
      {React.cloneElement(model, { position: [0, 0, 0] })}
      <OrbitControls enableZoom={true} /> {/* Orbit Controls */}
    </>
  );
};

export default ProductInspect;
