// DeskNamePlate.js
import React from 'react';
import { Text, RoundedBox } from '@react-three/drei';

const DeskNamePlate = ({ 
  name = "Your Name", 
  position = [0, 0, 0], 
  scale = [1, 1, 1], 
  color = "lightblue", 
  textColor = "black", 
  onClick 
}) => {
  return (
    <mesh position={position} scale={scale} onClick={onClick}>
      {/* Use RoundedBox for smooth edges */}
      <RoundedBox args={[2, 0.2, 1.5]} radius={0.1} smoothness={10}> 
        {/* Apply the color */}
        <meshStandardMaterial color={color} />
      </RoundedBox>
      
      <Text
        position={[0, 0.03, 0.8]} // Slightly above the plate
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
