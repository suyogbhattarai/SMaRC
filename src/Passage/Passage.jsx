
import Projects from '../Projects/Projects';
import React, { Suspense, useEffect, useRef, useState } from 'react';

import Light from '../Light/Light';
import { useFrame, useThree } from '@react-three/fiber';
import { Html, OrbitControls, ScrollControls, TransformControls, useScroll,Text3D, useGLTF, Plane, useAnimations, Clone } from '@react-three/drei';
import { PerspectiveCamera, SheetProvider, useCurrentSheet } from '@theatre/r3f';
import { getProject, val } from "@theatre/core";
import { Text } from '@react-three/drei';
import * as THREE from "three";
import { useLocation, useNavigate } from 'react-router-dom';
import poppinsFont from './Poppins-Bold.ttf'; 
import OnlyTv from '../OnlyTv/OnlyTv';
import { SpotLight } from '@react-three/drei';
import Floor from '../Floor/Floor';
import "./passage.css"
import Bean from '../Bean/Bean';
import Sofa from '../Museum/Sofa';
import VideoPlane from '../VideoPlane/VideoPlane';
import { Vector3 } from 'three';
import CharacterModel from '../CharacterModel/CharacterModel';







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

function MovingSpot({ vec = new Vector3(), ...props }) {
  const light = useRef()
  const viewport = useThree((state) => state.viewport)
  useFrame((state) => {
    light.current.target.position.set(0,20000,0)
  })
  return <SpotLight scale={20} castShadow ref={light} penumbra={1} distance={30} angle={4} attenuation={10} anglePower={0.1} intensity={2} {...props} />
}
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
    const planeGeometry = new THREE.PlaneGeometry(5, 5);

THREE.ColorManagement.enabled = true; 
const {scene}=useGLTF("./SkillRobotTest.glb")
const { scene: crab } = useGLTF("./CrabFinal.glb");
const { scene: BeanBag } = useGLTF("./BeanBag (2).glb");
const { scene: SkillBlue } = useGLTF("./SKillKicksBlue.glb");
const { scene: SkillRed } = useGLTF("./SKillKicksRed.glb");
const { scene: pot1 } = useGLTF("./indoorPlantPot.glb");
const { scene: pot4 } = useGLTF("./indoorPlantPot(2).glb");
const { scene: pot2 } = useGLTF("./potPlant.glb");
const { scene: pot3 } = useGLTF("./potPlant2.glb");
const {scene:arena}=useGLTF("./SKillKicks (1).glb")
  const {scene:podium,animations}=useGLTF("./podium.glb")
  const {scene:DeskComp}=useGLTF("./DeskComp.glb")
    const {scene:selfTrack}=useGLTF("./selfDriving (3).glb")
    const {scene:beanMan}=useGLTF("./selfDriving (3).glb")
    const {scene:aiCar}=useGLTF("./selfDriving (1).glb")
    const {scene:podiumAssisted}=useGLTF("./AssistedVisionPodium.glb")

    const {scene:selfFrame}=useGLTF("./selfDrivingPhoto.glb")
    const {scene:deskFrame}=useGLTF("./DeskCompPhoto.glb")
    const {scene:murphyFrame}=useGLTF("./Mr.murphy.glb")
    const {scene:safariFrame}=useGLTF("./AISafari.glb")
    const {scene:mathsFrame}=useGLTF("./AIMaths.glb")
    const {scene:kicksFrame}=useGLTF("./SkillKicksPhoto.glb")

const occlude=useRef()

const { actions, mixer } = useAnimations(animations, podium);

useEffect(() => {
  if (actions) {
    // Play the animation at index 1 (adjust index as needed)
    const animationAction = actions[animations[1].name];
    if (animationAction) {
      animationAction.play();
      animationAction.timeScale = 0.5
    }
  }
}, [actions, animations]);

useFrame((state, delta) => mixer.update(delta));


    return (
      <>

 <ambientLight intensity={0.3}/> 
 <directionalLight castShadow position={[10,10,10]} intensity={0.3}/> 
        
        <Projects   position={[0,-18,0]}/>
        {/* <OrbitControls/> */}
        <Floor />
 {/* robotics  */}
        <Text3D
      position={[110, 133, -23]}
     size={6.5}
        font="./fonts/Bebas Neue_Regular.json"
        bevelSize={0.00001}
        bevelOffset={0.001}
        bevelThickness={0.7}
        bevelEnabled={true} 
      scale={[1,1,0.7]}
        
      >

 |Robotics


<meshStandardMaterial metalness={0.001} roughness={0} color="#3b3939"/>
      </Text3D>
   <primitive scale={2.8} position={[130, 106.5, -16]} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(-80),THREE.MathUtils.degToRad(0)]} object={scene}/>
   <primitive scale={10.8} position={[125, 85.3, 20]} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(90),THREE.MathUtils.degToRad(0)]} object={crab }/>
   <primitive scale={9.8} position={[263, 106, -30]} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(90),THREE.MathUtils.degToRad(0)]} object={pot3 }/>
   <primitive scale={9.8} position={[227, 106, -30]} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(90),THREE.MathUtils.degToRad(0)]} object={pot2 }/>

   <primitive scale={1.8} position={[118, 105, -13]} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(30),THREE.MathUtils.degToRad(0)]} object={SkillBlue }/>
   <primitive scale={1.8} position={[120, 105, -13]} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(30),THREE.MathUtils.degToRad(0)]} object={SkillRed }/>
      {/* <Text3D
      position={[145, 114, -23]}
     size={27.6}
        font="./fonts/Bebas Neue_Regular.json"
        bevelSize={0.00001}
        bevelOffset={0.001}
        bevelThickness={0.7}
        bevelEnabled={true} 
      scale={[0.8,1,1]}
        
      >

|


<meshStandardMaterial metalness={0.001} roughness={0} color="#595757"/>
      </Text3D> */}

      <Text3D
      position={[165, 127, -23]}
     size={6}
     bevelSize={0.001}
     bevelOffset={0.001}
     bevelThickness={0.4}
     bevelEnabled={true} 
        font="./fonts/Bebas Neue_Regular.json"
       
      >
01/7
<meshStandardMaterial metalness={0.001} roughness={0} color="#019adb"/>
      </Text3D>

      <Text3D
      position={[165, 115, -21]}
     size={10}
        font="./fonts/Bebas Neue_Regular.json"
        bevelSize={0.001}
        bevelOffset={0.001}
        bevelThickness={0.2}
        bevelEnabled={true} 
      >
Mr.Murphy
<meshStandardMaterial metalness={0.001} roughness={0} color="#019adb"/>
      </Text3D>

      <Plane scale={[80,38,1]}    position={[245, 125, -83]}>
<Suspense fallback={<meshStandardMaterial wireframe={true} />}>
          <VideoPlane src={"./crab.mp4"} />
  </Suspense>
</Plane>
<primitive position={[0,-19,10]}  object={podium}  />
<primitive scale={50} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(-90),THREE.MathUtils.degToRad(0)]} position={[267,108,-89.5]} object={murphyFrame}/>
<Clone scale={50} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(90),THREE.MathUtils.degToRad(0)]} position={[225.5,108,12]} object={murphyFrame}/>

<primitive scale={50} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(-90),THREE.MathUtils.degToRad(0)]} position={[431.4,108,-244]} object={kicksFrame}/>
<Clone scale={50} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(90),THREE.MathUtils.degToRad(0)]} position={[349,108,166.5]} object={kicksFrame}/>

<primitive scale={50} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(-90),THREE.MathUtils.degToRad(0)]} position={[531.4,-508,304]} object={deskFrame}/>
<Clone scale={50} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(90),THREE.MathUtils.degToRad(0)]} position={[510,106.5,255.4]} object={deskFrame}/>
  <OrbitControls/>

<MovingSpot rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(90),THREE.MathUtils.degToRad(90)]}  color="#0c8cbf"       position={[247, 117, -26]} />

      <Text3D
            position={[280, 127, -21]}    
     size={6}
     bevelSize={0.001}
     bevelOffset={0.001}
     bevelThickness={0.4}
     bevelEnabled={true} 
        font="./fonts/Bebas Neue_Regular.json"
       
      >
02/7
<meshStandardMaterial metalness={0.001} roughness={0} color="#fad016"/>
      </Text3D>

      <Text3D
      zIndexRange={[3, 0]}
      position={[280, 115, -21]}
     size={10}
        font="./fonts/Bebas Neue_Regular.json"
        bevelSize={0.001}
        bevelOffset={0.001}
        bevelThickness={0.2}
        bevelEnabled={true} 
      >
Skill Kicks
<meshStandardMaterial metalness={0.001} roughness={0} color="#fad016"/>
      </Text3D>
{/* <Html prepend   zIndexRange={[1, 0]} scale={3.5} transform   position={[365, 139, -81.9]} wrapperClass='screenfixed'>
<video  ref={videoRef} autoPlay loop muted  >
                        <source src='./aiCar.mp4' type="video/mp4" />
                        Your browser does not support the video tag.
                    </video> 
</Html> */}

<Plane scale={[53.5,35.5,1]}  position={[389.7, 123, -71.5]}>
<Suspense fallback={<meshStandardMaterial wireframe={true} />}>
          <VideoPlane src={"./futurama.mp4"} />
  </Suspense>
</Plane>
{/* <OrbitControls/> */}
<Sofa  scale={1.3} position={[693,-50,-60]} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(90),THREE.MathUtils.degToRad(0)]}/>
<primitive scale={7} position={[370,105,-40]} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(0)]} object={arena }/>

      <Text3D
     position={[442, 132, -19]}
     size={5}
     bevelSize={0.001}
     bevelOffset={0.001}
     bevelThickness={0.4}
     bevelEnabled={true} 
     font="./fonts/Bebas Neue_Regular.json"
      >
03/7
<meshStandardMaterial metalness={0.001} roughness={0} color="#c949a8"/>
      </Text3D>

      <Text3D
      position={[442, 122, -19]}
     size={7.5}
        font="./fonts/Bebas Neue_Regular.json"
        bevelSize={0.001}
        bevelOffset={0.001}
        bevelThickness={0.2}
        bevelEnabled={true} 
      >
Desk Companion 
<meshStandardMaterial metalness={0.001} roughness={0} color="#c949a8"/>
      </Text3D>
      <Text3D
   position={[442, 112, -19]}
     size={7.5}
        font="./fonts/Bebas Neue_Regular.json"
        bevelSize={0.001}
        bevelOffset={0.001}
        bevelThickness={0.2}
        bevelEnabled={true} 
      >
Robot
<meshStandardMaterial metalness={0.001} roughness={0} color="#c949a8"/>
      </Text3D>

      <primitive scale={0.6} position={[517, 119, -60]} object={DeskComp}/>
      {/* robotics  */}

      {/* articial */}

      <Text3D
       position={[557, 125, -17]}
     size={8}
        font="./fonts/Bebas Neue_Regular.json"
        bevelSize={0.00001}
        bevelOffset={0.001}
        bevelThickness={0.7}
        bevelEnabled={true} 
      scale={[1,1,0.7]}
        
      >

 |Artificial 


<meshStandardMaterial metalness={0.001} roughness={0} color="#3b3939"/>
      </Text3D>
      <Text3D
       position={[569, 112, -17]}
     size={8}
        font="./fonts/Bebas Neue_Regular.json"
        bevelSize={0.00001}
        bevelOffset={0.001}
        bevelThickness={0.7}
        bevelEnabled={true} 
      scale={[1,1,0.7]}
        
      >

Intelligence 


<meshStandardMaterial metalness={0.001} roughness={0} color="#3b3939"/>
      </Text3D>

      <Text3D
     position={[640, 133, -19]}
     size={5}
     bevelSize={0.001}
     bevelOffset={0.001}
     bevelThickness={0.4}
     bevelEnabled={true} 
     font="./fonts/Bebas Neue_Regular.json"
      >
04/7
<meshStandardMaterial metalness={0.001} roughness={0} color="#019adb"/>
      </Text3D>

      <Text3D
      position={[640, 122, -19]}
     size={8.4}
        font="./fonts/Bebas Neue_Regular.json"
        bevelSize={0.001}
        bevelOffset={0.001}
        bevelThickness={0.2}
        bevelEnabled={true} 
      >
AI Math 
<meshStandardMaterial metalness={0.001} roughness={0} color="#019adb"/>
      </Text3D>
      <Text3D
      position={[640, 112, -19]}
     size={8.4}
        font="./fonts/Bebas Neue_Regular.json"
        bevelSize={0.001}
        bevelOffset={0.001}
        bevelThickness={0.2}
        bevelEnabled={true} 
      >
Solver
<meshStandardMaterial metalness={0.001} roughness={0} color="#019adb"/>
      </Text3D>

 
  
      <Text3D
     position={[785, 128, -19]}
     size={6}
     bevelSize={0.001}
     bevelOffset={0.001}
     bevelThickness={0.4}
     bevelEnabled={true} 
     font="./fonts/Bebas Neue_Regular.json"
      >
05/7
<meshStandardMaterial metalness={0.001} roughness={0} color="#c0a51c"/>
      </Text3D>
      <Text3D
      position={[785, 116, -19]}
     size={10}
        font="./fonts/Bebas Neue_Regular.json"
        bevelSize={0.001}
        bevelOffset={0.001}
        bevelThickness={0.2}
        bevelEnabled={true} 
      >
Bender
<meshStandardMaterial metalness={0.001} roughness={0} color="#c0a51c"/>
      </Text3D>
 

      
      <Text3D
     position={[975, 128, -19]}
     size={6}
     bevelSize={0.001}
     bevelOffset={0.001}
     bevelThickness={0.4}
     bevelEnabled={true} 
     font="./fonts/Bebas Neue_Regular.json"
      >
06/7
<meshStandardMaterial metalness={0.001} roughness={0} color="#9a207d"/>
      </Text3D>

      <Text3D
      position={[974, 116, -19]}
     size={10}
        font="./fonts/Bebas Neue_Regular.json"
        bevelSize={0.001}
        bevelOffset={0.001}
        bevelThickness={0.2}
        bevelEnabled={true} 
      >
AI Safari
<meshStandardMaterial metalness={0.001} roughness={0} color="#9a207d"/>
      </Text3D>

      <Text3D
     position={[1074, 132, -19]}
     size={5}
     bevelSize={0.001}
     bevelOffset={0.001}
     bevelThickness={0.4}
     bevelEnabled={true} 
     font="./fonts/Bebas Neue_Regular.json"
      >
07/7
<meshStandardMaterial metalness={0.001} roughness={0} color="#9a207d"/>
      </Text3D>

      <Text3D
      position={[1074, 120, -19]}
     size={8.5}
        font="./fonts/Bebas Neue_Regular.json"
        bevelSize={0.001}
        bevelOffset={0.001}
        bevelThickness={0.2}
        bevelEnabled={true} 
      >
Assisted Vision 
<meshStandardMaterial metalness={0.001} roughness={0} color="#9a207d"/>
      </Text3D>
      <Text3D
      position={[1074, 109, -19]}
     size={8.5}
        font="./fonts/Bebas Neue_Regular.json"
        bevelSize={0.001}
        bevelOffset={0.001}
        bevelThickness={0.2}
        bevelEnabled={true} 
      >
Goggles
<meshStandardMaterial metalness={0.001} roughness={0} color="#9a207d"/>
      </Text3D>

      <CharacterModel   position={[1160, 103, -25]} scale={12} />



    <primitive   
     position={[914.5, 97, 1.5]}
     rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(50),THREE.MathUtils.degToRad(0)]}
     scale={1.3}
      object={selfTrack}/>



<primitive   
     position={[935.5, 106.5, -20.5]}
     rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(50),THREE.MathUtils.degToRad(0)]}
     scale={3.3}
      object={aiCar}/>
 <primitive   
     position={[955.5, 106, -65.5]}
     rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(50),THREE.MathUtils.degToRad(0)]}
     scale={15.3}
      object={pot4}/>
       <primitive   
     position={[883.5, 106, -70.5]}
     rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(50),THREE.MathUtils.degToRad(0)]}
     scale={15.3}
      object={pot1}/>

      <Plane scale={[53,35,1]}  position={[733.2, 123, -71.5]}>
<Suspense fallback={<meshStandardMaterial wireframe={true} />}>
          <VideoPlane src={"./math.mp4"} />
  </Suspense>
</Plane>
<Plane scale={[45,25,1]}  position={[1043.2, 125, -23]}>
<Suspense fallback={<meshStandardMaterial wireframe={true} />}>
          <VideoPlane src={"./safari3.mp4"} />
  </Suspense>
</Plane>
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