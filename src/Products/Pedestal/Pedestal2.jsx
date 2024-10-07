// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'

// export default function Pedestal2(props) {
//   const { nodes, materials } = useGLTF('/podium.glb')
//   return (
//     <group {...props} dispose={null}>
//       <group rotation={[-Math.PI / 2, 0, 0]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.polySurface2_podium_0.geometry}
//           material={materials.podium}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={0.01}
//         />
//       </group>
//     </group>
//   )
// }

// useGLTF.preload('/podium.glb')