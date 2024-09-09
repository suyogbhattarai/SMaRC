import React, { useState } from 'react';
import { Text3D } from '@react-three/drei';

function Interactions() {
  const [interactionState, setInteractionState] = useState({
    hovered: false,
    clickedCrab: false,
  });

  const handleHover = (hovered) => {
    setInteractionState((prev) => ({ ...prev, hovered }));
  };

  const handleClick = () => {
    setInteractionState((prev) => ({ ...prev, clickedCrab: true }));
  };

  return (
    <group position={[-2.9, -19, 7.8]}>
      <mesh
        onPointerOver={() => handleHover(true)}
        onPointerOut={() => handleHover(false)}
        position={[250, 127, -30.1]}
      >
        <planeGeometry args={[13, 5]} />
        <meshStandardMaterial color={interactionState.hovered ? 'black' : '#6141a3'} />
      </mesh>

      <mesh
        position={[0, 0, 0.01]}
        onPointerOver={() => handleHover(true)}
        onPointerOut={() => handleHover(false)}
        onClick={handleClick}
      >
        <Text3D position={[244.3, 126.5, -30]} size={1.5} font="./fonts/Poppins_Bold.json">
          View More
          <meshStandardMaterial
            metalness={0.001}
            roughness={0}
            color={interactionState.hovered ? 'yellow' : '#ffffff'}
          />
        </Text3D>
      </mesh>
    </group>
  );
}

export default Interactions;
