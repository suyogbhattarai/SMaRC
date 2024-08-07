import React, { useEffect, useRef, useState } from 'react';
import Museum from '../Museum/Museum';
import Light from '../Light/Light';
import { useFrame, useThree } from '@react-three/fiber';
import { Html, OrbitControls, ScrollControls, TransformControls, useScroll } from '@react-three/drei';
import { PerspectiveCamera, SheetProvider, useCurrentSheet } from '@theatre/r3f';
import { getProject, val } from "@theatre/core";
import "./experience.css";
import * as THREE from "three";
import { useLocation, useNavigate } from 'react-router-dom';
import experienceCamera from "./camerAnimationExp.json"

function Experience() {
  const [sheet, setSheet] = useState(null);

  // const scrollControlsRef = useRef();

  useEffect(() => {
    const projectSheet = getProject("Fly Through",{state:experienceCamera}).sheet("Scene");
    setSheet(projectSheet);
  }, []);

  return (
    <>
      {sheet && (
        <ScrollControls pages={20} >
          <SheetProvider sheet={sheet}>
            <SceneExperience  />
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
  const [clearPath, setClearPath] = useState(false);
  const [enterVision, setEnterVision] = useState(false);
  const [enterRobotics, setEnterRobotics] = useState(false);
  const [enterAi, setEnterAi] = useState(false);
  const [enterIot, setEnterIot] = useState(false);
  const { camera } = useThree();
  const location = useLocation(); // Use useLocation to access query params
const buttonRef=useRef();
  // Target position to check against
  const targetPosition = { x: -6.8909193386595025, y: 125.11158211723959, z: 18.299 };
  const targetPositionRobotics={x:10.854554444195728,y:130.86158211723972,z:-7.595253679922288}
  const targetPositionAi={x:89.07268900969206,y:129.7321346997684,z:-3.2222408755114884}
  const targetPositionIot={x:102.97117829851327,y:131.26554782824022,z:-35.62859631688254}
  // Tolerance for position comparison
  const tolerance = 10;
  const tolerancehHigh=40

  const calculateDistance = (pos1, pos2) => {
    return Math.sqrt(
      (pos1.x - pos2.x) ** 2 +
      (pos1.y - pos2.y) ** 2 +
      (pos1.z - pos2.z) ** 2
    );
  };

  const calculateDistanceRobotics = (pos1, pos2) => {
    return Math.sqrt(
      (pos1.x - pos2.x) ** 2 +
      (pos1.y - pos2.y) ** 2 +
      (pos1.z - pos2.z) ** 2
    );
  };


  const calculateDistanceAi = (pos1, pos2) => {
    return Math.sqrt(
      (pos1.x - pos2.x) ** 2 +
      (pos1.y - pos2.y) ** 2 +
      (pos1.z - pos2.z) ** 2
    );
  };

  const calculateDistanceIot = (pos1, pos2) => {
    return Math.sqrt(
      (pos1.x - pos2.x) ** 2 +
      (pos1.y - pos2.y) ** 2 +
      (pos1.z - pos2.z) ** 2
    );
  };
  const params = new URLSearchParams(location.search);
  const redirectFrom=params.get("redirect")


  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    const params = new URLSearchParams(location.search);
    const scrollPositionFromPath = params.get('scrollPosition');
  
    // console.log("btnPosition",buttonRef.current.position)
    let scrollPosition;
    if (scrollPositionFromPath) {
      scrollPosition = scroll.offset * sequenceLength + parseFloat(scrollPositionFromPath);
      setClearPath(true);
    } else {
      scrollPosition = scroll.offset * sequenceLength;
    }


    sheet.sequence.position = scrollPosition;

    // Save the scroll position to local storage
    localStorage.setItem('scrollPosition', scrollPosition);
  

    const distance = calculateDistance(camera.position, targetPosition);
    setEnterVision(distance < tolerance);

    const distance2 = calculateDistanceRobotics(camera.position, targetPositionRobotics);
    setEnterRobotics(distance2 < tolerancehHigh);

    const distance3 = calculateDistanceAi(camera.position, targetPositionAi);
    setEnterAi(distance3 < tolerancehHigh);

    const distance4 = calculateDistanceIot(camera.position, targetPositionIot);
    setEnterIot(distance4 < tolerancehHigh);
  });

  const navigateTo = useNavigate();

  useEffect(() => {
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
      navigateTo('/');
    }
  }, [navigateTo]);
  const handleNavigation = () => {
    // Save the current scroll position before navigating
    navigateTo('./vision');
    window.location.href = './vision';
  };
// Ensure sheet is included in dependencies

  return (
    <>
      <Light />
      <Museum />
      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[0, 0, 0]}
      />

<group 
     >
</group>

{enterIot && (<>

  <Html
scale={20}

          distanceFactor={1.15}
          transform
         
          position={[135.50930043885768, 137.91828431299987, 1.63107917522322]}
          rotation={[THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(180), THREE.MathUtils.degToRad(0)]}
          wrapperClass={ "entryText" }
        >
         
          <div className="entryText">
          
            <div className="title">
           
         
          <h2>   SkillVerse IOT</h2>
              
            </div>
            <p>Explore our IOT project</p>
            <div className="entryBtn">
            <div onClick={()=>navigateTo("./IOT")} className="ok">
            Enter
              </div>
            </div>
          </div>
     
        </Html>
{redirectFrom==="IOT" || redirectFrom==="navbarIot" ? (<>
  <Html
scale={20}

          distanceFactor={1.15}
          transform
   
          position={[85.50930043885768, 134.91828431299987, 1.63107917522322]}
          rotation={[THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(180), THREE.MathUtils.degToRad(0)]}
          wrapperClass={`backVision ${enterVision ? 'visible' : ''}`}
        >
         
          <div className="backVision">
          
            <div className="btnRow">
           
              <div onClick={()=>navigateTo("./?redirect=navbarIot&scrollPosition=6.013384556516312")} className="ok">
              &lt;&lt; 
              </div>
          
              <p className='okText'>Go Back</p>
            </div>
     
       
          </div>
     
        </Html>
</>):(<></>)}
</>)}


{enterAi && (<>

  <Html
scale={20}

          distanceFactor={1.15}
          transform
         
          position={[62.50930043885768, 135.91828431299987, -42.63107917522322]}
          rotation={[THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0)]}
          wrapperClass={ "entryText" }
        >
         
          <div className="entryText">
          
            <div className="title">
           
         
          <h2>   SkillVerse AI</h2>
              
            </div>
            <p>Explore our AI project</p>
            <div className="entryBtn">
            <div onClick={()=>navigateTo("./AI")} className="ok">
            Enter
              </div>
            </div>
     
       
          </div>
     
        </Html>
  {redirectFrom=="AI" || redirectFrom=="navbarAi" || redirectFrom=="navbarIot" ? (<>
    <Html
scale={20}

          distanceFactor={1.15}
          transform
   
          position={[113.50930043885768, 135.91828431299987, -42.63107917522322]}
          rotation={[THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0)]}
          wrapperClass={`backVision ${enterVision ? 'visible' : ''}`}
        >
         
          <div className="backVision">
          
            <div className="btnRow">
           
              <div onClick={()=>navigateTo("./?redirect=navbarAi&scrollPosition=4.013384556516312")} className="ok">
              &lt;&lt; 
              </div>
              <p className='okText'>Go Back</p>
              
            </div>
     
       
          </div>
     
</Html>
  </>):(<></>)}
 
</>)}

{enterRobotics && (<>

  <Html
scale={20}

          distanceFactor={1.15}
          transform
         
          position={[-23.502383096244479, 136.67164729531294, -55.504615469855594]}
          rotation={[THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0)]}
          wrapperClass={`entryText ${enterVision ? 'visible' : ''}`}
        >
         
          <div className="entryText">
          
            <div className="title">
           
         
          <h2>   SkillVerse Robotics</h2>
              
            </div>
            <p>Explore our robotics project</p>
            <div className="entryBtn">
            <div onClick={()=>navigateTo("./robotics")} className="ok">
            Enter
              </div>
            </div>
     
       
          </div>
     
        </Html>

  {(redirectFrom=="robotics" || redirectFrom=="navbarRobotics") || redirectFrom=="navbarAi" ? (<>

<Html
scale={20}

          distanceFactor={1.15}
          transform
         
          position={[31.502383096244479, 134.67164729531294, -50.504615469855594]}
          rotation={[THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0)]}
          wrapperClass={`backVision ${enterVision ? 'visible' : ''}`}
        >
         
          <div className="backVision">
          
            <div className="btnRow">
           
              <div onClick={()=>navigateTo("./?redirect=navbarRobotics&scrollPosition=3.013384556516312")} className="ok">
              &lt;&lt; 
              </div>
            <p className='okText'>Go Back</p>
              
            </div>
     
       
          </div>
     
        </Html>
  </>):(<></>)}
 
</>)}



      {enterVision && (
        <>
         <Html
          distanceFactor={1.15}
          transform
          position={[-60.728489170862275, 119.61325546061033, 28.185308963159944]}
          rotation={[0, THREE.MathUtils.degToRad(80), 0]}
          wrapperClass={`interface ${enterVision ? 'visible' : ''}`}
        >
         
          <div className="enterVision">
            <h2>Let's enter assisted vision!</h2>
            <div className="btnRow">
           
              <div onClick={handleNavigation} className="ok">
                Enter
              </div>
              {/* <div onClick={()=>setEnterVision(false)} c  lassName="later">
                Later
                
              </div> */}
              
            </div>
            <p style={{color:"white",fontSize:"10px",marginTop:"20px"}}>Press ESC to reveal the cursor</p>
       
          </div>
     
        </Html>
{redirectFrom==="vision" || redirectFrom==="navbar" || redirectFrom==="navbarRobotics"  ? (<>
  <Html
scale={20}

          distanceFactor={1.15}
          transform
          position={[-47.81731037439364, 137.58773897952544, 38.908885908411563]}
          rotation={[THREE.MathUtils.degToRad(90), THREE.MathUtils.degToRad(90), THREE.MathUtils.degToRad(-90)]}
          wrapperClass={`backVision ${enterVision ? 'visible' : ''}`}
        >
         
          <div className="backVision">
          
            <div className="btnRow">
           
              <div onClick={()=>navigateTo("./")} className="ok">
              &lt;&lt; 
              </div>
              <p className='okText'>Go Back</p>
              
            </div>
     
       
          </div>
     
        </Html>
</>):(<></>)}

     


       
        </>
       

      )}
    </>
  );
}
