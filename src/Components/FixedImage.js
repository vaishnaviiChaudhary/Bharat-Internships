// src/components/FixedImage.js

import React from 'react';
import './FixedImage.css';
import sampleImage from '../Assets/WP.png'; // Replace with your actual image path

const FixedImage = () => {
  return (
    <a href="https://wa.me/8123059031" target="_blank" rel="noopener noreferrer">
  <img src={sampleImage} alt="Fixed" className="fixed-image" />
</a>
  );
};

export default FixedImage;
