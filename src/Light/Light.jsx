import { useEffect, useRef } from 'react'
import { DirectionalLightHelper, PointLightHelper } from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { TransformControls } from '@react-three/drei'
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";

function Light() {
  const pointLightRef = useRef()
  const pointLightRef2 = useRef()
  const directionalLightRef = useRef()
  const { scene } = useThree()

  // Point Light Helper
  // useEffect(() => {
  //   if (pointLightRef.current) {
  //     const pointHelper = new PointLightHelper(pointLightRef.current, 1) // 1 is the size
  //     scene.add(pointHelper)
      
  //     // Clean up the helper when the component unmounts
  //     return () => {
  //       scene.remove(pointHelper)
  //     }
  //   }
  // }, [pointLightRef, scene])

  // useEffect(() => {
  //   if (pointLightRef2.current) {
  //     const pointHelper2 = new PointLightHelper(pointLightRef2.current, 1) // 1 is the size
  //     scene.add(pointHelper2)
      
  //     // Clean up the helper when the component unmounts
  //     return () => {
  //       scene.remove(pointHelper2)
  //     }
  //   }
  // }, [pointLightRef2, scene])

  // Directional Light Helper
  // useEffect(() => {
  //   if (directionalLightRef.current) {
  //     const dirHelper = new DirectionalLightHelper(directionalLightRef.current, 5) // 5 is the size for directional light helper
  //     scene.add(dirHelper)
      
  //     // Clean up the helper when the component unmounts
  //     return () => {
  //       scene.remove(dirHelper)
  //     }
  //   }
  // }, [directionalLightRef, scene])
  // const rectLightRef = useRef();
  // useEffect(() => {
  //   if (rectLightRef.current) {
  //     const rectHelper = new RectAreaLightHelper(rectLightRef.current, 5) // 5 is the size for directional light helper
  //     scene.add(rectHelper)
      
  //     // Clean up the helper when the component unmounts
  //     return () => {
  //       scene.remove(rectHelper)
  //     }
  //   }
  // }, [rectLightRef, scene])
//   useFrame(()=>{
// console.log("directionallight",directionalLightRef.current.position)
//   console.log("reactLight",rectLightRef.current.position)
// console.log("pointlight",pointLightRef.current.position)
// console.log("pointlight2",pointLightRef2.current.position)
//   })



  useEffect(() => {
    // Initialize RectAreaLightUniformsLib for RectAreaLight support
    RectAreaLightUniformsLib.init();
  }, []);



  return (
    <>
      {/* Transform controls for moving the lights */}
      {/* <TransformControls object={pointLightRef.current} />
      <TransformControls object={pointLightRef2.current} />
      <TransformControls object={directionalLightRef.current} /> */}

      {/* Point light */}
 {}

      <pointLight
        color="#d9d9d6"
        intensity={3  }
        distance={16}
        decay={0.8}

        ref={pointLightRef}
       
        position={[  -0.13734978731068397,  40.18117590553355,  3.61095159975849]}  
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0005}
        shadow-radius={5}
      />

{/* <TransformControls object={rectLightRef}/> */}

<rectAreaLight
     
        
        width={4.3} // Width of the light
        height={25} // Height of the light
        intensity={2  } 
        color={'#f7f6eb'} // Light color
        position={[-0.3883763353042937,  19.794199867805914,  -11.041510760513514]} // Position of the light
        rotation={[-Math.PI / 2, 0, 0]} // Rotate the light to point at objects
      />
      <rectAreaLight
     
  
        width={3.75} // Width of the light
        height={11.6} // Height of the light
        intensity={1} 
        color={'#f7f6eb'} // Light color
        position={[-0.539028801387053,  16.209785786734784,  -13.659385663066413]} // Position of the light
        rotation={[Math.PI / 2, 0, 0]} // Rotate the light to point at objects
      />

<rectAreaLight
       
        width={20} // Width of the light
        height={40} // Height of the light
        intensity={5} 
        color={'#f5eee4'} // Light color
        position={[0.598324503301539,  7.439244889512453,  89.93474308746596]} // Position of the light
        rotation={[0 , 0, 0]} // Rotate the light to point at objects
      />

<rectAreaLight

        width={20} // Width of the light
        height={140} // Height of the light
        intensity={1.2  } 
      
        color={'#faf4e1'} // Light color
        position={[0.49548744158802727,  -0.9585305227845993,  32.57403259680365]} // Position of the light
        rotation={[0 , 0, Math.PI/2]} // Rotate the light to point at objects
      />
<rectAreaLight
     
        width={21} // Width of the light
        height={0.3} // Height of the light
        intensity={8} 
     
        color={'#fac05c'} // Light color
   
        position={[-0.1160962247328472,  27.641472959205533,  -30.098621912913057]} // Position of the light
        rotation={[-Math.PI/2, 0, 0]} // Rotate the light to point at objects
      />
      <rectAreaLight
     
     width={37.5} // Width of the light
     height={0.3} // Height of the light
     intensity={4 } 

     color={'#fac05c'} // Light color
     
     position={[-7.716096224732847,  27.59558105731235,  -10.93816408834382]} // Position of the light
     rotation={[0, Math.PI/2, 0]} // Rotate the light to point at objects
   />
        <rectAreaLight
     
     width={37.5} // Width of the light
     height={0.3} // Height of the light
     intensity={4 } 

     color={'#fac05c'} // Light color
     
     position={[ 7.697719902573926,  27.491938961716553,  -10.93816408834382]} // Position of the light
     rotation={[0, -Math.PI/2, 0]} // Rotate the light to point at objects
   />
      <rectAreaLight
     
     width={28} // Width of the light
     height={0.3} // Height of the light
     intensity={3.5 } 
    
     color={'#fac05c'} // Light color
     
     position={[ -7.721694114174413,  21.83635401117426-2.2,  -15.8285606162338]} // Position of the light
     rotation={[0, Math.PI/2, 0]} // Rotate the light to point at objects
   />
       <rectAreaLight
     
     width={28} // Width of the light
     height={0.3} // Height of the light
     intensity={3 } 

     color={'#fac05c'} // Light color
     
     position={[  7.758222409248292,  21.85684599494477-2.2,  -15.793479457171205]} // Position of the light
     rotation={[0, -Math.PI/2, 0]} // Rotate the light to point at objects
   />
         <rectAreaLight
     
     width={28} // Width of the light
     height={0.3} // Height of the light
     intensity={3 } 
 
     color={'#fac05c'} // Light color

     position={[ -7.719523585738835,  15.612935715739715-3.2,  -15.793479457171205]} // Position of the light
     rotation={[0, Math.PI/2, 0]} // Rotate the light to point at objects
   />
<rectAreaLight
   
     width={21} // Width of the light
     height={0.3} // Height of the light
     intensity={8} 
  
     color={'#fac05c'} // Light color
     position={[-0.1160962247328472,  15.829029844936953-3.3,  -30.098621912913057]} // Position of the light
     rotation={[-Math.PI/2, 0, 0]} // Rotate the light to point at objects
   />

          <rectAreaLight
     
     width={28} // Width of the light
     height={0.3} // Height of the light
     intensity={3 } 
  
     color={'#fac05c'} // Light color
     position={[  7.758222409248292,  15.612935715739715-3.2,  -15.793479457171205]} // Position of the light
     rotation={[0, -Math.PI/2, 0]} // Rotate the light to point at objects
   />
  
      <rectAreaLight
     
     width={21} // Width of the light
     height={0.3} // Height of the light
     intensity={10} 

     color={'#fac05c'} // Light color
     position={[ -0.1160962247328472,  21.994800549669538-2.1,  -30.075321227940034]} // Position of the light
     rotation={[-Math.PI/2, 0, 0]} // Rotate the light to point at objects
   />
      <rectAreaLight


     width={4} // Width of the light
     height={25} // Height of the light
     intensity={2.5} 
   
     color={'#d9d9d6'} // Light color
     position={[-5.180225130380734,  27.1043809467188414,  -11.041510760513514]} // Position of the light
     rotation={[-Math.PI / 2, 0, 0]} // Rotate the light to point at objects
   />
         <rectAreaLight

        
     width={3.6} // Width of the light
     height={26} // Height of the light
     intensity={0.7 } 
     color={'#d9d9d6'} // Light color
     position={[  -5.1101827757591,  27.463730900324085,  -11.139788792215855]} // Position of the light
     rotation={[Math.PI / 2, 0, 0]} // Rotate the light to point at objects
   />
       <rectAreaLight

        
     width={3.7} // Width of the light
     height={25.5} // Height of the light
     intensity={0.7 } 
     color={'#d9d9d6'} // Light color
     position={[  5.26, 27.463730900324085,  -11.239788792215855]} // Position of the light
     rotation={[Math.PI / 2, 0, 0]} // Rotate the light to point at objects
   />
     
      <rectAreaLight
        
        
        width={3.9} // Width of the light
        height={25} // Height of the light
        intensity={2.5} 
      
        color={'#d9d9d6'} // Light color
        position={[5.2  ,  27.103809467188414,  -11.041510760513514]} // Position of the light
        rotation={[-Math.PI / 2, 0, 0]} // Rotate the light to point at objects
      />
      

        <pointLight
        color="#fac05c"
        intensity={0.5}
        distance={2000}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0005}
        shadow-radius={5}
        decay={10}
        ref={pointLightRef2}
   position={[  -1.437133622940345,  40.1354492883645,  21.233670181199514]}

        castShadow
      />
      

      {/* Directional light */}
      <directionalLight
      
        intensity={0.2}
        position={[ 119.14472584487132,  128.57847666580062,  98.19951270362483]}

 
      />
      <ambientLight intensity={0.07}/>
    </>
  )
}

export default Light
