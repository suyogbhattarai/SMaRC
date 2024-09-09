import React, { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Vector3, Color } from 'three';
import { SpotLight as DreiSpotLight } from '@react-three/drei'; // Import SpotLight from @react-three/drei
import './movingspot.css';

function MovingSpot({ vec = new Vector3(), hologramColor = new Color("blue"), textPosition = [0, 0, 0], ...props }) {
    const light = useRef();
    const textRef = useRef();
    const viewport = useThree((state) => state.viewport);

    useEffect(() => {
        if (light.current) {
            light.current.target.position.set(viewport.width / 3, viewport.height / 2, 0);
            light.current.target.updateMatrixWorld();
        }
    }, [viewport]);

    useFrame((state) => {
        if (light.current && light.current.target) {
            light.current.target.position.lerp(
                vec.set(
                    (state.mouse.x * viewport.width) / 3,
                    (state.mouse.y * viewport.height) / 2,
                    0
                ),
                0.1
            );
            light.current.target.updateMatrixWorld();

            if (textRef.current) {
                textRef.current.position.copy(light.current.target.position.clone().add(new Vector3(...textPosition)));
            }
        }
    });

    return (
        <>
            <DreiSpotLight
                ref={light}
                color={hologramColor}
                distance={2000}
                angle={Math.PI / 4} // Increase angle to 45 degrees for a wider beam
                intensity={1.5}
                attenuation={90}
                penumbra={1}
                anglePower={10}
                decay={2}
                {...props}
            />
        </>
    );
}

export default MovingSpot;
