import React from 'react'

function Light() {
  return (
    <>
        <ambientLight intensity={1}/>
        <directionalLight castShadow position={[0,0,0]} intensity={10}/>
    </>
  )
}

export default Light