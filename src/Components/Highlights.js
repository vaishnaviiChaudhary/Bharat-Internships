import React, { useTransition } from "react";
import LazyLoad from 'react-lazyload';
import Navbar from "./Navbar";
import "../App.css"; // Import the common CSS file
import manWithCertificate from "../Assets/Man with a certificate.png";
import recruitingAdvertisement from "../Assets/Recruiting advertisement.png";
import resumesCandidates from "../Assets/Man looks at the resumes of candidates for a vacancy.png";
import rotatedImage from "../Assets/img1.png"; // Replace with your actual rotated image path
import rotatedImage2 from "../Assets/img2.png"; // Replace with your actual rotated image path

function Highlights() {
  const highlightsData = [
    {
      title: "Full-Time Hiring Opportunity",
      description:
        "Outstanding interns may be offered full-time positions based on performance.",
      imageUrl: resumesCandidates,
    },
    {
      title: "Certificate of Completion",
      description:
        "Receive an internship certificate from Private Limited Company and recommendation letter.",
      imageUrl: manWithCertificate,
    },
    {
      title: "On-Site Opportunity in Bangalore",
      description:
        "Top candidates will have the chance for on-site opportunities following an HR interview",
      imageUrl: recruitingAdvertisement,
    },
    // Add more highlights as needed
  ];

  // useTransition hook for lazy loading images
  const [startTransition] = useTransition();

  return (
    <div id="highlights" className="highlights-container">
      <Navbar />
      <h2 className="highlightHeading">Program Highlights</h2>

      {/* Display all highlights */}
      <div className="container">
        <div className="card__container">
          {highlightsData.map((highlight, index) => (
            <article className="card__article" key={index}>
              <LazyLoad height={200} offset={100}>
                <img
                  src={highlight.imageUrl}
                  alt={highlight.title}
                  className="card__img"
                  onLoad={() => {
                    startTransition(() => {
                      // Placeholder logic for handling lazy loaded image transitions
                    });
                  }}
                />
              </LazyLoad>
              <div className="card__data">
                <h2 className="card__title">{highlight.title}</h2>
                <span className="card__description">{highlight.description}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Rotated Images */}
      <div className="rotated-image-container3">
        <LazyLoad height={200} offset={100}>
          <img src={rotatedImage} alt="image1" className="rotated-image1" />
        </LazyLoad>
      </div>
      <div className="rotated-image-container2">
        <LazyLoad height={200} offset={100}>
          <img src={rotatedImage2} alt="image2" className="rotated-image2" />
        </LazyLoad>
      </div>
    </div>
  );
}

export default Highlights;
