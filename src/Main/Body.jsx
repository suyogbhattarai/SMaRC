// src/Home/Body.js
import React from 'react';
import { gsap } from 'gsap';
import './body.css';

function Body() {
  React.useEffect(() => {
    // GSAP Animations
    gsap.fromTo('.smarc-text span', 
      {
        y: '100%',
        opacity: 0,
        scale: 0.5,
        rotate: -30,
        color: 'rgba(255, 0, 0, 0)'  // Start with transparent red
      },
      {
        y: '0%',
        opacity: 1,
        scale: 1,
        rotate: 0,
        color: 'rgba(255, 255, 255, 1)',  // End with white
        duration: 2,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        // Add a bounce effect
        onComplete: () => gsap.fromTo('.smarc-text span', { scale: 1 }, { scale: 1.2, repeat: -1, yoyo: true, duration: 0.5 })
      }
    );

    // Fade in and scale up the h4 text as a whole
    gsap.fromTo('.smarc-subtext', 
      {
        opacity: 0,
        scale: 0.8,
        y: 50
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 3,
        ease: 'power2.out',
        delay: 2.5
      }
    );
  }, []);

  return (
    <div className="body-container">
      <div className="text">
        <h1 className="smarc-text">
          { 'SMARC'.split('').map((letter, index) => (
            <span key={index}>{letter}</span>
          )) }
        </h1>
        <h4 className="smarc-subtext">Skill Museum & Research Center</h4>
      </div>
    </div>
  );
}

export default Body;
