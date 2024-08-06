import React from 'react'

function Light() {
  return (
    <>
        <ambientLight intensity={1.2}/>
        <directionalLight castShadow position={[0,0,0]} intensity={20}/>
    </>
  )
}

export default Light