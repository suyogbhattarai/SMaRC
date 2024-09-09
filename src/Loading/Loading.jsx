// Loading.js
import React, { useEffect } from 'react';
import "./LoadingPage.css";
import { Html } from '@react-three/drei';

function Loading({ onLoad }) {
  useEffect(() => {
    // Simulate loading complete after a delay or use actual logic
    const timer = setTimeout(() => {
      if (onLoad) onLoad();
    }, 1000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, [onLoad]);

  return (
    <Html>
      <div className="loading-container">
        <div className="spinner"></div>
        <h2>Loading...</h2>
      </div>
    </Html>
  );
}

export default Loading;
