import React, { useRef } from 'react'
import { TransformControls, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

function GoCart(props) {
    const {scene}=useGLTF("./NewGoCart.glb")
    const goCart=useRef();


  return (
    <>

    <group >
    <primitive {...props} object={scene}/>
    </group>
    </>
  )
}

export default GoCart