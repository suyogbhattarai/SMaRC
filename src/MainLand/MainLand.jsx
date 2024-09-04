import { RigidBody, CuboidCollider } from '@react-three/rapier';
import React from 'react';
import * as THREE from 'three';
import { useTexture, Text,useGLTF,Float } from '@react-three/drei';
import Piano from '../Piano/Piano';



function MainLand({ startTour, setStartTour }) {
    const { scene } = useGLTF('./Island.glb');


  return (
    <>

<RigidBody position={[30,0,0]} type='fixed' restitution={0.2} friction={1}>
  <CuboidCollider args={[2,2,5]} position={[0,10,0]}/>
        <primitive scale={1}  rotation={[0,8.5,-0.05 ]} object={scene}/>

    </RigidBody>

 
    </>
  )
}

export default MainLand