// DeskNamePlate.js
import React from 'react';
import { Text } from '@react-three/drei';

const DeskNamePlate = ({ name = "Your Name", position = [0, 0, 0], scale = [1, 1, 1], color = "lightblue", textColor = "black", onClick }) => {
  return (
    <mesh position={position} scale={scale} onClick={onClick}> {/* Attach onClick here */}
      <boxGeometry args={[2, 0.2, 0.5]} />
      <meshStandardMaterial color={color} />
      <Text
        position={[0, 0, 0.26]} // Slightly above the plate
        fontSize={0.1 * scale[0]} // Adjust font size based on scale
        color={textColor}
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </mesh>
  );
};

export default DeskNamePlate;
