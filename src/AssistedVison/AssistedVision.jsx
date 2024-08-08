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
import pagesTurning from "./pageTurning.mp3"
import BookAudio from "./book.mp3"
import ScriptAudio from "./script.mp3"
import statueAudio from "./statue.mp3"
import sofaAudio from "./sofa.mp3"



// import debounce from 'lodash/debounce';
function AssistedVision() {
  const { camera } = useThree()
  const controlsRef = useRef();
  const navigateTo = useNavigate();
  const buttonRef = useRef();
  const goggleRef = useRef();
  const [pointerLockActive, setPointerLockActive] = useState(false);
  const [lookAtPosition, setLookAtPosition] = useState(new THREE.Vector3());
  const [hovered, setHovered] = useState(false);
  const [tv, setTv] = useState(false);
  const [tvTable, setTvTable] = useState(false);
  const [sofa,setSofa]=useState(false)
  const [statue,setStatue]=useState(false)
  const [audioFinished, setAudioFinished] = useState(false);







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


  const audioRef = useRef(null);
  const bookAudioRef = useRef(null);
  const tvAudioRef=useRef(null);
  const tvTableAudioRef=useRef(null);
  const sofaAudioRef=useRef(null)
  const statueAudioRef=useRef(null)

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
    const cameraSet = new THREE.Vector3(-33.6, 129.8, 38);
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
    // Handle pointer lock state change
    if (pointerLockActive) {
      const audio = new Audio(pagesTurning);
      const bookAudio = new Audio(BookAudio);
    

      audioRef.current = audio;
      bookAudioRef.current = bookAudio;

      audio.play().catch(error => {
        console.error("Failed to play audio:", error);
      });

      setTimeout(() => {
        bookAudio.play().catch(error => {
          console.error("Failed to play book audio:", error);
        });

        bookAudio.addEventListener('ended', () => {
          setAudioFinished(true);
        });
      }, 1000);

      return () => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
        if (bookAudioRef.current) {
          bookAudioRef.current.pause();
          bookAudioRef.current.currentTime = 0;
        }
      };
    }
  }, [pointerLockActive])

  useEffect(() => {
    // Handle hovered state change
    if (hovered) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      if (bookAudioRef.current) {
        bookAudioRef.current.pause();
        bookAudioRef.current.currentTime = 0;
      }
    }

   
    
  }, [hovered]);
  const handlePointerLock = () => {
  


    controlsRef.current.lock();
    setPointerLockActive(true);





  };
  useEffect(() => {
    // Create an audio object for BookAudio

    const scriptAudio=new Audio(ScriptAudio)
    scriptAudio.volume=1
    const tvAudio=new Audio(tvMp3)
    tvAudio.volume=1
    tvAudioRef.current = tvAudio;

 
    if (hovered) {
  
   
setAudioFinished(true)
      scriptAudio.play().catch(error => {
        console.error("Failed to play script audio:", error);
      })


    } else {
      scriptAudio.pause();
    
    }

    if(tv && audioFinished){
      tvAudioRef.current.play().catch(error => {
        console.error("Failed to play script audio:", error);
      })

    }
    else{
      tvAudioRef.current.pause()
    }



    return () => {
      scriptAudio.pause();
     
      tvAudioRef.current.pause()

    };
  }, [hovered,tv]);

useEffect(()=>{
  const tvTableAudio=new Audio(tvTableMp3)
  tvTableAudio.volume=1
  tvTableAudioRef.current = tvTableAudio;
  if(tvTable && audioFinished){
    tvTableAudioRef.current.play().catch(error => {
      console.error("Failed to play script audio:", error);
    })

  }
  else{
    tvTableAudioRef.current.pause()

  }

  return()=>{
    tvTableAudioRef.current.pause()
  }
},[tvTable])

useEffect(()=>{
  const sofaMp3=new Audio(sofaAudio)
  sofaMp3.volume=1
  sofaAudioRef.current = sofaMp3;
  if(sofa && audioFinished){
    sofaAudioRef.current.play().catch(error => {
      console.error("Failed to play script audio:", error);
    })

  }
  else{
    sofaAudioRef.current.pause()

  }

  return()=>{
    sofaAudioRef.current.pause()
  }
},[sofa])
 

useEffect(()=>{
  const statueMp3=new Audio(statueAudio)
  statueMp3.volume=1
  statueAudioRef.current = statueMp3;
  if(statue && audioFinished){
    statueAudioRef.current.play().catch(error => {
      console.error("Failed to play script audio:", error);
    })

  }
  else{
    statueAudioRef.current.pause()

  }

  return()=>{
    statueAudioRef.current.pause()
  }
},[statue])

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
        onPointerOver4={() => setSofa(true)}
        onPointerOut4={() => setSofa(false)}
        onPointerOver5={()=>setStatue(true)}
        onPointerOut5={()=>setStatue(false)}

      />

     


      {tv && (
        <Html wrapperClass='tableText' position={[120.197582617751709, 147.11265385835948,  32]}>
          <p>This is a Tv</p>
        </Html>
      )}

{sofa && (
  <>
  
  <Html wrapperClass='tableText' position={[80.197582617751709, 130.11265385835948, 182]}>
          <p>This is a Sofa</p>
        </Html>
        <Html wrapperClass='tableText' position={[-18,130,0]} >
          <p>This is a Sofa</p>
        </Html>
        
        </>
       

        
      )}

{statue && (
        <Html wrapperClass='tableText'  position={[-24,130,30]}>
          <p>This is a Statue</p>
        </Html>
      )}

      {tvTable && (
        <Html wrapperClass='tableText' position={[-20.197582617751709, 130.11265385835948, 37]}>
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
