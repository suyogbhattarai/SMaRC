import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Pedestal(props) {
  const { nodes, materials } = useGLTF('/pedestal.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pedestal_pedestal_blinn_0.geometry}
        material={materials.pedestal_blinn}
        position={[0, 4.802, 0]}
        scale={8.675}
      />
    </group>
  )
}

useGLTF.preload('/pedestal.glb')
