
import React, { useRef, useEffect} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Book(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/book.glb')
  const { actions } = useAnimations(animations, group)

    useEffect(() => {
      if (actions && Object.keys(actions).length > 0) {
        const animationName = Object.keys(actions)[0]; // Use the first animation available
        const action = actions[animationName];
        action.play();
        action.timeScale = 0.1; // Decrease the speed of the animation (0.5x speed)
      }
    }, [actions, animations]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_6"> 
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Material}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <group name="Cube_5" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/book.glb')
