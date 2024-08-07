import React, { useState, useEffect, Suspense,lazy, useRef } from 'react';
import './App.css';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PointerLockControls, Html, TransformControls, Sparkles } from '@react-three/drei';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { useScroll, ScrollControls } from '@react-three/drei';


import Loading from './Loading/Loading';
import AI from './AI/AI';
import IOT from './IOT/IOT';
import Robotics from './Robotics/Robotics';




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
 
       

        <group ref={interfaceref} >
        <Html scale={20} transform  >

        </Html>

        <Sparkles count={2000} scale={2500} position={[0,1000,0]} size={120} speed={2}/>
        {/* <OrbitControls /> */}
        </group>
       
   
      <Suspense fallback={<Loading/>}>
      <Routes>

<Route path='/' element={<Experience />} />

<Route path="/vision" element={<AssistedVision />} />

<Route path="/AI" element={<AI />} />
<Route path="/IOT" element={<IOT/>} />
<Route path="/robotics" element={<Robotics/>} />
</Routes>
 

         </Suspense>

      </Canvas>
      {!isVisionPath && (<>
      <div className="container">
      <div className="ui">
<div className="logo">
  <a style={{textDecoration:"none"}} href="./"><img src="./butterfly.png" alt="" /></a>
</div>
<div className="navbar">
  <ul>
  <a style={{textDecoration:"none"}}  href="/"><li>Home</li></a>
  <a style={{textDecoration:"none"}}  href="/?redirect=navbar&scrollPosition=3.013384556516312"><li>Assisted Vision</li></a>
    <a  style={{textDecoration:"none"}} href="/?redirect=navbarRobotics&scrollPosition=4.013384556516312"><li>Robotics</li></a>
    <a style={{textDecoration:"none"}}  href="/?redirect=navbarAi&scrollPosition=6.013384556516312"><li>Artificial Intelligence</li></a>
    <a style={{textDecoration:"none"}}  href="/?redirect=navbarIot&scrollPosition=8.013384556516312"><li>Internet of Things</li></a>
  </ul>
</div>

</div>
<div className="scrollalert">
  <div className="alert">
  <i class="fas fa-mouse"></i>  Scroll   To Explore
  </div>
</div>
      </div>

        </>)}
  

    </>
  );
}

export default App;


