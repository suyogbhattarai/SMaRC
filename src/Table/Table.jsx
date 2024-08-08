import React, { useRef } from 'react'
import { OrbitControls, TransformControls, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

function Table(props) {
    const {scene}=useGLTF("./CircleTable.glb")
    const tableRef=useRef()
   
  return (
    <>
    
   
    <group {...props}   onPointerOver={props.onPointerOver}
      onPointerOut={props.onPointerOut} >
    <primitive object={scene}/>
    </group>
   
    </>
  )
}

export default Table