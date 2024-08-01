import { TransformControls, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'





function Building2(props) {
    const { scene } = useGLTF('./building2.glb');
    const vrRoom=useRef()
    useFrame(()=>{
        console.log("vrroom",vrRoom.current.position)
    })
  return (
    <>
    {/* <TransformControls object={vrRoom} /> */}
    <group ref={vrRoom} {...props}>
    <primitive    object={scene}/>
    </group>
   
    </>
  )
}

export default Building2