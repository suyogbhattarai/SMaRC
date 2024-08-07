import { useGLTF, Clone } from '@react-three/drei';
import React, {useRef} from 'react'


const Vase = () => {
    const scene=useGLTF('./vase1.glb')
  return (
    <>
      <primitive
      object={scene}
        />  
    <Clone object={scene.scene} position={[80,124,-125]} scale={[20,20,20]} />
    <Clone object={scene.scene} position={[80,124,-40]} scale={[20,20,20]} />
    </>
  )
}


export default Vase