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
import cameraAnimation from "./cameraAnimationIot.json"
import SmartDustbin from '../SmartDustbin/SmartDustbin';

function IOT() {
    const [sheet, setSheet] = useState(null);


    useEffect(() => {
        const projectSheet = getProject("Iot Camera",{state:cameraAnimation}).sheet("Scene");
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
  

      

        {enterProject1 && (
        <>
          <Html
            scale={30}
            distanceFactor={1.15}
            transform
            position={[135.28930814201183, 132.88183348706795, 90.79583968511831]}
            rotation={[THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(180), THREE.MathUtils.degToRad(0)]}
            wrapperClass={"projectInterfaceIot"}
          >
            <div className="card">
              <div className="title">
                <h2>Smart Home</h2>
              </div>
              <div className="description">
                <p>Smart Home is a home filled with modern technologies and automations.</p>
              </div>
            </div>
          </Html>
        </>
      )}
      
          <Html 
            scale={30}
            distanceFactor={1.15}
            transform
            position={[155.28930814201183, 132.88183348706795, 56.79583968511831]}
            rotation={[THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(-90), THREE.MathUtils.degToRad(0)]}
            wrapperClass={"videoInterface"}
          >
          <div>
              <video autoPlay controls loop muted>
                <source src='/iotVideo.mp4' type='video/mp4' />
                No video tag support
              </video>
            </div>
          </Html>

      {enterproject2 && (<>
        <Html
scale={20}

        distanceFactor={1.15}
        transform
       
        position={[135.08966065598565, 132.24206322172034,-10.305576409034906]}
        rotation={[THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(360), THREE.MathUtils.degToRad(0)]}
        wrapperClass={ "projectInterfaceIot" }
      >
        <div className="card">
        <div className="title">
        <h2>Smart Dustbin</h2>
       </div>
       <div className="description">
        <p>Smart dustbin is a smart device which opens automatically when we come near it.</p>
       </div>
        </div>
      </Html>
      </>)}
      <Html 
            scale={30}
            distanceFactor={1.15}
            transform
            position={[155.28930814201183, 132.88183348706795, 22.79583968511831]}
            rotation={[THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(-90), THREE.MathUtils.degToRad(0)]}
            wrapperClass={"videoInterface"}
          >
            
          <div>
              <video autoPlay controls loop muted>
                <source src='/iotVideo2.mp4' type='video/mp4' />
                No video tag support  
              </video>
            </div>
          </Html>

      {enterProject3 && (<>
        <Html
scale={20}

        distanceFactor={1.15}
        transform
       
        position={[52.06793009548741, 131.58200500575782,58.938208181840004]}
        rotation={[THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(90), THREE.MathUtils.degToRad(0)]}
        wrapperClass={ "projectInterfaceIot" }
      >
        <div className="card">
        <div className="title">
        <h2>Iot project 3</h2>
       </div>
       <div className="description">
        <p>
This is an upcoming Iot project stay tuned for this one</p>
       </div>
        </div>
      </Html>
      </>)}

      {enterProject4 && (<>
        <Html
scale={20}

        distanceFactor={1.15}
        transform
       
        position={[74.64316493627175, 131.58200500575782, 2.36857004618043]}
        rotation={[THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0)]}
        wrapperClass={ "aiInterface" }
      >
       

        
        <div style={{display:"flex",gap:"10"}} className="flex">
       <h3 onClick={()=>navigateTo("/?redirect=IOT&scrollPosition=7.013384556516312")} >   Exit   </h3>


   
   
     
        </div>
   
      </Html>
        <Html
scale={30}

        distanceFactor={1.15}
        transform
       
        position={[40.64316493627175, 131.58200500575782, 0.36857004618043]}
        rotation={[THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(90), THREE.MathUtils.degToRad(0)]}
        wrapperClass={ "projectInterfaceIot" }
      >
        <div className="card">
        <div className="title">
        <h2 style={{width:"160px"}}>Thank you For Visiting SkillVerse IOT</h2>
       </div>
       <div className="description">
        <p>
        Our IOT department specializes in developing cutting-edge IOT solutions that drive innovation and efficiency across various industries. </p>
       </div>
        </div>
      </Html>
      </>)}
        </group>
      </>
    );
  }