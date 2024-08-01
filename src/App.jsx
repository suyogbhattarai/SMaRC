import React, { useState, useEffect, Suspense,lazy } from 'react';
import './App.css';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PointerLockControls, Html } from '@react-three/drei';
import { Routes, Route } from 'react-router-dom';
import { useScroll, ScrollControls } from '@react-three/drei';

import Loading from './Loading/Loading';

const Experience = lazy(() => import('./Experience/Experience'));

const Interface = lazy(() => import('./Interface/Interface'));
const AssistedVision  = lazy(() => import("./AssistedVison/AssistedVision"));

function App() {
 
  return (
    <>
      <Canvas  gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loading/>}>
         <Routes>

   <Route path='/' element={<Experience />} />
   <Route path="/vision" element={<AssistedVision />} />
  
   
 </Routes>
         </Suspense>
      </Canvas>
    </>
  );
}

export default App;


