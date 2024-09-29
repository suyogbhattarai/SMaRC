import React, { useRef, useState } from 'react'
import Building1 from '../Building1/Building1'
import { useLocation } from 'react-router-dom'
import CharacterModel from '../CharacterModel/CharacterModel';
import * as THREE from "three"
import Table from '../Table/Table';
import { useFrame } from '@react-three/fiber';
import { Clone, Float, Html, OrbitControls, Text,Text3D, useGLTF } from '@react-three/drei';
import "./museum.css"
import { Tv } from '../Tv/Tv';
import { TvTable } from '../Interface/Tvtable/TvTable';
import { editable as e } from '@theatre/r3f';
import { Selection, Select, EffectComposer, Outline } from '@react-three/postprocessing'
import Sofa from './Sofa';
import MiniTable from './MiniTable';
import Statue from './Statue';
import Book from './Book';
import Carpet from './Carpet';
import Butterfly from '../Butterfly(1)/Butterfly';
import poppinsFont from './Poppins-Bold.ttf'; 
import Floor from '../Floor/Floor';
import Vase from './Vase'
import Telescope from './Telescope';
import SkillDrone from './SkillDrone';  
import { Image } from '@react-three/drei';
import IngLogo from '../IngLogo/IngLogo';
import SmartDustbin from '../SmartDustbin/SmartDustbin';


function Museum(props,{hovered}) {
  const location = useLocation();
  const [circulartable,setCircularTable]=useState(false)

  const {scene}=useGLTF("./SkillRobotTest.glb")
const { scene: crab } = useGLTF("./CrabFinal.glb");
const { scene: SkillBlue } = useGLTF("./SKillKicksBlue.glb");
const { scene: SkillRed } = useGLTF("./SKillKicksRed.glb");
const {scene:murphyFrame}=useGLTF("./Mr.murphy.glb")
  return (
    <>

    <ambientLight intensity={0.5} />
    <Text3D
      position={[-45  , 150, -141]}
     size={6}
        font="./fonts/Bebas Neue_Regular.json"
        bevelSize={0.00001}
        bevelOffset={0.001}
        bevelThickness={0.7}
        bevelEnabled={true} 
      scale={[1,1,0.7]}
        
      >

 |Robotics


<meshStandardMaterial metalness={0.001} roughness={0} color="black"/>
      </Text3D>

      <primitive scale={2}      position={[-34  , 127.5, -133]} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(-80),THREE.MathUtils.degToRad(0)]} object={scene}/>
      <primitive scale={7.8}      position={[-56  , 111, -111]}  rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(90),THREE.MathUtils.degToRad(0)]} object={crab }/>

      <primitive scale={1}  position={[-31  , 125, -132]} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(30),THREE.MathUtils.degToRad(0)]} object={SkillBlue }/>
   <primitive scale={1}  position={[-30  , 125, -130]} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(30),THREE.MathUtils.degToRad(0)]} object={SkillRed }/>


   <Text3D
         position={[-10  , 148, -140]}
     size={6}
     bevelSize={0.001}
     bevelOffset={0.001}
     bevelThickness={0.4}
     bevelEnabled={true} 
        font="./fonts/Bebas Neue_Regular.json"
       
      >
01/7
<meshStandardMaterial metalness={0.001} roughness={0} color="#2a2533"/>
      </Text3D>
      <Text3D
         position={[-9  , 135, -140]}
     size={10}
               font="./fonts/Evil Empire_Regular.json"
        bevelSize={0.001}
        bevelOffset={0.001}
        bevelThickness={0.2}
        bevelEnabled={true} 
      >
Mr.
<meshStandardMaterial metalness={0.001} roughness={0} color="#2a2533"/>
      </Text3D>
      <Text3D
          position={[11  , 135, -140]}
     size={10}
               font="./fonts/Evil Empire_Regular.json"
        bevelSize={0.001}
        bevelOffset={0.001}
        bevelThickness={0.2}
        bevelEnabled={true} 
      >
Murphy
<meshStandardMaterial metalness={0.001} roughness={0} color="#584685"/>
      </Text3D>
      <primitive scale={48} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(-90),THREE.MathUtils.degToRad(0)]} position={[121  , 126, -205]} object={murphyFrame}/>
<Clone scale={55} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(90),THREE.MathUtils.degToRad(0)]}  position={[76.8  , 120, -103]} object={murphyFrame}/>
{/* <Clone scale={48} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(-90),THREE.MathUtils.degToRad(0)]} position={[122  , 126, -235.5]}object={murphyFrame}/> */}
<Clone scale={60} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(0)]} position={[38  , 116, -180.5]}object={murphyFrame}/>
  <Building1/>
{/* <IngLogo position={[0,170,-600]} scale={15} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(90),THREE.MathUtils.degToRad(0)]}/> */}
  {/* <OrbitControls makeDefault/> */}
<SkillDrone position={[110, 180.5, 65]} scale={[15, 15, 15]} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(-30),THREE.MathUtils.degToRad(0)]}/>
  <Telescope position={[157, 178, 60]} scale={[10, 10, 10]} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(-60),THREE.MathUtils.degToRad(0)]}/>
  <Vase position={[0,80,0]} />
  <IngLogo scale={[1,1.5,1.5]} position={[57, 153.7, 10]}/>
{/* <Floor position={[0,100,0]}/> */}
  <Butterfly scale={30} position={[25,233 ,58.5]} rotation={[THREE.MathUtils.degToRad(90),THREE.MathUtils.degToRad(183),THREE.MathUtils.degToRad(-10)]}/>
  {/* <Text font={poppinsFont} color={"yellow"}  scale={7} position={[-13,179,65]}>Skill</Text>
  <Text  font={poppinsFont} color={"yellow"} scale={7} position={[30,179,65]}>Museum</Text> */}
  <Sofa position={[0,5.8,0]}  onPointerOver={props.onPointerOver4}
      onPointerOut={props.onPointerOut4}/>
  {/* <Statue  onPointerOver={props.onPointerOver5}
      onPointerOut={props.onPointerOut5} position={[-13.5, 133 , -143]} scale={[3, 3, -3]} rotation={[-0.1, -Math.PI / 2, 0]} /> */}
  <MiniTable scale={[2,4,2]} onPointerOver={props.onPointerOver}
    onPointerOut={props.onPointerOut}rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(90),THREE.MathUtils.degToRad(0)]}   position={[ -25.197582617751709,  127.41265385835948,  38.76075189597355]}  /> 
      {/* <OrbitControls/> */}
<Carpet position={[5,125.5,25]} scale={[20,20,20]} rotation={[0,1.55,0]}/>
<Book position={[-25.8,128,39]} scale={[-1,1,-1]} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(90),THREE.MathUtils.degToRad(0)]
}/>
{/* <Table scale={2} 
      onPointerOut={props.onPointerOut} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(90),THREE.MathUtils.degToRad(0)]}   position={[ -25.197582617751709,  127.41265385835948,  38.76075189597355]} /> */}
  <Tv onPointerOver={props.onPointerOver2}
      onPointerOut={props.onPointerOut2} position={[0,10,0]} />
          <SmartDustbin  scale={2.5}  position={[137.28930814201183, 120.88183348706795, 5.79583968511831]}/>

  <TvTable onPointerOver={props.onPointerOver3}
      onPointerOut={props.onPointerOut3}   position={[0,83,0]}/>        
  <CharacterModel  onPointerOver={props.onPointerOver3}
      onPointerOut={props.onPointerOut3} scale={7} position={[-35, 123, 38]} rotation={[0,THREE.MathUtils.degToRad(90),0]}        />
{location.pathname==="/vision" ?(<>
</>):(<>
  {/* <e.mesh theatreKey="gocart">
<group>
<GoCart scale={2} position={[0,117.64428088797158,230.64123462713843]} />
</group>
</e.mesh> */}
  </>)}
</>
  )
}

export default Museum