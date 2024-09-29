
import React, { useState, useRef, useEffect } from "react";
import { Sparkles, ScrollControls, Scroll, Float, Sky,Cloud, PresentationControls,Html,Text, useScroll, OrbitControls, Text3D, TransformControls, useGLTF, useCamera, RoundedBox } from "@react-three/drei";
import { Physics } from "@react-three/rapier";

import "./home.css"
import { useFrame,useThree } from "@react-three/fiber";
import { editable as e } from '@theatre/r3f';
import { Debug } from '@react-three/rapier'

import { getProject, val } from "@theatre/core";
import { PerspectiveCamera, SheetProvider, useCurrentSheet } from '@theatre/r3f';
import Base from "../Base/Base";
import Light from "../Light/Light";
import Lamp from "../Lamp/Lamp";
import Laptop from "../Laptop/Laptop";
import Coffee from "../Coffee/Coffee";
import Clock from "../Clock/Clock";
import Calendar from "../Calendar/Calendar";
import Projects from "../Projects/Projects";
import Passage from "../Passage/Passage";
import homeCamera from "./homeCamera.json"

function Home() {

  const [sheet, setSheet] = useState(null);

  useEffect(() => {
    const projectSheet = getProject("home camera",{state:homeCamera}).sheet("Scene");
    setSheet(projectSheet);
  }, []);
  return (
 
        <>

{sheet && (
        <ScrollControls pages={10} damping={0.2} > 
          <SheetProvider sheet={sheet}>
            <SceneHome />
          </SheetProvider>
        </ScrollControls>
      )}
   
    </>
    
  )
}

export default Home

function SceneHome() {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  const { camera } = useThree();




  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);

    const scrollPosition = scroll.offset * sequenceLength;
    sheet.sequence.position = scrollPosition;

    // Save the scroll position to local storage
    localStorage.setItem('scrollPosition', scrollPosition);
  

  });




const smarcRef=useRef()
const smarcRef2=useRef()
const popupText=useRef()
useFrame(()=>{
  console.log("smarc ",smarcRef.current.position)
  console.log("smarc2 ",smarcRef2.current.position)
  console.log("camera position",camera.position)
  // _Vector3 {x: 0.15298185067368758, y: 35.91481829250974, z: 57.61333649629416}
})
const {scene:laptop}=useGLTF("./laptop.gltf")
const {scene: calender}=useGLTF("./Calendar.glb")
const {scene: coffee}=useGLTF("./Espresso coffee.glb")
const {scene: clock}=useGLTF("./Digital clock.glb")
const {scene: lamp}=useGLTF("./tablelamp.glb")

// pointlight _Vector3 {x: 0.2258011859082405, y: 31.45829242827939, z: 1.8823803032456081}
// Home.jsx:70 smarc  _Vector3 {x: -1.410634410627475, y: 25.823114750538135, z: -0.612479641707653}
// Home.jsx:71 smarc2  _Vector3 {x: -2.0951997586805735, y: 26.243091154070918, z: -1.151559845133192}
  return (
    <>



<Base scale={[1.6,1.4,6]}/>

{/* <TransformControls object={smarcRef}/>
<TransformControls object={smarcRef2}/> */}
  {/* pointlight _Vector3 {x: -0.43734978731068397, y: 37.18117590553355, z: 4.391095159975849}
  Light.jsx:52 pointlight2 _Vector3 {x: 2.1895431847864284, y: 34.92827891239507, z: 3.2955480059787945}
  Home.jsx:70 smarc  _Vector3 {x: -0.07922509061060591, y: 35.252384249842024, z: 5.386956191777635}
  Home.jsx:71 smarc2  _Vector3 {x: 0.10436775217106464, y: 35.81990453915361, z: 5.415015039180895}
  Home.jsx:72 camera position _Vector3 {x: 0.15298185009016974, y: 35.91481829252776, z: 57.61333649629918}
  Light.jsx:50 directionallight _Vector3 {x: 119.14472584487132, y: 128.57847666580062, z: 98.19951270362483}
  Light.jsx:51 pointlight _Vector3 {x: -0.43734978731068397, y: 37.18117590553355, z: 4.391095159975849} */}
      <Text
      ref={smarcRef2}
         font="./text/EVIL EMPIRE.OTF"
         letterSpacing={0.2}
      color="#edae2f"
      position={[ -0.2,  37.031208354384356,  6.58553864381516]}
fontSize={1.8}
      castShadow
      >
 SMaRC
      </Text>
   <e.mesh theatreKey="popupText">
   <Text

         font="./text/EVIL EMPIRE.OTF"
         letterSpacing={0.2}
         
      color="#e6e5e3"
      position={[ 0.1, 30.131208354384356,  35.698553864381516]}
fontSize={2.5}
      castShadow
      >
 SMaRC
      </Text>
      {/* <OrbitControls makeDefault/>   */}
   </e.mesh>


   <RoundedBox
        args={[6, 3, 0.2]} // Width, Height, Depth
        radius={0.15}      // Corner radius
        smoothness={4}
        position={[2.3,25 ,-28]}
   >
          <Text
ref={smarcRef}

  fontSize={1}
       font="./text/Poppins-SemiBold.ttf"
        color="#76767d"
  
        position={[0, 0, 0.2]}
    
      castShadow
      >

 SKILL MUSEUM & RESEARCH CENTER



      </Text>
    <meshStandardMaterial color={"white"}/>
   </RoundedBox>
    
      <Text
ref={smarcRef}

  fontSize={0.296}
       font="./text/Poppins-SemiBold.ttf"
        color="white"
  
      position={[-0.3,  35.97518259334963,  6.6317314037115]}
    
      castShadow
      >

 SKILL MUSEUM & RESEARCH CENTER



      </Text>
{/* <OrbitControls makeDefault/> */}
{/* <gridHelper  position={[30,0,-50]} rotation={[Math.PI/2,0,0]} args={[100, 20,"red",]} /> */}
<Laptop scale={0.75} position={[0,23.3+9.2,7]} />
<Calendar scale={[0.1,0.07,0.07]} position={[-5.9,23.3+9.6,1]} rotation={[0,0.7,0]}/>

<Coffee scale={0.0075} position={[2.3,23.49+9.37 ,6]}/>
    
<Lamp scale={[0.3,0.3,0.3]} position={[5,23.49+9.4,2]}/>
<Clock scale={[0.08,0.1,0.2]} position={[-2.3,23.5+9.37,6]}/>

   
   
 
<Light/>

      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault 
        position={[0, 0, 0]}
      />



    </>
  );
}
