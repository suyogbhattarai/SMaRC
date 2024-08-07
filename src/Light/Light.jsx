import React from 'react'

function Light() {
  return (
    <>
        <ambientLight intensity={0}/>
        <directionalLight castShadow position={[110,700,100]} intensity={5}/>
    </>
  )
}

export default Light