import React, { useEffect, useRef, useState } from 'react';
import Museum from '../Museum/Museum';
import Light from '../Light/Light';
import { useFrame, useThree } from '@react-three/fiber';
import { Html, ScrollControls, useScroll } from '@react-three/drei';
import { PerspectiveCamera, SheetProvider, useCurrentSheet } from '@theatre/r3f';
import { getProject, val } from "@theatre/core";
import "./experience.css";
import * as THREE from "three";
import { useLocation, useNavigate } from 'react-router-dom';

function Experience() {
  const [sheet, setSheet] = useState(null);

  const scrollControlsRef = useRef();

  useEffect(() => {
    const projectSheet = getProject("Fly Through").sheet("Scene");
    setSheet(projectSheet);
  }, []);

  return (
    <>
      {sheet && (
        <ScrollControls pages={10} ref={scrollControlsRef}>
          <SheetProvider sheet={sheet}>
            <SceneExperience scrollControlsRef={scrollControlsRef} />
          </SheetProvider>
        </ScrollControls>
      )}
    </>
  );
}

export default Experience;

function SceneExperience({ scrollControlsRef }) {
  const sheet = useCurrentSheet();
  const scroll = useScroll();
  const [clearPath, setClearPath] = useState(false);
  const [enterVision, setEnterVision] = useState(false);
  const { camera } = useThree();
  const location = useLocation(); // Use useLocation to access query params

  // Target position to check against
  const targetPosition = { x: -6.8909193386595025, y: 125.11158211723959, z: 18.299 };
  // Tolerance for position comparison
  const tolerance = 40;

  const calculateDistance = (pos1, pos2) => {
    return Math.sqrt(
      (pos1.x - pos2.x) ** 2 +
      (pos1.y - pos2.y) ** 2 +
      (pos1.z - pos2.z) ** 2
    );
  };

  


  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    const params = new URLSearchParams(location.search);
    const scrollPositionFromPath = params.get('scrollPosition');
    
    let scrollPosition;
    if (scrollPositionFromPath) {
      scrollPosition = scroll.offset * sequenceLength + parseFloat(scrollPositionFromPath);
      setClearPath(true);
    } else {
      scrollPosition = scroll.offset * sequenceLength;
    }

 

    sheet.sequence.position = scrollPosition;

    // Save the scroll position to local storage
    localStorage.setItem('scrollPosition', scrollPosition);

    const distance = calculateDistance(camera.position, targetPosition);
    setEnterVision(distance < tolerance);
  });



  const navigateTo = useNavigate();

  useEffect(() => {
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
      navigateTo('/');
    }
  }, [navigateTo]);
  const handleNavigation = () => {
    // Save the current scroll position before navigating
    navigateTo('./vision');
    window.location.href = './vision';
  };
// Ensure sheet is included in dependencies

  return (
    <>
      <Light />
      <Museum />

      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[0, 0, 0]}
      />

      {enterVision && (
        <Html
          distanceFactor={1.15}
          transform
          position={[-45.728489170862275, 123.61325546061033, -0.4185308963159944]}
          rotation={[0, THREE.MathUtils.degToRad(45), 0]}
          wrapperClass={`interface ${enterVision ? 'visible' : ''}`}
        >
          <div className="enterVision">
            <h2>Let's enter assisted vision!</h2>
            <div className="btnRow">
              <div onClick={handleNavigation} className="ok">
                Ok
              </div>
              <div className="later">
                Later
              </div>
            </div>
          </div>
        </Html>
      )}
    </>
  );
}
