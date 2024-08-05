import React, { useEffect, useRef, useState } from 'react';
import Museum from '../Museum/Museum';
import Light from '../Light/Light';
import { useFrame, useThree } from '@react-three/fiber';
import { Html, OrbitControls, ScrollControls, TransformControls, useScroll } from '@react-three/drei';
import { PerspectiveCamera, SheetProvider, useCurrentSheet } from '@theatre/r3f';
import { getProject, val } from "@theatre/core";
import "./iot.css";
import * as THREE from "three";
import { useLocation, useNavigate } from 'react-router-dom';


function IOT() {
    const [sheet, setSheet] = useState(null);


    useEffect(() => {
        const projectSheet = getProject("Iot Camera").sheet("Scene");
        setSheet(projectSheet);
      }, []);
  return (
    <>
        {sheet && (
        <ScrollControls pages={10} >
          <SheetProvider sheet={sheet}>
            <SceneIOT  />
          </SheetProvider>
        </ScrollControls>
      )}
    </>
  )
}

export default IOT

function SceneIOT() {
    const sheet = useCurrentSheet();
    const scroll = useScroll();
    const [clearPath, setClearPath] = useState(false);
    const [enterProject1, setEnterProject1] = useState(false);
    const [enterproject2, setEnterproject2] = useState(false);
    const [enterProject3, setEnterProject3] = useState(false);
    const [enterProject4, setEnterproject4] = useState(false);
    const { camera } = useThree();
    const location = useLocation(); // Use useLocation to access query params
  const buttonRef=useRef();
    // Target position to check against
    const targetPositionProject1 = { x: 127.28930715088883, y: 129.88183348706795, z: 54.79583968511831 };
    const targetPositionProject2={x:128.08965972160553,y:129.24206322172034,z:12.305576409034899}
    const targetPositionProject3={x:75.98940686041297,y:129.24203411440112,z:60.400791114849135}
    const targetPositionproject4={x:71.4809374768083,y:129.24203411440112,z:17.094664522612867}
    // Tolerance for position comparison
    const tolerance = 25;
    const tolerancehHigh=40
    const navigateTo=useNavigate()
  
    const calculateDistanceProject1 = (pos1, pos2) => {
      return Math.sqrt(
        (pos1.x - pos2.x) ** 2 +
        (pos1.y - pos2.y) ** 2 +
        (pos1.z - pos2.z) ** 2
      );
    };
  
    const calculateDistanceProject2 = (pos1, pos2) => {
      return Math.sqrt(
        (pos1.x - pos2.x) ** 2 +
        (pos1.y - pos2.y) ** 2 +
        (pos1.z - pos2.z) ** 2
      );
    };
  
  
    const calculateDistanceProject3= (pos1, pos2) => {
      return Math.sqrt(
        (pos1.x - pos2.x) ** 2 +
        (pos1.y - pos2.y) ** 2 +
        (pos1.z - pos2.z) ** 2
      );
    };
  
    const calculateDistanceProject4 = (pos1, pos2) => {
      return Math.sqrt(
        (pos1.x - pos2.x) ** 2 +
        (pos1.y - pos2.y) ** 2 +
        (pos1.z - pos2.z) ** 2
      );
    };

  
  
    useFrame(() => {
      const sequenceLength = val(sheet.sequence.pointer.length);

      const scrollPosition = scroll.offset * sequenceLength;
      sheet.sequence.position = scrollPosition;
      const distance = calculateDistanceProject1(camera.position, targetPositionProject1);
      setEnterProject1(distance < tolerance);
  
      const distance2 = calculateDistanceProject2(camera.position, targetPositionProject2);
      setEnterproject2(distance2 < tolerance);
  
      const distance3 = calculateDistanceProject3(camera.position, targetPositionProject3);
      setEnterProject3(distance3 < tolerance);
  
      const distance4 = calculateDistanceProject4(camera.position, targetPositionproject4);
      setEnterproject4(distance4 < tolerance);
    });

    return (
      <>
        <Light />
        <Museum />
        <PerspectiveCamera
          theatreKey="Camera"
          makeDefault
          position={[0, 0, 0]}
        />

        <group>
  

        <Html
scale={50}

        distanceFactor={1.15}
        transform
       
        position={[82.50930043885768, 167.5, -30.63107917522322]}
        rotation={[THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0)]}
        wrapperClass={ "aiInterface" }
      >
       
        <div className="entryText">
        
          <div className="title">
         
       <div style={{display:"flex",gap:"10"}} className="flex">
       <h2 style={{fontSize:"24px"}}>   Scroll  &darr;  To Move    </h2>
       </div>
   
       
            
          </div>

   
   
     
        </div>
 
   
      </Html>
    

      {enterProject1 && (<>
        <Html
scale={30}

        distanceFactor={1.15}
        transform
       
        position={[127.28930814201183, 132.88183348706795, 80.79583968511831]}
        rotation={[THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(180), THREE.MathUtils.degToRad(0)]}
        wrapperClass={ "projectInterface" }
      >
        <div className="card">
        <div className="title">
        <h2>Self Driving Car</h2>
       </div>
       <div className="description">
        <p>Self-driving cars, also known as autonomous vehicles,  represent a transformative leap in  transportation technology.</p>
       </div>
        </div>

   
      </Html>
      </>)}

      {enterproject2 && (<>
        <Html
scale={20}

        distanceFactor={1.15}
        transform
       
        position={[135.08966065598565, 132.24206322172034,-10.305576409034906]}
        rotation={[THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(360), THREE.MathUtils.degToRad(0)]}
        wrapperClass={ "projectInterface" }
      >
        <div className="card">
        <div className="title">
        <h2>AI Math Solver</h2>
       </div>
       <div className="description">
        <p>An AI math solver is a sophisticated tool that leverages artificial intelligence to solve mathematical problems quickly and accurately</p>
       </div>
        </div>
      </Html>
      </>)}

      {enterProject3 && (<>
        <Html
scale={20}

        distanceFactor={1.15}
        transform
       
        position={[160.22389061770082, 132.53139022648116, -85.18442970534629]}
        rotation={[THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(-90), THREE.MathUtils.degToRad(0)]}
        wrapperClass={ "projectInterface" }
      >
        <div className="card">
        <div className="title">
        <h2>AI Safari</h2>
       </div>
       <div className="description">
        <p>
        An AI safari offers an immersive and interactive virtual experience, where users can explore wildlife and natural habitats through advanced artificial intelligence technologies that simulate real-world encounters.</p>
       </div>
        </div>
      </Html>
      </>)}

      {enterProject4 && (<>
        <Html
scale={20}

        distanceFactor={1.15}
        transform
       
        position={[135.22389061770082, 132.53139022648116, -40.18442970534629]}
        rotation={[THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(-180), THREE.MathUtils.degToRad(0)]}
        wrapperClass={ "aiInterface" }
      >
       

        
        <div style={{display:"flex",gap:"10"}} className="flex">
       <h3 onClick={()=>navigateTo("/?redirect=AI&scrollPosition=6.013384556516312")} >   Exit   </h3>


   
   
     
        </div>
   
      </Html>
        <Html
scale={20}

        distanceFactor={1.15}
        transform
       
        position={[160.22389061770082, 132.53139022648116, -40.18442970534629]}
        rotation={[THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(-90), THREE.MathUtils.degToRad(0)]}
        wrapperClass={ "projectInterface" }
      >
        <div className="card">
        <div className="title">
        <h2 style={{width:"160px"}}>Thank you For Visiting SkillVerse AI</h2>
       </div>
       <div className="description">
        <p>
        Our AI department specializes in developing cutting-edge artificial intelligence solutions that drive innovation and efficiency across various industries. </p>
       </div>
        </div>
      </Html>
      </>)}
        </group>
      </>
    );
  }