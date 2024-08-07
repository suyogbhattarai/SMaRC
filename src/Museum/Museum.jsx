import React, { useRef, useState } from 'react'
import Building1 from '../Building1/Building1'
import { useLocation } from 'react-router-dom'
import CharacterModel from '../CharacterModel/CharacterModel';
import * as THREE from "three"
import Table from '../Table/Table';
import { useFrame } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import "./museum.css"
import { Tv } from '../Tv/Tv';
import { TvTable } from '../Interface/Tvtable/TvTable';
import Floor from '../Floor/Floor';
import GoCart from '../GoCart/GoCart';
import { editable as e } from '@theatre/r3f';
import { Selection, Select, EffectComposer, Outline } from '@react-three/postprocessing'
import Sofa from './Sofa';
import MiniTable from './MiniTable';
import Statue from './Statue';
import Book from './Book';
import Carpet from './Carpet';


function Museum(props,{hovered}) {
  const location = useLocation();
  const [circulartable,setCircularTable]=useState(false)

  return (
    <>
    <ambientLight intensity={0.5} />
  <Building1/>
  <Sofa  onPointerOver={props.onPointerOver4}
      onPointerOut={props.onPointerOut4}/>
  <Statue  onPointerOver={props.onPointerOver5}
      onPointerOut={props.onPointerOut5} position={[-13.5, 125 , -70]} scale={[3, 3, -3]} rotation={[-0.1, -Math.PI / 2, 0]} />
  <MiniTable  onPointerOver={props.onPointerOver5}
      onPointerOut={props.onPointerOut5} position={[42,122,-33]} scale={[3.5,3.5,3.5]} />
<Floor position={[10,57,80]} scale={0.5}  />
<Carpet position={[5,119,25]} scale={[20,20,20]} rotation={[0,1.55,0]}/>
<Book position={[-26.8,123,37.6]} scale={[-1.5,1.5,-1.5]} rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(90),THREE.MathUtils.degToRad(0)]
}/>
<Table scale={0.6} onPointerOver={props.onPointerOver}
      onPointerOut={props.onPointerOut}   position={[ -31.197582617751709,  116.41265385835948,  36.76075189597355]} />
  <Tv onPointerOver={props.onPointerOver2}
      onPointerOut={props.onPointerOut2} />
  <TvTable onPointerOver={props.onPointerOver3}
      onPointerOut={props.onPointerOut3}   position={[0,76,0]}/>        
  <CharacterModel onPointerOver={props.onPointerOver3}
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