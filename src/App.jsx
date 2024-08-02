import React, { useState, useEffect, Suspense,lazy, useRef } from 'react';
import './App.css';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PointerLockControls, Html, TransformControls, Sparkles } from '@react-three/drei';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { useScroll, ScrollControls } from '@react-three/drei';


import Loading from './Loading/Loading';



const Experience = lazy(() => import('./Experience/Experience'));

const Interface = lazy(() => import('./Interface/Interface'));
const AssistedVision  = lazy(() => import("./AssistedVison/AssistedVision"));

function App() {
  const interfaceref=useRef()
  const location=useLocation()
  const isVisionPath = location.pathname === '/vision';

  return (
    <>
          
      <Canvas  gl={{ preserveDrawingBuffer: true }}>
 
       
        <TransformControls mode='translate' object={interfaceref}/>
        <group ref={interfaceref} >
        <Html scale={20} transform  >

        </Html>

       
        </group>
       
   
      <Suspense fallback={<Loading/>}>
      <Sparkles count={2000} scale={2000} position={[0,1000,0]} size={120} speed={2}/>
         <Routes>

   <Route path='/' element={<Experience />} />

   <Route path="/vision" element={<AssistedVision />} />
  
   
 </Routes>
         </Suspense>
      </Canvas>
      {!isVisionPath && (<>
        <div className="ui">

<div className="navbar">
  <ul>
  <a  href="/"><li>Home</li></a>
  <a  href="/?redirect=navbar&scrollPosition=3.013384556516312"><li> Assisted Vision</li></a>
    <a href="/?redirect=navbarRobotics&scrollPosition=4.013384556516312"><li>Robotics</li></a>
    <a href="/?redirect=navbarAi&scrollPosition=6.013384556516312"><li>Artificial Intelligence</li></a>
    <a href="/?redirect=navbarIot&scrollPosition=7.013384556516312"><li>IOT</li></a>
  </ul>
</div>
</div>
        </>)}
  

    </>
  );
}

export default App;


