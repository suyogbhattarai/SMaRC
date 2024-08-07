import { useGLTF, Clone } from '@react-three/drei';
import React, {useRef} from 'react'

const Sofa = () => {
    const scene=useGLTF('./sofa.glb')
  return (
    <>
      <primitive
      object={scene}
        />  
    <Clone object={scene.scene} position={[-15,120,60]} scale={[-0.3,0.3,0.3]} rotation={[0,1.5,0]}/>
    <Clone object={scene.scene} position={[-15,120,0]} scale={[-0.3,0.3,0.3]} rotation={[0,-1.5,0]}/>
    </>
  )
}


export default Sofa