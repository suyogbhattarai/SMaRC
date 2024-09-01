import { SpotLight } from '@react-three/drei'
import React from 'react'

function Light() {
  return (
    <>
        <ambientLight intensity={0.6}/> 
 <directionalLight castShadow position={[110,700,100]} intensity={1}/>
  
    </>
  )
}

export default Light