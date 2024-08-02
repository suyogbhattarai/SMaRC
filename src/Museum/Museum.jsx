import React, { useRef } from 'react'


import Building1 from '../Building1/Building1'

import { useLocation } from 'react-router-dom'
import CharacterModel from '../CharacterModel/CharacterModel';
import * as THREE from "three"


function Museum() {
  const location = useLocation();
  return (
    <>
      
  <Building1/>
  <CharacterModel scale={8} position={[-35, 119.8, 25]} rotation={[0,THREE.MathUtils.degToRad(90),0]}/>












</>


    
   
    
    
 
  )
}

export default Museum