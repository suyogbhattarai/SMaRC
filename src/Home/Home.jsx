
import React, { useState, useRef, useEffect } from "react";
import { Sparkles, ScrollControls, Scroll, Float, Sky,Cloud, PresentationControls,Html,Text, useScroll } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import Light from '../Light/Light';


import { useFrame,useThree } from "@react-three/fiber";
import { editable as e } from '@theatre/r3f';
import { Debug } from '@react-three/rapier'
import MainLand from "../MainLand/MainLand";
import Piano from "../Piano/Piano";
import Interface from "../Interface/Interface";
import Butterfly from "../Butterfly/Butterfly";
import { getProject, val } from "@theatre/core";
import { PerspectiveCamera, SheetProvider, useCurrentSheet } from '@theatre/r3f';

function Home() {

  const [sheet, setSheet] = useState(null);

  useEffect(() => {
    const projectSheet = getProject("home camera").sheet("Scene");
    setSheet(projectSheet);
  }, []);
  return (
 
        <>

{sheet && (
        <ScrollControls pages={10} damping={0.2} > 
          <SheetProvider sheet={sheet}>
            <SceneHome />
          </SheetProvider>
        </ScrollControls>
      )}
   
    </>
    
  )
}

export default Home

function SceneHome() {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  const { camera } = useThree();




  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);

    const scrollPosition = scroll.offset * sequenceLength;
    sheet.sequence.position = scrollPosition;

    // Save the scroll position to local storage
    localStorage.setItem('scrollPosition', scrollPosition);
  

  });







  return (
    <>
 
 <Float>
    <Sparkles
        size={250}
        scale={[1500, 1500]}
        position-y={900}
        speed={10}
        count={3500}
      />
    </Float>
    
    
      <Sky distance={1400000} sunPosition={[0, 1000000, 1000]} inclination={0} azimuth={5}  />

      <Physics>
      {/* <Debug/> */}
        <Html>
            <Interface/>
            </Html>
<Light/>
        
          
                <PresentationControls 
                rotation={[0.19,0.1,0]}
                polar={[-0.1,0.2]}
                azimuth={[-1,0.75]}
                config={{mass:2,tension:400}}
                snap={{mass:4,tension:400}}
                >
                      <Float speed={1}  // Animation speed, defaults to 1
  rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
  floatIntensity={2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
  floatingRange={[15, 15]}>

                  <MainLand position={[172.90646362304688,500.3783565163612366,-9.726205825805664]}  />
                  {/* <Piano scale={45} rotation={[-0.1,10.9,0]} position={[70,-600,-100]}/> */}
                  <Float speed={3} // Animation speed, defaults to 1
  rotationIntensity={[0.5]} // XYZ rotation intensity, defaults to 1
  floatIntensity={2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
  floatingRange={[1, 20]} >           
                    <Butterfly LandPosition={[172.90646362304688,500.3783565163612366,-20.726205825805664]} position={[50, 160, 130]} rotation={[0.2, -0.5, 0]} scale={50} />
                  </Float>
             </Float>
                </PresentationControls>
        
 
    
      
    

          
       
          <Text 
        rotation={[-0.6,-0.02,-0.06]}
        position={[-5.90646362304688,-300.3783565163612366,-9.726205825805664]} 
        font="/text/JoeJack.ttf" 
        scale={100}
        maxWidth={2}
        color={"black"}
    
      >
        Time For Skill
      </Text>
     
      </Physics>
      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[0, 0, 0]}
      />


    </>
  );
}
