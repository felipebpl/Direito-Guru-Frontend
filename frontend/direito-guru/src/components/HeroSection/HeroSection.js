import React from 'react';
import '../../App.css';
import Login2 from '../Login2/Login2'

import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />

      <Login2/>

    </div>
  );
}

export default HeroSection;