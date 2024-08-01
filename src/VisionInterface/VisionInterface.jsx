import React, { useRef, useState, useEffect } from 'react';
import Light from '../Light/Light';
import Museum from '../Museum/Museum';
import { button, useControls } from 'leva';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls, PointerLockControls, Html, TransformControls } from '@react-three/drei';
import "./assistedvison.css"
import VisionInterface from '../VisionInterface/VisionInterface';

function AssistedVision() {
  const { camera } = useThree();
  const controlsRef = useRef();
  const buttonRef = useRef();
  const [pointerLockActive, setPointerLockActive] = useState(false);
  const { cameraPosition, cameraRotation } = useControls('', {
    cameraPosition: {
      value: { x: 0, y: 0, z: 0 },
      step: 2,
      joystick: 'invertY',
    },
    cameraRotation: {
      value: { x: 0, y: 0, z: 0 },
      step: 1,
      joystick: 'invertY',
    },
  });

  useEffect(() => {
    // Update camera position
    const cameraSet = new THREE.Vector3(-35, 128, 25);
    camera.position.copy(cameraSet);

    // Update camera rotation
    const cameraRot = new THREE.Euler(
      THREE.MathUtils.degToRad(0),
      THREE.MathUtils.degToRad(-90),
      THREE.MathUtils.degToRad(0)
    );
    camera.rotation.copy(cameraRot);
  }, [cameraPosition, cameraRotation, camera]);

  const handlePointerLock = () => {
    if (controlsRef.current) {
      controlsRef.current.lock();
      setPointerLockActive(true);
    }
  };

  useFrame(() => {
    if (buttonRef.current) {
      console.log("button position", buttonRef.current.position);
    }
  });

  return (
    <>
      <Light />
      <Museum />
      {pointerLockActive && (
        <PointerLockControls ref={controlsRef} />
      )}

      <TransformControls object={buttonRef.current} />
      <group ref={buttonRef}>
        {!pointerLockActive && (
          <Html
            rotation={[0, THREE.MathUtils.degToRad(-90), 0]}
            scale={8}
            position={[37.53547834750623, 118.46250298445588, 24.194041966776872]}
            transform
            wrapperClass='visioninterface'
          >
            <div className="card">
              <div className="intro">
                <h1>Welcome to Assisted Vision Goggles</h1>
              </div>
              <div onClick={handlePointerLock} className="button">
                Control assisted vision
              </div>
            </div>
          </Html>
        )}
      </group>
    </>
  );
}

export default AssistedVision;
