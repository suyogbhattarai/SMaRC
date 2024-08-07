import { useGLTF, Clone } from '@react-three/drei';
import React, {useRef} from 'react'


const Bush = () => {
    const scene=useGLTF('./bush.glb')
  return (
    <>
      <primitive
      object={scene}
        />  
    <Clone object={scene.scene} position={[90,214,-10]} scale={[20,20,20]} />
    <Clone object={scene.scene} position={[-110,214,-180]} scale={[20,20,20]} rotation={[0,-1.5,0]}/>
    <Clone object={scene.scene} position={[-110,214,-180]} scale={[20,20,20]} rotation={[0,-1.5,0]}/>
    </>
  )
}


export default Bush