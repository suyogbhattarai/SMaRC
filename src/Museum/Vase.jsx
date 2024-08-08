import { useGLTF, Clone } from '@react-three/drei';
import React, {useRef} from 'react'


const Vase = () => {
    const scene=useGLTF('./vase1.glb')
  return (
    <>
      <primitive
      object={scene}
        />  
    <Clone object={scene.scene} position={[50,120,18]} scale={[12,12,12]} />
    <Clone object={scene.scene} position={[50,120,60]} scale={[12,12,12]} />
    </>
  )
}


export default Vase