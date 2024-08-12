import React, { useRef, useState } from 'react'
import Building1 from '../Building1/Building1'
import { useLocation } from 'react-router-dom'
import CharacterModel from '../CharacterModel/CharacterModel';
import * as THREE from "three"
import Table from '../Table/Table';
import { useFrame } from '@react-three/fiber';
import { Float, Html, OrbitControls, Text,Text3D } from '@react-three/drei';
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
import Butterfly from '../Butterfly/Butterfly';
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

  return (
    <>

    <ambientLight intensity={0.5} />
  <Building1/>
{/* <IngLogo position={[0,170,-600]} scale={15} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(90),THREE.MathUtils.degToRad(0)]}/> */}
  {/* <OrbitControls makeDefault/> */}
<SkillDrone position={[100, 154.5, 65]} scale={[10, 10, 10]} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(-30),THREE.MathUtils.degToRad(0)]}/>
  <Telescope position={[157, 148, 60]} scale={[10, 10, 10]} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(-60),THREE.MathUtils.degToRad(0)]}/>
  <Vase />
<Floor position={[0,100,0]}/>
  <Butterfly scale={23} position={[5,180,65]} rotation={[THREE.MathUtils.degToRad(90),THREE.MathUtils.degToRad(183),THREE.MathUtils.degToRad(-10)]}/>
  {/* <Text font={poppinsFont} color={"yellow"}  scale={7} position={[-13,179,65]}>Skill</Text>
  <Text  font={poppinsFont} color={"yellow"} scale={7} position={[30,179,65]}>Museum</Text> */}
  <Sofa  onPointerOver={props.onPointerOver4}
      onPointerOut={props.onPointerOut4}/>
  <Statue  onPointerOver={props.onPointerOver5}
      onPointerOut={props.onPointerOut5} position={[-13.5, 125 , -70]} scale={[3, 3, -3]} rotation={[-0.1, -Math.PI / 2, 0]} />
  <MiniTable  onPointerOver={props.onPointerOver5}
      onPointerOut={props.onPointerOut5} position={[42,122,-33]} scale={[3.5,3.5,3.5]} />
<Carpet position={[5,119,25]} scale={[20,20,20]} rotation={[0,1.55,0]}/>
<Book position={[-26.5,124,38.7]} scale={[-1,1,-1]} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(90),THREE.MathUtils.degToRad(0)]
}/>
<Table scale={2} onPointerOver={props.onPointerOver}
      onPointerOut={props.onPointerOut} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(90),THREE.MathUtils.degToRad(0)]}   position={[ -25.197582617751709,  122.41265385835948,  38.76075189597355]} />
  <Tv onPointerOver={props.onPointerOver2}
      onPointerOut={props.onPointerOut2} />
          <SmartDustbin  scale={2.5}  position={[137.28930814201183, 120.88183348706795, 5.79583968511831]}/>

  <TvTable onPointerOver={props.onPointerOver3}
      onPointerOut={props.onPointerOut3}   position={[0,76,0]}/>        
  <CharacterModel  onPointerOver={props.onPointerOver3}
      onPointerOut={props.onPointerOut3} scale={9} position={[-35, 116.4, 38]} rotation={[0,THREE.MathUtils.degToRad(90),0]}        />
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