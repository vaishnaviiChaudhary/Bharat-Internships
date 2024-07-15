import React from "react";
import LazyLoad from 'react-lazyload';
import Navbar from "./Navbar";
import "../App.css"; // Import the common CSS file
import rotatedImage from "../Assets/img2.png"; // Replace with your actual rotated image path
import rotatedImage3 from "../Assets/img3.png";
import rotatedImage2 from "../Assets/Woman doing programming on laptop.png"; // Replace with your actual rotated image path

function Programs() {
  const programsData = [
    {
      title: "1 MONTH VIRTUAL TRAINING PROGRAM",
      descriptionPoints: [
        "1 month certificate", "Letter of recommendation", "Intensive training"
      ],
      additionalText: "12000/-",
    },
    {
      type: "image", // Placeholder for the image
      imageUrl: rotatedImage2,
    },
    {
      title: "3 MONTHS TRAINING AND INTERNSHIP PROGRAM",
      descriptionPoints: [
        "3 month certificate", "Letter of recommendation", "Intensive training", "Job opportunities"
      ],
      additionalText: "28000/-",
    },
    // Add more highlights as needed
  ];

  return (
    <div id="programs">
      <div className="highlights-container">
        <Navbar />
        <h2 className="highlightHeading">Our Programs</h2>

        {/* Display all highlights */}
        <div className="highlights">
          {programsData.map((highlight, index) => (
            <React.Fragment key={index}>
              {highlight.type === "image" ? (
                <div className="highlight-image">
                  <LazyLoad height={200} offset={100}>
                    <img src={highlight.imageUrl} alt="Highlight" className="between-cards-image" />
                  </LazyLoad>
                </div>
              ) : (
                <div className="highlight-content">
                  <div className="highlight-info">
                    <p className="highlight-title">{highlight.title}</p>
                    <ul className="description-points">
                      {highlight.descriptionPoints.map((point, index) => (
                          <li key={index}>{point}</li>
                      ))}
                    </ul>
                    {highlight.additionalText && (
                      <p className="additional-text">{highlight.additionalText}</p>
                    )}
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Rotated Images */}
        <React.Fragment>
          <div className="rotated-image-container1">
            <LazyLoad height={200} offset={100}>
              <img src={rotatedImage3} alt="image1" className="rotated-image3" />
            </LazyLoad>
          </div>
          <div className="rotated-image-container4">
            <LazyLoad height={200} offset={100}>
              <img src={rotatedImage} alt="image2" className="rotated-image2" />
            </LazyLoad>
          </div>
        </React.Fragment>
      </div>
    </div>
  );
}

export default Programs;
