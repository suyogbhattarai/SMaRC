/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations, Html, TransformControls, PivotControls, Plane, Box } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import "./building1.css"
import { PlaneGeometry } from 'three'
import { MeshStandardMaterial } from 'three'
import { PlaneBufferGeometry } from 'three'
import * as THREE from "three"
import { useState } from 'react'
import { useThree } from '@react-three/fiber'


export default function Building1(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Room (2).glb')
  const { actions } = useAnimations(animations, group)


  const occludeObject = useRef();

  const [enterDoor, setEnterDoor] = useState(false);
  const { camera, gl } = useThree();

  // Target position to check against
  const targetPosition = { x: 13.520559577486459, y: 130.29954007264053, z: 114.12155235058987 };
  // Tolerance for position comparison
  const tolerance = 80;

  const calculateDistance = (pos1, pos2) => {
    return Math.sqrt(
      (pos1.x - pos2.x) ** 2 +
      (pos1.y - pos2.y) ** 2 +
      (pos1.z - pos2.z) ** 2
    );
  };

  const tvScreen=useRef()

  const { PositionTvScreen,RotationTvScreen } = useControls("", {
    PositionTvScreen: {
      value: { x: 0, y: 100, z: 205 },
      step: 0.01,
      joystick: "invertY"
    },
    RotationTvScreen:{
      value:{x:0,y:0,z:0},
      step: 0.01,
      joystick: "invertY"

  }
  });

  useFrame(()=>{
    const distance = calculateDistance(camera.position, targetPosition);
    if (distance < tolerance) {
      setEnterDoor(true);
    }
    if (distance > tolerance) {
      setEnterDoor(false);
      
    }
  })

  useEffect(()=>{
    const doorOpen=actions[animations[0].name]
    const tv=actions[animations[1].name]
    
    if(doorOpen &&enterDoor){
        doorOpen.play()
        tv.play()
    }
    else{
      doorOpen.stop()
    }
    
      },[enterDoor])

      
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials['Material.001']}
          position={[-52.599, 133.176, 30.296]}
          rotation={[-0.375, 0.006, 3.125]}
          scale={[1.07, 16.533, 0.947]}
        />
        <mesh
          name="Plane001"
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials.GlassBalcony}
          position={[-52.103, 133.618, 15.527]}
          rotation={[0, 0, 1.553]}
          scale={[14.486, 19.077, 57.292]}
        />
        <mesh
          name="Plane002"
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials.GlassBalcony}
          position={[6.367, 133.266, 74.451]}
          rotation={[-1.571, -1.565, 0]}
          scale={[14.773, 17.688, 16.492]}>
          <mesh
            name="Icosphere"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere.geometry}
            material={nodes.Icosphere.material}
            position={[-0.119, -0.094, -0.945]}
            rotation={[1.588, -0.016, -1.546]}
            scale={[0.024, 0.05, 0.049]}
          />
        </mesh>
        <mesh
          name="Cube007"
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials['Material.001']}
          position={[-35.499, 164.841, 29.518]}
          rotation={[0.24, 0.108, -2.944]}
          scale={[1.524, 13.864, 1.114]}
        />
        <mesh
          name="Cube008"
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials['Material.001']}
          position={[43.417, 162.923, 2.867]}
          rotation={[-0.312, 0.155, 2.826]}
          scale={[1.378, 13.471, 1.216]}
        />
        <mesh
          name="Cube009"
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials['Material.001']}
          position={[43.177, 163.558, 30.453]}
          rotation={[0.385, -0.104, 2.891]}
          scale={[1.459, 13.089, 1.201]}
        />
        <mesh
          name="Plane005"
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials.GlassBalcony}
          position={[-37.294, 173.304, 18.952]}
          rotation={[-0.05, 0, 1.749]}
          scale={[15.643, 22.878, 32.932]}
        />
        <mesh
          name="Plane006"
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={materials.GlassBalcony}
          position={[2.997, 168.602, 55.541]}
          rotation={[-1.571, -1.553, -0.394]}
          scale={[7.193, 14.357, 21.36]}
        />
        <mesh
          name="Plane007"
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={materials.GlassBalcony}
          position={[43.513, 166.13, 19.501]}
          rotation={[Math.PI, 0, -1.215]}
          scale={[14.756, 22.476, 31.324]}
        />
        <mesh
          name="Cube012"
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials['Material.001']}
          position={[2.562, 168.661, -20.638]}
          rotation={[-0.204, 0, -3.128]}
          scale={[1.135, 7.451, 0.833]}
        />
        <mesh
          name="Plane008"
          castShadow
          receiveShadow
          geometry={nodes.Plane008.geometry}
          material={materials.GlassBalcony}
          position={[2.571, 168.705, -20.852]}
          rotation={[1.368, -1.557, -3.14]}
          scale={[7.773, 15.522, 22.46]}
        />
        <mesh
          name="Plane010"
          castShadow
          receiveShadow
          geometry={nodes.Plane010.geometry}
          material={materials['Material.004']}
          position={[3.604, 119.281, 23.917]}
          scale={[51.515, 19, 49.072]}
        />
        <mesh
          name="Plane011"
          castShadow
          receiveShadow
          geometry={nodes.Plane011.geometry}
          material={materials['Material.004']}
          position={[-4.155, 153.182, 21.151]}
          rotation={[0, 0, 3.124]}
          scale={[29.704, 14.072, 29.143]}
        />
        <mesh
          name="Cube014"
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={materials['Material.001']}
          position={[-36.6, 165.697, 6.794]}
          rotation={[-0.427, -0.098, -2.931]}
          scale={[1.341, 14.511, 0.997]}
        />
        <mesh
          name="Plane009"
          castShadow
          receiveShadow
          geometry={nodes.Plane009.geometry}
          material={materials['Material.005']}
          position={[48.11, 146.379, 63.274]}
          rotation={[0, 0, 3.124]}
          scale={[1.502, 0.276, 2.403]}
        />
        <mesh
          name="Plane012"
          castShadow
          receiveShadow
          geometry={nodes.Plane012.geometry}
          material={materials['Material.005']}
          position={[48.635, 144.842, 13.424]}
          rotation={[0, 0, 3.124]}
          scale={[1.502, 0.276, 2.403]}
        />
        <mesh
          name="Plane013"
          castShadow
          receiveShadow
          geometry={nodes.Plane013.geometry}
          material={materials['Material.005']}
          position={[-19.167, 144.483, 44.693]}
          rotation={[0, 0, 3.124]}
          scale={[1.502, 0.276, 2.403]}
        />
        <mesh
          name="Plane014"
          castShadow
          receiveShadow
          geometry={nodes.Plane014.geometry}
          material={materials['Material.005']}
          position={[-17.136, 144.811, -11.769]}
          rotation={[0, 0, 3.124]}
          scale={[1.502, 0.276, 2.403]}
        />
        <mesh
          name="Plane015"
          castShadow
          receiveShadow
          geometry={nodes.Plane015.geometry}
          material={materials['Material.005']}
          position={[21.72, 176.129, -7.922]}
          rotation={[0, 0, 3.124]}
          scale={[1.807, 0.276, 2.891]}
        />
        <mesh
          name="Plane016"
          castShadow
          receiveShadow
          geometry={nodes.Plane016.geometry}
          material={materials['Material.005']}
          position={[-28.655, 175.672, -5.385]}
          rotation={[0, 0, 3.124]}
          scale={[1.807, 0.276, 2.891]}
        />
        <mesh
          name="Plane017"
          castShadow
          receiveShadow
          geometry={nodes.Plane017.geometry}
          material={materials['Material.005']}
          position={[-30.491, 176.248, 38.615]}
          rotation={[0, 0, 3.124]}
          scale={[1.502, 0.276, 2.403]}
        />
        <mesh
          name="Plane018"
          castShadow
          receiveShadow
          geometry={nodes.Plane018.geometry}
          material={materials['Material.005']}
          position={[16.039, 176.086, 42.438]}
          rotation={[0, 0, 3.124]}
          scale={[1.502, 0.276, 2.403]}
        />
        <mesh
          name="Cube010"
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={materials['Material.001']}
          position={[3.496, 170.512, 57.533]}
          rotation={[0.418, 0.352, 3.113]}
          scale={[0.888, 6.078, 0.864]}
        />
        <mesh
          name="Plane020"
          castShadow
          receiveShadow
          geometry={nodes.Plane020.geometry}
          material={materials.GlassBalcony}
          position={[170.217, 160.416, 2.618]}
          rotation={[Math.PI, 0, -1.553]}
          scale={[6.355, 7.238, 11.788]}
        />
        <mesh
          name="Plane021"
          castShadow
          receiveShadow
          geometry={nodes.Plane021.geometry}
          material={materials.GlassBalcony}
          position={[170.248, 160.416, 26.245]}
          rotation={[Math.PI, 0, -1.553]}
          scale={[6.355, 7.238, 11.788]}
        />
        <mesh
          name="Plane022"
          castShadow
          receiveShadow
          geometry={nodes.Plane022.geometry}
          material={materials.GlassBalcony}
          position={[170.164, 160.416, 49.929]}
          rotation={[Math.PI, 0, -1.553]}
          scale={[6.355, 7.238, 11.788]}
        />
        <mesh
          name="Plane023"
          castShadow
          receiveShadow
          geometry={nodes.Plane023.geometry}
          material={materials.GlassBalcony}
          position={[153.542, 160.416, -32.794]}
          rotation={[-1.588, -Math.PI / 2, 0]}
          scale={[6.376, 5.627, 16.864]}
        />
        <mesh
          name="Plane024"
          castShadow
          receiveShadow
          geometry={nodes.Plane024.geometry}
          material={materials.GlassBalcony}
          position={[103.171, 160.003, -27.843]}
          rotation={[0, 0, 1.588]}
          scale={[6.286, 6.393, 10.461]}
        />
        <mesh
          name="Plane025"
          castShadow
          receiveShadow
          geometry={nodes.Plane025.geometry}
          material={materials.GlassBalcony}
          position={[49.48, 160.416, 73.483]}
          rotation={[-1.588, -Math.PI / 2, 0]}
          scale={[6.354, 6.371, 13.393]}
        />
        <mesh
          name="Plane026"
          castShadow
          receiveShadow
          geometry={nodes.Plane026.geometry}
          material={materials.GlassBalcony}
          position={[22.841, 160.416, 73.483]}
          rotation={[-1.588, -Math.PI / 2, 0]}
          scale={[6.354, 6.371, 13.393]}
        />
        <mesh
          name="Plane027"
          castShadow
          receiveShadow
          geometry={nodes.Plane027.geometry}
          material={materials.GlassBalcony}
          position={[-3.916, 160.416, 73.483]}
          rotation={[-1.588, -Math.PI / 2, 0]}
          scale={[6.354, 6.371, 13.393]}
        />
        <mesh
          name="Plane028"
          castShadow
          receiveShadow
          geometry={nodes.Plane028.geometry}
          material={materials.GlassBalcony}
          position={[-28.692, 160.416, 73.483]}
          rotation={[-1.588, -Math.PI / 2, 0]}
          scale={[6.354, 6.371, 11.341]}
        />
        <mesh
          name="Plane029"
          castShadow
          receiveShadow
          geometry={nodes.Plane029.geometry}
          material={materials.GlassBalcony}
          position={[-39.952, 160.416, 65.559]}
          rotation={[0, 0, 1.588]}
          scale={[6.355, 7.238, 7.638]}
        />
        <mesh
          name="Plane030"
          castShadow
          receiveShadow
          geometry={nodes.Plane030.geometry}
          material={materials.GlassBalcony}
          position={[-30.313, 133.618, 75.228]}
          rotation={[1.553, Math.PI / 2, 0]}
          scale={[14.264, 19.077, 20.301]}
        />
        <mesh
          name="Cube013"
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials['Material.001']}
          position={[-50.35, 132.588, 73.511]}
          rotation={[0, 0, 3.124]}
          scale={[0.846, 13.438, 1.227]}
        />
        <mesh
          name="Plane019"
          castShadow
          receiveShadow
          geometry={nodes.Plane019.geometry}
          material={materials.GlassBalcony}
          position={[170.217, 160.416, -20.948]}
          rotation={[Math.PI, 0, -1.553]}
          scale={[6.355, 7.238, 11.788]}
        />
        <mesh
          name="Plane033"
          castShadow
          receiveShadow
          geometry={nodes.Plane033.geometry}
          material={materials.GlassBalcony}
          position={[169.749, 160.416, 67.425]}
          rotation={[0, 0, 1.588]}
          scale={[6.354, 6.371, 6.031]}
        />
        <mesh
          name="Plane034"
          castShadow
          receiveShadow
          geometry={nodes.Plane034.geometry}
          material={materials.GlassBalcony}
          position={[120.561, 160.416, -32.794]}
          rotation={[-1.588, -Math.PI / 2, 0]}
          scale={[6.376, 5.627, 16.864]}
        />
        <mesh
          name="Cube001"
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.upperbody}
          position={[3.964, 168.475, 18.461]}
          scale={[52.96, 18.807, 45.708]}
        />
        <mesh
          name="Plane038"
          castShadow
          receiveShadow
          geometry={nodes.Plane038.geometry}
          material={materials['Material.004']}
          position={[103.486, 120.147, 39.253]}
          rotation={[0, 0, -Math.PI]}
          scale={[38.711, 12.933, 30.398]}
        />
        <mesh
          name="Plane036"
          castShadow
          receiveShadow
          geometry={nodes.Plane036.geometry}
          material={materials.GlassBalcony}
          position={[40.624, 133.186, 74.451]}
          rotation={[-1.571, -1.565, 0]}
          scale={[14.775, 17.688, 17.721]}>
          <mesh
            name="Icosphere001"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere001.geometry}
            material={nodes.Icosphere001.material}
            position={[-0.127, -0.094, 0.9]}
            rotation={[1.579, -0.008, -1.549]}
            scale={[0.022, 0.05, 0.049]}
          />
        </mesh>
        <mesh
          name="Plane042"
          castShadow
          receiveShadow
          geometry={nodes.Plane042.geometry}
          material={materials['Material.005']}
          position={[70.792, 144.294, 9.139]}
          rotation={[0, 0, 3.124]}
          scale={[1.502, 0.276, 1.401]}
        />
        <mesh
          name="Plane044"
          castShadow
          receiveShadow
          geometry={nodes.Plane044.geometry}
          material={materials['Material.005']}
          position={[70.792, 144.294, 62.962]}
          rotation={[0, 0, 3.124]}
          scale={[1.502, 0.276, 1.401]}
        />
        <mesh
          name="Plane045"
          castShadow
          receiveShadow
          geometry={nodes.Plane045.geometry}
          material={materials['Material.005']}
          position={[140.522, 143.592, 64.478]}
          rotation={[0, 0, 3.124]}
          scale={[1.502, 0.276, 1.401]}
        />
        <mesh
          name="Plane046"
          castShadow
          receiveShadow
          geometry={nodes.Plane046.geometry}
          material={materials['Material.005']}
          position={[140.522, 143.592, 4.614]}
          rotation={[0, 0, 3.124]}
          scale={[1.502, 0.276, 1.401]}
        />
        <mesh
          name="Plane047"
          castShadow
          receiveShadow
          geometry={nodes.Plane047.geometry}
          material={materials['Material.005']}
          position={[47.549, 144.108, -84.256]}
          rotation={[0, 0, 3.124]}
          scale={[0.897, 0.165, 0.836]}
        />
        <mesh
          name="Plane048"
          castShadow
          receiveShadow
          geometry={nodes.Plane048.geometry}
          material={materials['Material.005']}
          position={[47.549, 144.108, -52.123]}
          rotation={[0, 0, 3.124]}
          scale={[0.897, 0.165, 0.836]}
        />
        <mesh
          name="Plane049"
          castShadow
          receiveShadow
          geometry={nodes.Plane049.geometry}
          material={materials['Material.005']}
          position={[140.522, 143.628, -45.095]}
          rotation={[0, 0, 3.124]}
          scale={[0.897, 0.165, 0.836]}
        />
        <mesh
          name="Plane050"
          castShadow
          receiveShadow
          geometry={nodes.Plane050.geometry}
          material={materials['Material.005']}
          position={[140.522, 143.904, -86.957]}
          rotation={[0, 0, 3.124]}
          scale={[0.897, 0.165, 0.836]}
        />
        <mesh
          name="Plane043"
          castShadow
          receiveShadow
          geometry={nodes.Plane043.geometry}
          material={materials['Material.005']}
          position={[22.736, 145.193, -50.963]}
          rotation={[0, 0, 3.124]}
          scale={[1.314, 0.142, 1.233]}
        />
        <mesh
          name="Plane051"
          castShadow
          receiveShadow
          geometry={nodes.Plane051.geometry}
          material={materials['Material.005']}
          position={[25.547, 144.992, -87.483]}
          rotation={[0, 0, 3.124]}
          scale={[1.314, 0.142, 1.233]}
        />
        <mesh
          name="Plane052"
          castShadow
          receiveShadow
          geometry={nodes.Plane052.geometry}
          material={materials['Material.005']}
          position={[-48.258, 145.538, -50.465]}
          rotation={[0, 0, 3.124]}
          scale={[1.314, 0.142, 1.233]}
        />
        <mesh
          name="Plane053"
          castShadow
          receiveShadow
          geometry={nodes.Plane053.geometry}
          material={materials['Material.005']}
          position={[-46.481, 145.707, -88.956]}
          rotation={[0, 0, 3.124]}
          scale={[1.314, 0.142, 1.233]}
        />
        <group
          name="Cube002"
          position={[58.073, 133.572, -10.35]}
          scale={[119.054, 19.443, 100.739]}>
          <mesh
            name="Cube017"
            castShadow
            receiveShadow
            geometry={nodes.Cube017.geometry}
            material={materials.Body}
          />
          <mesh
            name="Cube017_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube017_1.geometry}
            material={materials.Body}
          />
        </group>
        <mesh
          name="Plane054"
          castShadow
          receiveShadow
          geometry={nodes.Plane054.geometry}
          material={materials['Material.005']}
          position={[139.12, 146.484, -11.769]}
          rotation={[0, 0, 3.124]}
          scale={[1.502, 0.276, 2.403]}
        />
        <mesh
          name="Plane055"
          castShadow
          receiveShadow
          geometry={nodes.Plane055.geometry}
          material={materials.GlassBalcony}
          position={[-47.707, 134.824, -70.103]}
          rotation={[0, 0.087, -Math.PI / 2]}
          scale={[5.784, 7.9, 11.512]}
        />
        <mesh
          name="Plane035"
          castShadow
          receiveShadow
          geometry={nodes.Plane035.geometry}
          material={materials.right}
          position={[57.663, 133.618, 37.043]}
          rotation={[0, 0, 1.553]}
          scale={[14.332, 7.191, 38.238]}
        />
        <mesh
          name="Plane039"
          castShadow
          receiveShadow
          geometry={nodes.Plane039.geometry}
          material={materials.right}
          position={[101.928, 133.342, 74.899]}
          rotation={[1.553, Math.PI / 2, 0]}
          scale={[16.773, 10.915, 44.314]}
        />
        <mesh
          name="Plane037"
          castShadow
          receiveShadow
          geometry={nodes.Plane037.geometry}
          material={materials.right}
          position={[145.87, 133.618, 36.888]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[14.385, 7.191, 38.238]}
        />
        <group
          name="Plane041"
          position={[102.291, 132.614, -0.83]}
          rotation={[Math.PI / 2, 1.571, 0]}
          scale={[16.071, 7.647, 43.972]}>
          <mesh
            name="Plane053_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane053_1.geometry}
            material={materials.right}
          />
          <mesh
            name="Plane053_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane053_2.geometry}
            material={materials.right}
          />
        </group>
        <mesh
          name="Plane003"
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials.RightBack}
          position={[30.38, 132.419, -69.868]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={[15.293, 9.239, 29.096]}
        />
        <group
          name="Plane040"
          position={[87.649, 133.064, -40.707]}
          rotation={[Math.PI / 2, 1.571, 0]}
          scale={[14.724, 7.647, 56.948]}>
          <mesh
            name="Plane045_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane045_1.geometry}
            material={nodes.Plane045_1.material}
          />
          <mesh
            name="Plane045_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane045_2.geometry}
            material={materials.RightBack}
          />
        </group>
        <mesh
          name="Plane031"
          castShadow
          receiveShadow
          geometry={nodes.Plane031.geometry}
          material={materials.RightBack}
          position={[144.869, 133.228, -71.209]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={[14.386, 9.239, 29.994]}
        />
        <mesh
          name="Plane004"
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials.leftBack}
          position={[-10.255, 132.871, -41.402]}
          rotation={[Math.PI / 2, 1.571, 0]}
          scale={[14.627, 8.817, 41.759]}
        />
        <mesh
          name="Plane032"
          castShadow
          receiveShadow
          geometry={nodes.Plane032.geometry}
          material={materials.leftBack}
          position={[-52.103, 133.017, -71.424]}
          rotation={[0, 0, 1.553]}
          scale={[14.434, 19.077, 29.88]}
        />
         {/* <Box scale={[1500,1500,2]}  position={[0,113,0]} rotation={[THREE.MathUtils.degToRad(90),0,0]} >
          <meshStandardMaterial attach="material" color="#535760" />
        </Box> */}
      </group>

     
      
       

      
      {/* <Html  transform scale={1}   rotation={[0.23,4.71,0.24]}   position={[57.42,131.26,30.08]} wrapperClass='screen'>
  <iframe src="https://www.youtube.com/embed/ni5fmRGjxzs?si=sRQS3DNx1lCkiafe" />
  </Html>  */}
    </group>
  )
}

useGLTF.preload('/Room (2).glb')
