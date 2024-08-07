import React from 'react'
import { GradientTexture, GradientType, TransformControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Tree from './Tree'
import Tree2 from './Tree2'
import Bush from './Bush'
import Vase from './Vase'

export default function Floor(props) {
  return (
    <group {...props} dispose={null}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[100, 115, -140]}>
        <circleGeometry args={[1500, 1500]} />
        <meshBasicMaterial>
          <GradientTexture
            stops={[0, 0.39, 1]}
            colors={['#5e4712', '#050308', '#050308']}
            size={1024}
            width={1024}
            type={GradientType.Radial}
          />
        </meshBasicMaterial>
      </mesh>
        <Tree scale={[300, 300, 300]} position={[100, 130, 200]} />
        <Tree2 scale={[200, 200, 200]} rotation={[0, 0, 0]} position={[-360, 123, -180]} />
        {/* <Bush /> */}
        <Vase />
    </group>
  )
}
