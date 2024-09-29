import { Canvas } from '@react-three/fiber';
import React, { useState, useEffect, useRef } from 'react'; 
import './products.css';
import Pedestal from './Pedestal/Pedestal';
import Light from '../Light/Light';
import ProductDes from './Description/ProductDes';
import Lamp from '../Lamp/Lamp';
import { OrbitControls, Html } from '@react-three/drei';
import DeskNamePlate from './Description/DeskNamePlate';
import { gsap } from 'gsap';

const Products = () => {
  const [showCard, setShowCard] = useState(false);
  const cardRef = useRef();

  const handleDeskNamePlateClick = () => {
    setShowCard((prev) => !prev);
    console.log("DeskNamePlate clicked");
  };

  useEffect(() => {
    if (showCard && cardRef.current) {
      // Animate card in with scaling and opacity
      gsap.fromTo(cardRef.current, 
        { opacity: 0, scale: 0.5, y: -20 }, 
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "bounce.out" }
      );
    }
  }, [showCard]);

  return (
    <>  
      <Light />
      <Pedestal position={[-0.05, -2.8, 3]} scale={[0.2, 0.2, 0.2]} />
      <Lamp position={[0, -0.52, 3]} scale={[0.1, 0.1, 0.1]} />
      
      {showCard && (
        <Html 
          ref={cardRef}
          transform
          distanceFactor={10}
          position={[17, 1, -10]}
          rotation={[0, 0, 0]}
        >
          <ProductDes />
        </Html>
      )}
      
      <DeskNamePlate 
        position={[0, -0.42, 3.8]} 
        scale={[0.5 , 0.5, 0.5]} 
        name='Lamp' 
        onClick={handleDeskNamePlateClick} 
      />
    </>
  );
}

export default Products;
