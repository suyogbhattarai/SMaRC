import React, { useRef } from 'react';
import { useGLTF, Text } from '@react-three/drei';

export default function DeskNamePlate({name,...props}) {
  const { nodes, materials } = useGLTF('/StandWithNamePlate.glb');

  return (
    <group {...props} dispose={null}>
      {/* Existing geometries */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stand.geometry}
        material={nodes.Stand.material}
        scale={[2, 0.2, 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FacePlate.geometry}
        material={materials['Material.004']}
        position={[0, 0, -2.019]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1, 1, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lymana_screwheads.geometry}
        material={materials.initialShadingGroup}
        position={[-0.887, 0.29, -1.942]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.063, 0.119, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lymana_screwheads001.geometry}
        material={materials['initialShadingGroup.001']}
        position={[0.871, 0.29, -1.942]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.063, 0.119, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lymana_screwheads002.geometry}
        material={materials['initialShadingGroup.002']}
        position={[0.871, -0.291, -1.942]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.063, 0.119, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lymana_screwheads003.geometry}
        material={materials['initialShadingGroup.003']}
        position={[-0.89, -0.291, -1.942]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.063, 0.119, 0.119]}
      />

      {/* Add text to the nameplate */}
      <Text
        position={[0, 0.05, -2.3]} // Position the text on the nameplate
        fontSize={0.2} // Adjust font size for visibility
        color="white" // White text color
        anchorX="center"
        anchorY="middle"
        rotation={[0,3.15,0]}
        fontStyle='Jost'
      >
        {name}
      </Text>
    </group>
  );
}

useGLTF.preload('/StandWithNamePlate.glb');
