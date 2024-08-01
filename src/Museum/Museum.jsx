import React, { useRef } from 'react'

import Headset from '../Headset/Headset'
import Building1 from '../Building1/Building1'
import Building2 from '../Building2/Building2'
import { useLocation } from 'react-router-dom'


function Museum() {
  const location = useLocation();
  return (
    <>
      
  <Building1/>



{location.pathname === '/'  && (
  <Headset position={[5.61426634215108,127.24710452637544,-29.361474255309062]} scale={15}/>
)}








</>


    
   
    
    
 
  )
}

export default Museum