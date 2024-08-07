
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Tree2(props) {
  const { nodes, materials } = useGLTF('/tree.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder2_TreeBase_0.geometry}
            material={materials.TreeBase}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder2_PotBase_0.geometry}
            material={materials.PotBase}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder2_NeonStripPot_0.geometry}
            material={materials.NeonStripPot}
          />
          <mesh
            castShadow
            receiveShadow   
            geometry={nodes.pCylinder2_Grass_0.geometry}
            material={materials.Grass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder2_Leaves_0.geometry}
            material={materials.Leaves}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/tree.glb')
