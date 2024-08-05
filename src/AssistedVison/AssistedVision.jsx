import React, { useRef, useState, useEffect } from 'react';
import Light from '../Light/Light';
import Museum from '../Museum/Museum';
import { useControls } from 'leva';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Html, PointerLockControls, TransformControls, useGLTF } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import circularMp3 from './circularTable.mp3';
import tvMp3 from "./tv.mp3";
import tvTableMp3 from "./tvTable.mp3";
import "./assistedvison.css";

function AssistedVision() {
  const { camera } = useThree();
  const controlsRef = useRef();
  const navigateTo = useNavigate();
  const buttonRef = useRef();
  const goggleRef = useRef();
  const [pointerLockActive, setPointerLockActive] = useState(false);
  const [lookAtPosition, setLookAtPosition] = useState(new THREE.Vector3());
  const [hovered, setHovered] = useState(false);
  const [tv, setTv] = useState(false);
  const [tvTable, setTvTable] = useState(false);

  const audioRefs = {
    table: useRef(new Audio(circularMp3)),
    tv: useRef(new Audio(tvMp3)),
    tvTable: useRef(new Audio(tvTableMp3)),
  };

  const { scene } = useGLTF('/AssistedVision.glb');
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
    if (goggleRef.current) {
      goggleRef.current.renderOrder = 9999;
      goggleRef.current.traverse((child) => {
        if (child.isMesh) {
          child.material.depthTest = true;
        }
      });
    }
  }, []);

  useEffect(() => {
    const cameraSet = new THREE.Vector3(-33.7, 129.8, 38);
    camera.position.copy(cameraSet);
    camera.fov = 40;
    camera.updateProjectionMatrix();

    const cameraRot = new THREE.Euler(
      THREE.MathUtils.degToRad(0),
      THREE.MathUtils.degToRad(-90),
      THREE.MathUtils.degToRad(0)
    );
    camera.rotation.copy(cameraRot);
  }, [cameraPosition, cameraRotation, camera]);

  useEffect(() => {
    // Preload audio
    Object.values(audioRefs).forEach(ref => {
      ref.current.preload = 'auto';
    });

    // Handle visibility changes
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        handleAudioPlayback();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const handlePointerLock = () => {
    controlsRef.current.lock();
    setPointerLockActive(true);
  };

  useFrame(() => {
    const direction = new THREE.Vector3();
    camera.getWorldDirection(direction);
    const lookAtPos = new THREE.Vector3().copy(camera.position).add(direction.multiplyScalar(10));
    setLookAtPosition(lookAtPos);

    if (goggleRef.current) {
      goggleRef.current.position.set(lookAtPosition.x, lookAtPosition.y, lookAtPosition.z);
      goggleRef.current.rotation.set(camera.rotation.x, camera.rotation.y, camera.rotation.z);
    }
  });

  const handleAudioPlayback = () => {
    // Stop all audio
    Object.values(audioRefs).forEach(ref => {
      ref.current.pause();
      ref.current.currentTime = 0;
    });

    // Play the audio based on the current state
    if (hovered) {
      audioRefs.table.current.play().catch(error => console.log("Error playing table audio:", error));
    } else if (tv) {
      audioRefs.tv.current.play().catch(error => console.log("Error playing TV audio:", error));
    } else if (tvTable) {
      audioRefs.tvTable.current.play().catch(error => console.log("Error playing TV Table audio:", error));
    }
  };

  useEffect(() => {
    handleAudioPlayback();
  }, [hovered, tv, tvTable]);

  return (
    <>
      <Light />
      <Museum
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onPointerOver2={() => setTv(true)}
        onPointerOut2={() => setTv(false)}
        onPointerOver3={() => setTvTable(true)}
        onPointerOut3={() => setTvTable(false)}
      />

      {hovered && (
        <Html wrapperClass='tableText' position={[80.197582617751709, 90 - 0.11265385835948, 45]}>
          <p>This is a circular table</p>
        </Html>
      )}

      {tv && (
        <Html wrapperClass='tableText' position={[100.197582617751709, 145.11265385835948, 32]}>
          <p>This is a Tv</p>
        </Html>
      )}

      {tvTable && (
        <Html wrapperClass='tableText' position={[-20.197582617751709, 130.11265385835948, 38]}>
          <p>This is a Tv table</p>
        </Html>
      )}

      <group ref={goggleRef}>
        <primitive
          position={[0, 0, 1]}
          scale={3}
          rotation={[THREE.MathUtils.degToRad(90), THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0)]}
          object={scene}
        />
      </group>

      <PointerLockControls ref={controlsRef} />

      <group ref={buttonRef}>
        <Html
          rotation={[0, THREE.MathUtils.degToRad(-90), 0]}
          scale={3}
          position={[37.53547834750623, 118.46250298445588, 24.194041966776872]}
          transform
          wrapperClass='visioninterface'
        >
          {!pointerLockActive && (
            <div className="card">
              <div className="intro">
                <h1>Welcome to Skill Assisted Vision</h1>
              </div>
              <div onClick={handlePointerLock} className="button">
                Get Started
              </div>
            </div>
          )}
        </Html>
        <Html position={[lookAtPosition.x, lookAtPosition.y, lookAtPosition.z]} wrapperClass='exitbutton'>
          <div className="button">Press ESC to reveal the cursor</div>
          <div
            onClick={() => {
              navigateTo(`/?redirect=vision&scrollPosition=${localStorage.getItem('scrollPosition')}`);
            }}
            className="exit"
          >
            Click To Exit
          </div>
        </Html>
      </group>
    </>
  );
}

export default AssistedVision;
