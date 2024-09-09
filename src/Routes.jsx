import React, { lazy } from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';

const Experience = lazy(() => import('./Experience/Experience'));
const AssistedVision = lazy(() => import("./AssistedVison/AssistedVision"));
const AI = lazy(() => import('./AI/AI'));
const IOT = lazy(() => import('./IOT/IOT'));
const Robotics = lazy(() => import('./Robotics/Robotics'));
const Passage = lazy(() => import('./Passage/Passage'));

function RoutesComponent() {
  return (
    <ReactRoutes>
      <Route path='/' element={<Experience />} />
      <Route path="/vision" element={<AssistedVision />} />
      <Route path="/AI" element={<AI />} />
      <Route path="/IOT" element={<IOT />} />
      <Route path="/robotics" element={<Robotics />} />
      <Route path="/projects" element={<Passage />} />
    </ReactRoutes>
  );
}

export default RoutesComponent;
