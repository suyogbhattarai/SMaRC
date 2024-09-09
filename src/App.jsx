import React, { useState, Suspense, lazy, useRef } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Html, Sparkles, Text3D } from '@react-three/drei';
import Loading from './Loading/Loading';
import AI from './AI/AI';
import IOT from './IOT/IOT';
import Robotics from './Robotics/Robotics';
import Passage from './Passage/Passage';
import Home from './Home';
import Navbar from './Main/Navbar';
import { motion } from 'framer-motion';
import ScrollAlert from './ScrollAlert';

// Dynamically import components
const Experience = lazy(() => import('./Experience/Experience'));
const AssistedVision = lazy(() => import("./AssistedVision/AssistedVision"));

function App() {
  const interfaceref = useRef();
  const location = useLocation();
  const isVisionPath = location.pathname === '/vision';

  const [interactionState, setInteractionState] = useState({
    hovered: false,
    clickedCrab: false,
    // other states
  });

  const [isFallbackComplete, setFallbackComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleHover = (hovered) => {
    setInteractionState(prev => ({ ...prev, hovered }));
  };

  const handleClick = () => {
    setInteractionState(prev => ({ ...prev, clickedCrab: true }));
  };

  const onFallbackComplete = () => {
    setFallbackComplete(true);
    // Delay showing content for 3 seconds
    setTimeout(() => {
      setShowContent(true);
    }, 3500);
  };

  return (
    <>
      {!showContent && !isVisionPath && (
        <div className="home-background">
          <div className="home">
            <Home />
          </div>
        </div>
      )}

      {showContent && !isVisionPath && (
        <motion.div
          className="home-background"
          initial={{ opacity: 0, scale: 1, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{
            opacity: 0,
            scale: 0.8,
            rotate: 45,
            transition: { duration: 0.7, ease: 'easeInOut' }
          }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          <div className="home">
            <Navbar className="navbar" />
            <div className="content">
              
            </div>
            <ScrollAlert className="scrollalert" />
          </div>
        </motion.div>
      )}

      <Canvas shadows position={[0, -100, 0]} gl={{ preserveDrawingBuffer: true }}>
        <group ref={interfaceref}>
          <Html scale={20} transform />
          <Sparkles count={2000} scale={2500} position={[0, 1000, 0]} size={120} speed={2} />
        </group>

        <Suspense fallback={<Loading onLoad={onFallbackComplete} />}>
          <group position={[-2.9, -19, 7.8]}>
            <mesh
              onPointerOver={() => handleHover(true)}
              onPointerOut={() => handleHover(false)}
              position={[250, 127, -30.1]}
            >
              <planeGeometry args={[13, 5]} />
              <meshStandardMaterial color={interactionState.hovered ? 'black' : '#6141a3'} />
            </mesh>

            <mesh
              position={[0, 0, 0.01]}
              onPointerOver={() => handleHover(true)}
              onPointerOut={() => handleHover(false)}
              onClick={handleClick}
            >
              <Text3D
                position={[244.3, 126.5, -30]}
                size={1.5}
                font="./fonts/Poppins_Bold.json"
              >
                View More
                <meshStandardMaterial metalness={0.001} roughness={0} color={interactionState.hovered ? 'yellow' : '#ffffff'} />
              </Text3D>
            </mesh>
          </group>

          <fog attach="fog" args={['#000000', 600, 1170]} />

          <Routes>
            <Route path='/' element={<Experience />} />
            <Route path="/vision" element={<AssistedVision />} />
            <Route path="/AI" element={<AI />} />
            <Route path="/IOT" element={<IOT />} />
            <Route path="/robotics" element={<Robotics />} />
            <Route path="/projects" element={<Passage clickedCrab={interactionState.clickedCrab} setClickedCrab={(val) => setInteractionState(prev => ({ ...prev, clickedCrab: val }))} />} />
          </Routes>
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
