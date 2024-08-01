import React from 'react'
import "./visioninterface.css"
import { Html } from '@react-three/drei'

function VisionInterface() {
  return (
    <>
<Html>
    <div className="top">
        <div className="left">
        <Html distanceFactor={1.15} transform position={[-59.728489170862275,123.61325546061033,-0.4185308963159944]}   rotation={[0,THREE.MathUtils.degToRad(45),0]}    wrapperClass={`interface ${enterVision ? 'visible' : ''}`}>
      <div className="enterVision">
<h2>Lets enter assisted vision!</h2>
<div className="btnRow">
  <div onClick={()=>navigateTo("./vision")} className="ok">
    Ok
  </div>
  <div className="later">
    Later
  </div>
</div>
 

 


    
  
    </div>
      </Html>
        </div>
        <div className="right">
            
        </div>
    </div>
</Html>
    </>
  )
}

export default VisionInterface