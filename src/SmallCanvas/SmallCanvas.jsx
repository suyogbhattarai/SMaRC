import { Clone, OrbitControls, Sky, Sparkles, Text3D, useGLTF, View } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { Suspense, useEffect, useRef } from 'react';
import CharacterModel from '../CharacterModel/CharacterModel';
import Loading from '../Loading/Loading';

function SmallCanvas({ gltfUrl }) {
    const ref = useRef();
    const { scene } = useGLTF(gltfUrl);


  return (
    <div>
    <Canvas style={{ width: '300px', height: '300px' }} camera={{ position: [0, 0, 5], fov: 50 }}>

      
    <View index={1} track={ref} className="preview-view">
        <ambientLight />
        <primitive object={scene} />
        <OrbitControls />
        <Sky/>
      </View>
     
    </Canvas>

    </div>

  );
}

export default SmallCanvas;
