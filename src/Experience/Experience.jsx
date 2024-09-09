import React, { useEffect, useRef, useState } from 'react';
import Museum from '../Museum/Museum';
import Light from '../Light/Light';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Html, ScrollControls, useScroll } from '@react-three/drei';
import { PerspectiveCamera, SheetProvider, useCurrentSheet } from '@theatre/r3f';
import { getProject, val } from "@theatre/core";
import "./experience.css";
import * as THREE from "three";
import { useLocation, useNavigate } from 'react-router-dom';
import experienceCamera from "./cameraAnimationExp.json";
import Drone from '../Museum/Drone';
import MovingSpot from '../MovingSpot';


function Experience() {
  const [sheet, setSheet] = useState(null);

  useEffect(() => {
    const projectSheet = getProject("Fly Through", { state: experienceCamera }).sheet("Scene");
    setSheet(projectSheet);
  }, []);

  return (
    <>
      {sheet && (
        <ScrollControls pages={20}>
          <SheetProvider sheet={sheet}>
            <SceneExperience />
          </SheetProvider>
        </ScrollControls>
      )}
    </>
  );
}

export default Experience;

function SceneExperience() {
  const sheet = useCurrentSheet();
  const scroll = useScroll();
  const [enterVision, setEnterVision] = useState(false);
  const [enterRobotics, setEnterRobotics] = useState(false);
  const { camera } = useThree();
  const location = useLocation();
  const navigateTo = useNavigate();

  // Target positions
  const targetPosition = { x: -6.8909193386595025, y: 125.11158211723959, z: 18.299 };
  const targetPositionRobotics = { x: 132.85061426981324, y: 142.7544582450314, z: -77.12834148150412 };

  // Tolerance for position comparison
  const tolerance = 10;
  const toleranceHigh = 40;

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
    } else {
      scrollPosition = scroll.offset * sequenceLength;
    }

    sheet.sequence.position = scrollPosition;

    // Save the scroll position to local storage
    localStorage.setItem('scrollPosition', scrollPosition);

    const distance = calculateDistance(camera.position, targetPosition);
    setEnterVision(distance < tolerance);

    const distanceRobotics = calculateDistance(camera.position, targetPositionRobotics);
    setEnterRobotics(distanceRobotics < toleranceHigh);
  });

  useEffect(() => {
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
      navigateTo('/');
    }
  }, [navigateTo]);

  const handleNavigation = () => {
    navigateTo('./vision');
    window.location.href = './vision';
  };

  const params = new URLSearchParams(location.search);
  const redirectFrom = params.get("redirect");

  return (
    <>
        <Float scale={1} floatIntensity={100} speed={2}>
      <Drone scale={10} position={[150, 300, 80]} />
      <MovingSpot color="white" position={[150, 300, 80]} />
    </Float>
      <Light />
      <Museum />
      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[0, 0, 0]}
      />

      {enterRobotics && (
        <>
          <Html
            scale={65}
            distanceFactor={1.15}
            transform
            position={[23.502383096244479, 155.67164729531294, -180.504615469855594]}
            rotation={[THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0)]}
            wrapperClass={`entryText ${enterVision ? 'visible' : ''}`}
          >
            <div className="entryText">
              <div className="title">
                <h2>Welcome to Skill Museum</h2>
              </div>
              <p>Explore Our Other projects</p>
              <div className="entryBtn">
                <div style={{ width: "300px" }} onClick={() => navigateTo("./projects")} className="ok">
                  Explore More
                </div>
              </div>
            </div>
          </Html>

          {(redirectFrom === "robotics" || redirectFrom === "navbarRobotics") ? (
            <Html
              scale={20}
              distanceFactor={1.15}
              transform
              position={[31.502383096244479, 134.67164729531294, -50.504615469855594]}
              rotation={[THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0)]}
              wrapperClass={`backVision ${enterVision ? 'visible' : ''}`}
            >
              <div className="backVision">
                <div className="btnRow">
                  <div onClick={() => navigateTo("./?redirect=navbarRobotics&scrollPosition=3.013384556516312")} className="ok">
                    &lt;&lt;
                  </div>
                  <p className='okText'>Go Back</p>
                </div>
              </div>
            </Html>
          ) : null}
        </>
      )}

      {enterVision && (
        <>
          <Html
            distanceFactor={1.15}
            transform
            position={[-60.728489170862275, 119.61325546061033, 28.185308963159944]}
            rotation={[0, THREE.MathUtils.degToRad(80), 0]}
            wrapperClass={`interface ${enterVision ? 'visible' : ''}`}
          >
            <div className="enterVision">
              <h2>Let's enter assisted vision!</h2>
              <div className="btnRow">
                <div onClick={handleNavigation} className="ok">
                  Enter
                </div>
              </div>
              <p style={{ color: "white", fontSize: "10px", marginTop: "20px" }}>Press ESC to reveal the cursor</p>
            </div>
          </Html>

          {(redirectFrom === "vision" || redirectFrom === "navbar" || redirectFrom === "navbarRobotics") ? (
            <Html
              scale={20}
              distanceFactor={1.15}
              transform
              position={[-47.81731037439364, 137.58773897952544, 38.908885908411563]}
              rotation={[THREE.MathUtils.degToRad(90), THREE.MathUtils.degToRad(90), THREE.MathUtils.degToRad(-90)]}
              wrapperClass={`backVision ${enterVision ? 'visible' : ''}`}
            >
              <div className="backVision">
                <div className="btnRow">
                  <div onClick={() => navigateTo("./")} className="ok">
                    &lt;&lt;
                  </div>
                  <p className='okText'>Go Back</p>
                </div>
              </div>
            </Html>
          ) : null}
        </>
      )}
    </>
  );
}
