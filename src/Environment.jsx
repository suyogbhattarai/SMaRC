import React from 'react';
import { Html, Sparkles } from '@react-three/drei';

function Environment() {
  return (
    <>
      <Html scale={20} transform />
      <Sparkles count={2000} scale={2500} position={[0, 1000, 0]} size={120} speed={2} />
      <fog attach="fog" args={['#000000', 600, 1170]} />
    </>
  );
}

export default Environment;
