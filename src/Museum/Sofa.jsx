import { useGLTF, Clone } from '@react-three/drei';
import React, {useRef} from 'react'

const Sofa = (props) => {
    const scene=useGLTF('./sofa.glb')
  return (
    <>
    <group {...props}>
    <primitive
      object={scene}
        />  
    <Clone object={scene.scene} position={[-15,120,60]} scale={[-0.2,0.2,0.2]} rotation={[0,1.5,0]}/>
    <Clone object={scene.scene} position={[-15,120,0]} scale={[-0.2,0.2,0.2]} rotation={[0,-1.5,0]}/>
    </group>
 
    </>
  )
}


export default Sofa