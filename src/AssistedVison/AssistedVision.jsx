import React, { useRef, useState } from 'react';
import Light from '../Light/Light';
import Museum from '../Museum/Museum';
import { button, useControls } from 'leva';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useEffect } from 'react';
import { OrbitControls, PointerLockControls } from '@react-three/drei';
import { Html } from '@react-three/drei';
import "./assistedvison.css"
import { TransformControls } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import { Vector3 } from 'three';
import { useNavigate } from 'react-router-dom';


function AssistedVision() {
  const { camera } = useThree();
  const controlsRef = useRef();
  const navigateTo=useNavigate()
  const buttonRef=useRef()
  const [pointerLockActive, setPointerLockActive] = useState(false);
  const [lookAtPosition, setLookAtPosition] = useState(new THREE.Vector3());
  const goggleRef = useRef();

  const { scene } = useGLTF('/AssistedVision.glb')
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
    controlsRef.current.lock();
    setPointerLockActive(true);
  };

  useFrame(()=>{


    

    console.log("button position",buttonRef.current.position)
    const direction = new THREE.Vector3();
    camera.getWorldDirection(direction);
    const lookAtPos = new THREE.Vector3().copy(camera.position).add(direction.multiplyScalar(10)); // Adjust the multiplier as needed
    setLookAtPosition(lookAtPos);
    
    if (goggleRef.current) {
      // Update the goggle model position and rotation to match the camera
      goggleRef.current.position.set(lookAtPosition.x,lookAtPosition.y,lookAtPosition.z);
      goggleRef.current.rotation.set(camera.rotation.x,camera.rotation.y,camera.rotation.z);
    }
  })

  return (
    <>
      <Light />
      <Museum />
      <group  ref={goggleRef} >
      <primitive position={[0,0,5.4]} scale={3} rotation={[THREE.MathUtils.degToRad(90) ,THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(0)]}  object={scene}/>
      </group>
     
    
        <PointerLockControls ref={controlsRef} />
     
      
      {/* <OrbitControls makeDefault/> */}



             <TransformControls object={buttonRef.current} />
        <group ref={buttonRef}>

  <Html  rotation={[0,THREE.MathUtils.degToRad(-90),0]} scale={8} position={[37.53547834750623,118.46250298445588,24.194041966776872]} transform wrapperClass='visioninterface'>
  {!pointerLockActive && (<>
          <div className="card">
          <div className="intro">
  <h1>welcome to skill Assisted Vision </h1>
</div>
        <div onClick={handlePointerLock} className="button">
           Get Started
        </div>
          </div>
          </>) 
  }
  

        
         
          </Html>
          <Html  position={[lookAtPosition.x,lookAtPosition.y,lookAtPosition.z]} wrapperClass='exitbutton'>
        
  <div  className="button">
          Press ESC to reveal the cursor
        </div>
        <div onClick={()=>{navigateTo(`/?scrollPosition=${localStorage.getItem('scrollPosition')}`)}}  className="exit">
         Click To Exit
        </div>

          </Html>



      
        </group>

   
        
       
 
    </>
  );
}

export default AssistedVision;
