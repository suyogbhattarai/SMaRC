import React from 'react'
import "./LoadingPage.css"
import { Html } from '@react-three/drei'

function Loading() {    
  return (
    <>
    <Html>
    <div className="loading-container">
      <div className="spinner"></div>
      <h2>Loading...</h2>
    </div>
    </Html>

    </>
  )
}

export default Loading