import React, { useState, useEffect, Suspense,lazy, useRef } from 'react';
import './App.css';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PointerLockControls, Html, TransformControls, Sparkles, SpotLight, Float } from '@react-three/drei';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { useScroll, ScrollControls } from '@react-three/drei';
import { useDepthBuffer } from '@react-three/drei';
import { Vector3 } from 'three';
import Loading from './Loading/Loading';
import AI from './AI/AI';
import IOT from './IOT/IOT';
import Robotics from './Robotics/Robotics';
import Drone from './Museum/Drone';





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
 <Float scale={1} floatIntensity={100} speed={2}>
  <Drone scale={10} position={[-170, 200, -50]}/>
  <MovingSpot  color="white" position={[-170, 200, -50]} />


  <Drone scale={10} position={[100, 200, 250]}/>

 <MovingSpot color="yellow"position={[100, 200, 250]}/>
 </Float>
 <fog attach="fog" args={['#14121a', 500, 700]} />

        <group ref={interfaceref} >
        <Html scale={20} transform  >

        </Html>

        <Sparkles count={2000} scale={2500} position={[0,1000,0]} size={120} speed={2}/>
        <OrbitControls />
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


function MovingSpot({ vec = new Vector3(), ...props }) {
  const light = useRef()
  const viewport = useThree((state) => state.viewport)

  useEffect(() => {
    if (light.current) {
      light.current.target.position.set((viewport.width) / 3, (viewport.height) / 2, 0);
      light.current.target.updateMatrixWorld();
    }
  }, [viewport]);

  useFrame((state) => {
    light.current.target.position.lerp(
      vec.set(
        (state.mouse.x * viewport.width) / 3,
        (state.mouse.y * viewport.height) / 2,
        0
      ),
      0.1
    );
    light.current.target.updateMatrixWorld();
  })
  return <SpotLight scale={40}  ref={light}  distance={50} angle={3} attenuation={150} anglePower={2}   {...props} />
}