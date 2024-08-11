  import React, { useState, useEffect, Suspense,lazy, useRef } from 'react';
  import './App.css';
  import { Canvas, useFrame, useThree } from '@react-three/fiber';
  import { OrbitControls,Text,Image, PointerLockControls, Html, TransformControls, Sparkles, SpotLight, Float, Environment,useHelper, useGLTF} from '@react-three/drei';
  import { Routes, Route, useLocation, Link } from 'react-router-dom';
  import { useScroll, ScrollControls } from '@react-three/drei';
  import { useDepthBuffer } from '@react-three/drei';
  import { Vector3,Color, SpotLightHelper } from 'three';
  import Loading from './Loading/Loading';
  import AI from './AI/AI';
  import IOT from './IOT/IOT';
  import Robotics from './Robotics/Robotics';
  import Drone from './Museum/Drone';
  import { useEnvironment } from '@react-three/drei';
  import * as THREE from "three"





  const Experience = lazy(() => import('./Experience/Experience'));

  const Interface = lazy(() => import('./Interface/Interface'));
  const AssistedVision  = lazy(() => import("./AssistedVison/AssistedVision"));

  function App() {
    const interfaceref=useRef()
    const location=useLocation()
    const isVisionPath = location.pathname === '/vision';


    return (
      <>
            
        <Canvas position={[0,-100,0]}gl={{ preserveDrawingBuffer: true }}>
          {/* <OrbitControls/> */}
   


          <group ref={interfaceref} >
          <Html scale={20} transform  >

          </Html>

          <Sparkles count={2000} scale={2500} position={[0,1000,0]} size={120} speed={2}/>
      
          </group>
        
    
        <Suspense fallback={<Loading/>}>
        <Environment  background 
          // files={["./cubeMap/px.png","./cubeMap/nx.png","./cubeMap/py.png","./cubeMap/ny.png","./cubeMap/pz.png","./cubeMap/nz.png"]}
     files={"./newhdr.hdr"} 
          />
            <Float scale={1} floatIntensity={100} speed={2}>
    <Drone scale={10} position={[100, 250, 80]}/>
    <MovingSpot  color="white" position={[100, 250, 80]} />


  </Float>
 
{/* <Float>
<Drone scale={10} position={[-20, 280, -350]}/>

<MovingSpot3 color="yellow" position={[-20, 280, -350]}/>  
<MovingSpot2 color="white" position={[-20, 280, -5000]}/> 
</Float> */}
  




{/* <MovingSpot2 color="yellow" position={[10, 200, -200]}/> */}
  <fog attach="fog" args={['#000000', 100, 1170]} />
  
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
      <a style={{textDecoration:"none"}}  href="/?redirect=navbarIot&scrollPosition=7.013384556516312"><li>Internet of Things</li></a>
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

  function MovingSpot({ vec = new Vector3(), hologramColor = new Color("blue"), textPosition = [0, 0, 0], ...props }) {
    const light = useRef();
    const textRef = useRef();
    const viewport = useThree((state) => state.viewport);
  
    useEffect(() => {
      if (light.current) {
        light.current.target.position.set(viewport.width / 3, viewport.height / 2, 0);
        light.current.target.updateMatrixWorld();
      }
    }, [viewport]);
  
    useFrame((state) => {
      if (light.current && light.current.target) {
        // Update light target position based on mouse movement
        light.current.target.position.lerp(
          vec.set(
            (state.mouse.x * viewport.width) / 3,
            (state.mouse.y * viewport.height) / 2,
            0
          ),
          0.1
        );
        light.current.target.updateMatrixWorld();
  
        // Update the text position to match the light target position
        if (textRef.current) {
          textRef.current.position.copy(light.current.target.position.clone().add(new Vector3(...textPosition)));
        }
      }
    });
  
    return (
      <>
        <SpotLight
          ref={light}
          color={hologramColor}
          distance={2000} // Reduced distance to better focus the light
          angle={170} // Reduced angle for a narrower spotlight
          intensity={1.5} // Increased intensity for a sharper focus
          attenuation={90}
          penumbra={1}
          anglePower={1}
          decay={2}
          {...props}
        />
      
      </>
    );
  }
  
  
  function MovingSpot2({ vec = new Vector3(), hologramColor = new Color("blue"), textPosition = [0, 0, 0], ...props }) {
    const light2 = useRef();
    const textRef = useRef();
    const viewport = useThree((state) => state.viewport);
  
    useEffect(() => {
      if (light2.current) {
        light2.current.target.position.set(40,-390,-850);
        light2.current.target.updateMatrixWorld();

      }
    }, [viewport]);
  
    // useFrame((state) => {
    //   if (light2.current && light2.current.target) {
    //     // Update light target position based on mouse movement
    //     light2.current.target.position.lerp(
    //       vec.set(
    //         (state.mouse.x * viewport.width) / 2,
    //         (state.mouse.y * viewport.height) / 2,
    //         0
    //       ),
    //       0.1
    //     );
    //     light2.current.target.updateMatrixWorld();
  
     
    //   }
    // });
  
    return (
      <>
        <SpotLight
          ref={light2}
          color={hologramColor}
          distance={2000} // Reduced distance to better focus the light
          angle={400} // Reduced angle for a narrower spotlight
          intensity={1} // Increased intensity for a sharper focus
          attenuation={200}
          penumbra={10}
          anglePower={12}
          decay={10}
          scale={1}
          {...props}
        />
      
      </>
    );
  }

  function MovingSpot3({ vec = new Vector3(), hologramColor = new Color("blue"), textPosition = [0, 0, 0], ...props }) {
    const light3 = useRef();
    const textRef = useRef();
    const viewport = useThree((state) => state.viewport);
  
    useEffect(() => {
      if (light3.current) {
        light3.current.target.position.set(50,-300,-760);
        light3.current.target.updateMatrixWorld();

      }
    }, [viewport]);
  
    // useFrame((state) => {
    //   if (light3.current && light3.current.target) {
    //     // Update light target position based on mouse movement
    //     light3.current.target.position.lerp(
    //       vec.set(
    //         (state.mouse.x * viewport.width) / 2,
    //         (state.mouse.y * viewport.height) / 2,
    //         0
    //       ),
    //       0.1
    //     );
    //     light3.current.target.updateMatrixWorld();
  
     
    //   }
    // });
  
    return (
      <>
        <SpotLight
          ref={light3}
          color={hologramColor}
          distance={2000} // Reduced distance to better focus the light
          angle={400} // Reduced angle for a narrower spotlight
          intensity={1} // Increased intensity for a sharper focus
          attenuation={200}
          penumbra={10}
          anglePower={9}
          decay={12}
          scale={1}
          {...props}
        />
      
      </>
    );
  }