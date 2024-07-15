import React, { useTransition } from "react";
import LazyLoad from 'react-lazyload';
import Navbar from "./Navbar";
import "../App.css"; // Import the common CSS file
import yourImage from '../Assets/whyUsContent.png'; // Import your image file

const WhyUs = () => {
  // useTransition hook for lazy loading image
  const [startTransition] = useTransition();

  return (
    <>
      <div id="why-us" className="whyUs-container">
        <Navbar />
        {/* Additional content for whyUs component */}
        <div className="whyUs-text-section">
          <div className="colored-text-whyUs">
            <h1>
              <span className="blue">Elevate</span>{" "}
              <span className="orange">your</span>{" "}
              <span className="blue">learning</span>{" "}
              <span className="orange">Experience</span>
            </h1>
          </div>
          <h2 className="black-text">Choose us!</h2>
          <button className="contained-button">Learn more...</button>
        </div>
        <LazyLoad height={200} offset={100}>
          <img
            src={yourImage}
            alt="Content"
            className="right-side-image"
            onLoad={() => {
              startTransition(() => {
                // Placeholder logic for handling lazy loaded image transitions
              });
            }}
          />
        </LazyLoad>
      </div>
    </>
  );
};

export default WhyUs;
