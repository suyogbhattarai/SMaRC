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



function Museum(props,{hovered}) {
  const location = useLocation();
  const [circulartable,setCircularTable]=useState(false)

  return (
    <>
      {/* <OrbitControls makeDefault/> */}
  <Building1/>

<Floor position={[10,57,80]} scale={0.5}  />
  
  <Table scale={0.5} onPointerOver={props.onPointerOver}
      onPointerOut={props.onPointerOut}   position={[ -25.197582617751709,  118.41265385835948,  36.76075189597355]}/>
  <Tv onPointerOver={props.onPointerOver2}
      onPointerOut={props.onPointerOut2} />
  <TvTable onPointerOver={props.onPointerOver3}
      onPointerOut={props.onPointerOut3}   position={[0,76,0]}/>


  <CharacterModel onPointerOver={props.onPointerOver3}
      onPointerOut={props.onPointerOut3} scale={8} position={[-35, 116.4, 38]} rotation={[0,THREE.MathUtils.degToRad(90),0]}        />
{location.pathname==="/vision" ?(<>


</>):(<>
  <e.mesh theatreKey="gocart">
<group>
<GoCart scale={2} position={[0,117.64428088797158,230.64123462713843]} />

</group>
</e.mesh>
  </>)}




</>


    
   
    
    
 
  )
}

export default Museum