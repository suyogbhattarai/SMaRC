import { SpotLight } from '@react-three/drei'
import React from 'react'

function Light() {
  return (
    <>
        <ambientLight intensity={0.3}/> 
 <directionalLight castShadow position={[110,700,100]} intensity={3}/>
  
    </>
  )
}

export default Light