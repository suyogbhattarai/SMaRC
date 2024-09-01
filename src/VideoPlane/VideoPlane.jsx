import React from 'react'
import { useVideoTexture } from "@react-three/drei";
import { DoubleSide } from "three";
function VideoPlane({src}) {
    const texture = useVideoTexture(src);
  return (
    <>
    
       <meshStandardMaterial side={DoubleSide} map={texture} toneMapped={false} />
    </>
  )
}

export default VideoPlane