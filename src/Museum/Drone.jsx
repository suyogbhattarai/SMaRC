import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Drone(props) {
  const { nodes, materials } = useGLTF('/futuristic_surveillance_drone.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere__0.geometry}
          material={materials['Scene_-_Root']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/futuristic_surveillance_drone.glb')
