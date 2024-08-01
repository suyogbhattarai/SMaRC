import React, { useEffect, useRef, useState } from 'react';
import Museum from '../Museum/Museum';
import Light from '../Light/Light';
import { useFrame, useThree } from '@react-three/fiber';
import Intro from '../Intro/Intro';
import Interface from '../Interface/Interface';
import { Html, OrbitControls, ScrollControls, TransformControls, useScroll } from '@react-three/drei';
import { PerspectiveCamera, SheetProvider, useCurrentSheet } from '@theatre/r3f';
import { getProject, val } from "@theatre/core";
import flyThroughState from "./state.json"
import "./experience.css"
import * as THREE from "three"
import { useNavigate } from 'react-router-dom';



function Experience() {

  const [sheet, setSheet] = useState(null);
 

  useEffect(() => {

    const projectSheet = getProject("Fly Through").sheet("Scene");
    setSheet(projectSheet);

   
  }, []);




  return (
    <>
   {sheet && (
     <ScrollControls pages={10}>
     <SheetProvider sheet={sheet} >
    
       <SceneExperience/>
     </SheetProvider>
 
    </ScrollControls>
   )} 
  
      
    
    </>
  );
}

export default Experience;

function SceneExperience() {
  const sheet = useCurrentSheet();
  const scroll = useScroll();
  const [enterVision, setEnterVision] = useState(false);
  const { camera, gl } = useThree();

  // Target position to check against
  const targetPosition = { x: -6.8909193386595025, y: 125.11158211723959, z: 18.299 };
  // Tolerance for position comparison
  const tolerance = 40;

  const calculateDistance = (pos1, pos2) => {
    return Math.sqrt(
      (pos1.x - pos2.x) ** 2 +
      (pos1.y - pos2.y) ** 2 +
      (pos1.z - pos2.z) ** 2
    );
  };

  // our callback will run on every animation frame
  useFrame(() => {

    const sequenceLength = val(sheet.sequence.pointer.length);
    sheet.sequence.position = scroll.offset * sequenceLength;

    const distance = calculateDistance(camera.position, targetPosition);
    if (distance < tolerance) {
      setEnterVision(true);
    }
    if (distance > tolerance) {
      setEnterVision(false);
    }

    console.log("Camera position:", camera.position);
    // console.log("interface position",visionInterface.current.position
    // )
  });
  const visionInterface=useRef()

  const navigateTo=useNavigate()


  



  return (
    <>
      

      <Light />
      <Museum /> 

      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[0, 0, 0]}
      />
      {/* <TransformControls  object={visionInterface.current} mode='translate'/>
      <group ref={visionInterface} > */}
   {enterVision && (<>
    <Html distanceFactor={1.15} transform position={[-59.728489170862275,123.61325546061033,-0.4185308963159944]}   rotation={[0,THREE.MathUtils.degToRad(45),0]}    wrapperClass={`interface ${enterVision ? 'visible' : ''}`}>
      <div className="enterVision">
<h2>Lets enter assisted vision!</h2>
<div className="btnRow">
  <div onClick={()=>navigateTo("./vision")} className="ok">
    Ok
  </div>
  <div className="later">
    Later
  </div>
</div>
 

 


    
  
    </div>
      </Html>

   </>)}
      
      {/* </group> */}
     
 
    </>
  );
}

