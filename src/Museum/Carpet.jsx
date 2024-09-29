
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Carpet(props) {
  const { nodes, materials } = useGLTF('/carpet (1).glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.025}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box001_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[4.032, 0, 28.629]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/carpet (1).glb')
