import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function MiniTable(props) {
  const { nodes, materials } = useGLTF('/miniTable.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_0.geometry}
          material={materials['Material.001']}
          position={[0.027, -0.008, 0.495]}
          scale={[2.361, 0.625, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_0.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_0.geometry}
          material={materials.Material}
          position={[1.3, 0, -0.442]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.238, 0.954, 0.672]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_0.geometry}
          material={materials.Material}
          position={[-1.3, 0, -0.442]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.238, 0.959, 0.672]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_0.geometry}
          material={materials.Material}
          position={[0.018, 0, -0.634]}
          scale={[0.769, 0.918, 0.374]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/miniTable.glb')
