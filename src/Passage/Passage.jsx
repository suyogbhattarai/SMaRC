
import Projects from '../Projects/Projects';
import React, { useEffect, useRef, useState } from 'react';

import Light from '../Light/Light';
import { useFrame, useThree } from '@react-three/fiber';
import { Html, OrbitControls, ScrollControls, TransformControls, useScroll } from '@react-three/drei';
import { PerspectiveCamera, SheetProvider, useCurrentSheet } from '@theatre/r3f';
import { getProject, val } from "@theatre/core";

import * as THREE from "three";
import { useLocation, useNavigate } from 'react-router-dom';

import OnlyTv from '../OnlyTv/OnlyTv';
import { SpotLight } from '@react-three/drei';
import Floor from '../Floor/Floor';
function Passage() {

    const [sheet, setSheet] = useState(null);
    useEffect(() => {
        const projectSheet = getProject("Passage Camera").sheet("Scene");
        setSheet(projectSheet);
      }, []);
  return (

    <>  
    {/* <OrbitControls makeDefault/> */}
                {sheet && (
        <ScrollControls pages={10} damping={0.25} >
          <SheetProvider sheet={sheet}>
            <ScenePassage />
          </SheetProvider>
        </ScrollControls>
      )}
    </>
  )
}

export default Passage

function ScenePassage() {
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
    const tolerancehHigh=4
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
      setEnterProject3(distance3 <20);
  
      const distance4 = calculateDistanceProject4(camera.position, targetPositionproject4);
      setEnterproject4(distance4 < tolerance);
    });

    return (
      <>

        <ambientLight intensity={0.3}/> 
 <directionalLight castShadow position={[110,700,100]} intensity={0.4}/>
        
        <Projects  position={[0,-18,0]}/>
        <Floor />
        <PerspectiveCamera
          theatreKey="Camera"
          makeDefault
          position={[0, 0, 0]}
        />
        {/* <group>
  

      
    

      {enterProject1 && (<>
    
        <Html
scale={20}

        distanceFactor={1.15}
        transform
       
        position={[-39.049306602159675,136.24272750605908, -25.14303079212448]}
        rotation={[THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(180), THREE.MathUtils.degToRad(0)]}
        wrapperClass={ "projectInterface" }
      >
        <div className="card">
        <div className="title">
        <h2>Skill Kicks</h2>
       </div>   
       <div className="description">
        <p>Skill Kicks is a game arena where two teams of three Robots play ice-hockey/football.</p>
       </div>
        </div>

   
      </Html>
      <SpotLight

          color="yellow"
          position={[-45.049306602159675,151.24272750605908, -25.14303079212448]}
          distance={200} // Reduced distance to better focus the light
          angle={40} // Reduced angle for a narrower spotlight
          intensity={1} // Increased intensity for a sharper focus
          attenuation={2}
          penumbra={10}
          anglePower={1}
          decay={12}
          scale={1}
 
        />
      </>)}
      <Html transform scale={0.85} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(90), THREE.MathUtils.degToRad(0)]} position={[-50.549306602159675, 132.24272750605908, -50.14303079212448]} wrapperClass='screen'>
                    <video height={1180} autoPlay loop muted  >
                        <source src='./skillkicks.mp4' type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Html>  
      <Html  transform scale={1} width={1024} height={920}  rotation={[-0.23,-4.71,0.24]}  position={[50.549306602159675,135.24272750605908, -85.54303079212448]} wrapperClass='screen'>
      <video autoPlay loop muted  >
                        <source src='./crab.mp4' type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>      </Html>  



      {enterproject2 && (<>
        <Html
scale={20}

        distanceFactor={1.15}
        transform
       
        position={[-43.14303079212448, 132.24272750605908,-100.22628269127733]}
        rotation={[THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0)]}
        wrapperClass={ "projectInterface" }
      >
        <div className="card">
        <div className="title">
        <h2 style={{color:"rgb(180, 40, 40)"}}>Alert:</h2>
       </div>
       <div className="description">
        <p> Please dont place your cursor over text ,images and videos.It prevents you from scrolling</p>
       </div>
        </div>
      </Html>
      </>)}

      {enterProject3 && (<>
        <Html
scale={20}

        distanceFactor={1.15}
        transform
       
        position={[30.064064073291057, 136.24272750605908,-115.67658238711239]}
        rotation={[THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0)]}
        wrapperClass={ "projectInterface" }
      >
        <div className="card">
        <div className="title">
        <h2>Mr.Murphy</h2>
       </div>
       <div className="description">
        <p>
        Mr. Murphy is a desk companion Robot. It is controlled manually to move around the desk. It responds to certain commands like “hello”, “dance”,”move”. It also displays emotions through its eyes.</p>
       </div>
        </div>
      </Html>
      </>)}

      {enterProject4 && (<>
        <Html
scale={20}

        distanceFactor={1.15}
        transform
       
        position={[30.64316493627175, 131.58200500575782, -40.36857004618043]}
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
        </group> */}
      </>
    );
  }