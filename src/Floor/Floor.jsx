import React from 'react'
import { Box, Reflector,useTexture } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'

import { useLoader } from '@react-three/fiber'

function Floor() {
  const [colorMap, displacementMap,  aoMap,normal,roughnes] = useTexture([
    '/Textures/image.jpg',
    '/Textures/disp.png',
    '/Textures/ao.jpg',
    "/Textures/normal.jpg",
    "/Textures/roughness.jpg"

  ]);
  return (
    <>
   <Reflector
  resolution={1024}
  args={[100, 100]} // Plane size
  mirror={1} // Mirror strength
  mixBlur={0.75} // How much blur
  mixStrength={2} // Strength of the reflection
  rotation={[-Math.PI / 2, 0, 0]}
  position={[528, 1, -90]} // Positioning
  depthScale={1} // Influence of depth on reflection
>
  {(Material, props) => (
    <meshStandardMaterial
      {...props}
      roughness={0.01}
      metalness={0.1}
      map={colorMap}
      displacementMap={displacementMap}
      normalMap={normal}
      roughnessMap={roughnes}
      displacementScale={0}
      normalScale={[0.5,0.5,0.5]}
 
  
    />
  )}
</Reflector>
  <directionalLight/>
    </>
 
  )
}

export default Floor
