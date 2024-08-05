import React, { useEffect, useRef, useState } from 'react';
import Museum from '../Museum/Museum';
import Light from '../Light/Light';
import { useFrame, useThree } from '@react-three/fiber';
import { Html, OrbitControls, ScrollControls, TransformControls, useScroll } from '@react-three/drei';
import { PerspectiveCamera, SheetProvider, useCurrentSheet } from '@theatre/r3f';
import { getProject, val } from "@theatre/core";
import "./robotics.css";
import * as THREE from "three";
import { useLocation, useNavigate } from 'react-router-dom';
import CameraAnimationRobotics from "./roboticsCamera.json"
function Robotics() {
    const [sheet, setSheet] = useState(null);


    useEffect(() => {
        const projectSheet = getProject("Robotics Camera",{state:CameraAnimationRobotics}).sheet("Scene");
        setSheet(projectSheet);
      }, []);
  return (
    <>
        {sheet && (
        <ScrollControls pages={10} >
          <SheetProvider sheet={sheet}>
            <SceneRobotics />
          </SheetProvider>
        </ScrollControls>
      )}
    </>
  )
}

export default Robotics

function SceneRobotics() {
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
    const targetPositionProject1 = { x: -26.04928884806038, y: 131.24272750605908, z: -64.14303079212448 };
    const targetPositionProject2={x:-34.911027428431694,y:131.24272750605908,z:-79.22628269127733}
    const targetPositionProject3={x:5.064127750514806,y:131.24272750605908,z:-79.67658238711239}
    const targetPositionproject4={x:13.001978979641205,y:131.24272750605908,z:-64.354254479873}
    // Tolerance for position comparison
    const tolerance = 10;
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
  

      
    

      {enterProject1 && (<>
        {/* <Html
scale={80}

        distanceFactor={1.15}
        transform
       
        position={[5.50930043885768, 135,30.63107917522322]}
        rotation={[THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(90), THREE.MathUtils.degToRad(0)]}
        wrapperClass={ "aiInterface" }
      >
       
        <div className="entryText">
        
          <div className="title">
         
       <div style={{display:"flex",gap:"10"}} className="flex">
       <h2 style={{fontSize:"24px"}}>   Scroll  &darr;  To Move    </h2>
       </div>
   
       
            
          </div>

   
   
     
        </div>
 
   
      </Html> */}
        <Html
scale={30}

        distanceFactor={1.15}
        transform
       
        position={[-45.049306602159675,131.24272750605908, -25.14303079212448]}
        rotation={[THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(180), THREE.MathUtils.degToRad(0)]}
        wrapperClass={ "projectInterface" }
      >
        <div className="card">
        <div className="title">
        <h2>Skill Kicks</h2>
       </div>   
       <div className="description">
        <p>Skill Kicks is a robot based game where we controls our moving robot with a controlller kick a ball.There is a arena for playing this with a goal post just like football.</p>
       </div>
        </div>

   
      </Html>
      </>)}

      {enterproject2 && (<>
        <Html
scale={20}

        distanceFactor={1.15}
        transform
       
        position={[-65.14303079212448, 135.24272750605908,-98.22628269127733]}
        rotation={[THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(90), THREE.MathUtils.degToRad(0)]}
        wrapperClass={ "projectInterface" }
      >
        <div className="card">
        <div className="title">
        <h2>Murphy Robot</h2>
       </div>
       <div className="description">
        <p> Murphy robot is a voice commanded robot which follows the command .</p>
       </div>
        </div>
      </Html>
      </>)}

      {enterProject3 && (<>
        <Html
scale={20}

        distanceFactor={1.15}
        transform
       
        position={[20.064064073291057, 135.24272750605908,-110.67658238711239]}
        rotation={[THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0)]}
        wrapperClass={ "projectInterface" }
      >
        <div className="card">
        <div className="title">
        <h2>Desk Robot </h2>
       </div>
       <div className="description">
        <p>
        Desk Robot is a robot which follows our gestures and assists us in our desk hour.</p>
       </div>
        </div>
      </Html>
      </>)}

      {enterProject4 && (<>
        <Html
scale={20}

        distanceFactor={1.15}
        transform
       
        position={[20.64316493627175, 131.58200500575782, -30.36857004618043]}
        rotation={[THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(180), THREE.MathUtils.degToRad(0)]}
        wrapperClass={ "aiInterface" }
      >
       

        
        <div style={{display:"flex",gap:"10"}} className="flex">
       <h3 onClick={()=>navigateTo("/?redirect=robotics&scrollPosition=4.013384556516312")} >   Exit   </h3>


   
   
     
        </div>
   
      </Html>
        <Html
scale={30}

        distanceFactor={1.15}
        transform
       
        position={[60.64316493627175, 131.58200500575782, -40.36857004618043]}
        rotation={[THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(-90), THREE.MathUtils.degToRad(0)]}
        wrapperClass={ "projectInterface" }
      >
        <div className="card">
        <div className="title">
        <h2 style={{width:"160px"}}>Thank you For Visiting SkillVerse Robotics</h2>
       </div>
       <div className="description">
        <p>
        Our robotics department specializes in developing cutting-edge robotics  solutions that drive innovation and efficiency across various industries. </p>
       </div>
        </div>
      </Html>
      </>)}
        </group>
      </>
    );
  }