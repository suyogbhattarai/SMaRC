import React, { useEffect } from 'react';
import './home.css';
import { gsap } from 'gsap';

function Home() {
  useEffect(() => {
    // GSAP Animations
    // Animate each letter of the h1 text with a staggered effect
    gsap.fromTo('.smarc-text span', 
      { y: '100%', opacity: 0 }, 
      { y: '0%', opacity: 1, duration: 2, stagger: 0.5, ease: 'power2.out' }
    );

    // Fade in the h4 text as a whole
    gsap.fromTo('.smarc-subtext', 
      { opacity: 0 }, 
      { opacity: 1, duration: 3, ease: 'power2.out', delay: 2.5 }
    );
  }, []);

  return (
    <>
      <div className="navbar-container">
        <div className="logo">
          <a href="./"><img src="./smarcLOGO.png" alt="Logo" /></a>
        </div>
        <div className="navbar">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/?redirect=navbar&scrollPosition=3.013384556516312">AssistedVision</a></li>
            <li><a href="/?redirect=navbarRobotics&scrollPosition=6.113384556516312">Projects</a></li>
          </ul>
        </div>
      </div>
      <div className="body-container">
        <div className="text">
          <h1 className="smarc-text">
            { 'SMARC'.split('').map((letter, index) => (
              <span key={index}>{letter}</span>
            )) }
          </h1>
          <h4 className="smarc-subtext">Skill Museum & Research Center</h4>
        </div>
        {/* <div className="footer">
          <div className="navigate">
            <p>scroll to navigate</p>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Home;
