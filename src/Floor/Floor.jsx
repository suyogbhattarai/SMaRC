import React from 'react'
import { Box, Reflector,useTexture,useGLTF,MeshReflectorMaterial } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'

import { useLoader } from '@react-three/fiber'

function Floor() {
  const [colorMap, displacementMap,  aoMap] = useTexture([
    '/Textures/image.jpg',
    '/Textures/disp.png',
    '/Textures/ao.jpg',


  ]);

  // const {scene}=useGLTF("./floor.gltf")
  return (
    <>
   <Reflector
        resolution={1024}
        args={[1500, 500]}
        mirror={100}
        mixBlur={0.5}
        mixStrength={0.5}
        depthScale={100}
        debug={0}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[590, 106, -190]}
      >
        {(Material) => (
          <MeshReflectorMaterial 
            map={colorMap}
            displacementMap={displacementMap}
            aoMap={aoMap}
            displacementScale={1}
          />
        )}
      </Reflector>
      
      <directionalLight />
    </>
 
  )
}

export default Floor
