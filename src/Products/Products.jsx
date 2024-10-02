import { Canvas } from '@react-three/fiber';
import React, { useState, useRef } from 'react'; 
import './products.css';
import Clock from '../Clock/Clock';
import Light from '../Light/Light';
import ProductDes from './Description/ProductDes';
import Lamp from '../Lamp/Lamp';
import DeskNamePlate from './Description/DeskNamePlate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Html, OrbitControls } from '@react-three/drei';

const Products = () => {
  const [showCard, setShowCard] = useState(false);
  // const [showInspect, setShowInspect] = useState(false);
  const [orbitEnabled,setOrbitEnabled]=useState(false);
  const [currentModelIndex, setCurrentModelIndex] = useState(0); // Track current model
  const cardRef = useRef();
  
  // Define detailed information for each model
  const models = [
    {
      component: <Clock position={[0, -0.4, 3.4]} scale={[0.1, 0.1, 0.1]} />,
      name: "Clock",
      type: "Home Appliance",
      description: "A classic clock to keep track of time.",
      price: 49.99
    },
    {
      component: <Lamp position={[0, -0.35, 3.5]} scale={[0.1, 0.1, 0.1]} />,
      name: "Lamp",
      type: "Electronics",
      description: "This is a product you can use for convenience and emergencies.",
      price: 199.99
    },
  ];

  const handleDeskNamePlateClick = () => {
    setShowCard((prev) => !prev);
    console.log("DeskNamePlate clicked");
  };

  const handleInspectClick = ()=>{
      setOrbitEnabled((prev)=>!prev);
  }

  const handleCrossClick = () => {
    setShowCard((prev) => !prev);
  };

  const handleLeftClick = () => {
    setCurrentModelIndex((prevIndex) =>
      prevIndex === 0 ? models.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setCurrentModelIndex((prevIndex) =>
      prevIndex === models.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>  
      <Light />
      {models[currentModelIndex].component}

      {showCard && (
        <Html ref={cardRef} transform distanceFactor={10} position={[17, 1, -10]}>
          <ProductDes 
            name={models[currentModelIndex].name} 
            type={models[currentModelIndex].type}
            description={models[currentModelIndex].description}
            price={models[currentModelIndex].price}
            handleCrossClick={handleCrossClick}
            handleInspectClick={handleInspectClick}
          />
        </Html>
      )}

      <Html transform distanceFactor={5} position={[-2.5, 0.1, 0]}>
        <button className='prevBtn' onClick={handleLeftClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </Html>
      
      <Html transform distanceFactor={5} position={[2.5, 0.1, 0]}>
        <button className='nextBtn' onClick={handleRightClick}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </Html> 
      
      <DeskNamePlate 
        position={[0, -0.42, 3.5]} 
        scale={[0.5, 0.5, 0.5]} 
        name={models[currentModelIndex].name} 
        onClick={handleDeskNamePlateClick}  
      />

    <OrbitControls enabled={orbitEnabled} />
    </>
  );
};

export default Products;
