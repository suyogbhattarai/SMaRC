  import React, { useState, useEffect, Suspense,lazy, useRef } from 'react';
  import './App.css';
  import { Canvas, useFrame, useThree } from '@react-three/fiber';
  import { OrbitControls,Text,Image, PointerLockControls, Html, TransformControls, Sparkles, SpotLight, Float, Environment,useHelper, useGLTF, View, Sky, Text3D, Plane, PresentationControls} from '@react-three/drei';
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
import Passage from './Passage/Passage';
import SmallCanvas from './SmallCanvas/SmallCanvas';
import CharacterModel from './CharacterModel/CharacterModel';





  const Experience = lazy(() => import('./Experience/Experience'));

  const Interface = lazy(() => import('./Interface/Interface'));
  const AssistedVision  = lazy(() => import("./AssistedVison/AssistedVision"));

  function App() {
    const interfaceref=useRef()
    const location=useLocation()
    const isVisionPath = location.pathname === '/vision';
const {scene:crab}=useGLTF("./CrabFinal.glb")
const [hovered, setHovered] = useState(false);
const [clickedCrab, setClickedCrab] = useState(false);
const [clickedKicks, setClickedKicks] = useState(false);
const [clickedDesk, setClickedDesk] = useState(false);
const [clickedMaths, setClickedMaths] = useState(false);
const [clickedSelf, setClickedSelf] = useState(false);
const [clickedSafari, setClickedSafari] = useState(false);
const [clickedVision, setClickedVision] = useState(false);

    return (
      <>
            
        <Canvas shadows position={[0,-100,0]}gl={{ preserveDrawingBuffer: true }}>
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
    <Drone scale={10} position={[150, 300, 80]}/>
    <MovingSpot  color="white" position={[150, 300, 80]} />


  </Float>
 
{/* <Float>
<Drone scale={10} position={[-20, 280, -350]}/>

<MovingSpot3 color="yellow" position={[-20, 280, -350]}/>  
<MovingSpot2 color="white" position={[-20, 280, -5000]}/> 
</Float> */}
  

  <group position={[-2.9,-19,7.8]} >
      {/* Background Plane */}
      <mesh        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)} position={[250, 127, -30.1]}> {/* Position the plane slightly behind the text */}
    <planeGeometry  onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)} args={[13, 5]} /> {/* Adjust the size to cover the text */}
    <meshStandardMaterial  color={hovered ? 'black' : '#6141a3'} /> {/* White background */}
  </mesh>

      {/* Button Text */}
      <mesh
        position={[0, 0, 0.01]}  // Slightly offset the text in front of the background
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => {
          setClickedCrab(true);
    
        }}
        onPointerUp={() => setClickedCrab(false)}
      >
            <Text3D
             onPointerOver={() => setHovered(true)}
             onPointerOut={() => setHovered(false)}
             onClick={() => {
              setClickedCrab(true);
        
            }}
            position={[244.3, 126.5, -30]}    
     size={1.5}

        font="./fonts/Poppins_Bold.json"
       
      >
View More
<meshStandardMaterial metalness={0.001} roughness={0}   color={hovered ? 'yellow' : '#ffffff'} />
      </Text3D>
      </mesh>
    </group>


{/* <MovingSpot2 color="yellow" position={[10, 200, -200]}/> */}
  <fog attach="fog" args={['#000000', 600, 1170]} />
  
        <Routes>

  <Route path='/' element={<Experience />} />

  <Route path="/vision" element={<AssistedVision />} />

  <Route path="/AI" element={<AI />} />
  <Route path="/IOT" element={<IOT/>} />
  <Route path="/robotics" element={<Robotics/>} />
  <Route path="/projects" element={<Passage clickedCrab={clickedCrab} setClickedCrab={setClickedCrab} clickedKicks={clickedKicks} setHovered={setHovered} hovered={hovered}/>}/>
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
      <a  style={{textDecoration:"none"}} href="/?redirect=navbarRobotics&scrollPosition=6.113384556516312"><li>Robotics</li></a>

      <a style={{textDecoration:"none"}}  href="/projects"><li>Projects</li></a>
    </ul>
  </div>

  </div>
  <div className="scrollalert">
    <div className="alert">
    <i class="fas fa-mouse"></i>  Scroll   To Explore
    </div>
  </div>



  {clickedCrab && (<>
    <div className="crabDescription">
    <div className="card">
      <div className="description">
        <h2>Mr.Murphy</h2>
        <p>Mr.Murphy is a desk companion Robot. It is controlled manually to move around the desk. 
           It responds to certain commands like “hello”,“dance”,”move”. It also displays emotions through its eyes.</p>
        <div className="btn">
          <button onClick={()=>setClickedCrab(false)}>Close</button>
          
        </div>
      </div>
      <div className="model">
      <Canvas style={{ width: '600px', height: '380px' }} camera={ {position: [0, 0, 0] }}>
{/* <OrbitControls/> */}
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <group>
            <PresentationControls
       // Rotation limits as [x, y]
            // Limit zoom level
            zoom={1} // Minimum zoom
            maxZoom={5} // Maximum zoom
            // Other optional settings
            speed={2} // Speed of interaction
            damping={0.5} // Damping effect
            >


            <primitive position={[-250,-490,200]} scale={200} object={crab}/>

            </PresentationControls>

          </group>
        </Suspense>
        <PresentationControls />
        <Sky/>
      </Canvas>
    <h4 style={{textAlign:"center"}}> Drag To Explore The Model</h4>  
      </div>
    </div>
  </div>
  </>)
    
  }


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