import React, { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, useAnimations, ScrollControls, useScroll, Scroll } from "@react-three/drei";
import * as THREE from "three";
import { useControls } from 'leva';
import { editable as e } from "@theatre/r3f";

function Butterfly({ position, rotation, scale }) {
  const body = useRef();
  const { scene, animations } = useGLTF('./NewButtfly.glb');
  const { actions } = useAnimations(animations, scene);
  const { camera } = useThree();

  useEffect(() => {
    const firstAction = actions[animations[0].name];
    if (firstAction) {
      firstAction.play();
      firstAction.timeScale=2;
    }
  }, [actions, animations]);

  return (
    <e.mesh theatreKey="butterfly">
  <primitive
   
   position={[position[0], position[1], position[2]+15]}
   scale={scale}
   rotation={[rotation[0], rotation[1], rotation[2]]}
   object={scene}
 />
    </e.mesh>
  
  );
}

// function Experience({ startTour, setStartTour }) {
//   return (
//     <>
//       <ScrollControls pages={5} damping={5}>
//         <Scroll>
//           <Butterfly position={[50, 160, 130]} rotation={[0.2, -0.5, 0]} scale={50} />
//           {/* Other components */}
//         </Scroll>
//       </ScrollControls>
//     </>
//   );
// }

export default Butterfly;
