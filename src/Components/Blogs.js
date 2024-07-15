import React, { useTransition } from "react";
import LazyLoad from 'react-lazyload';
import Navbar from "./Navbar";
import "../App.css"; // Import the common CSS file
import image1 from "../Assets/item4.png"; // Replace with actual image path
import image2 from "../Assets/item6.png"; // Replace with actual image path

const Blogs = () => {
  const [startTransition] = useTransition();

  return (
    <div id="blogs">
      <div className="blogs-container">
        <Navbar />
        
        <div className="blogs-colored-text">
          <h1>
            <span className="orange">Trends</span> <span className="blue">and</span> <span className="orange">Insights</span> <span className="blue">on</span> <span className="orange">Internships</span> 
          </h1>
          <h1>
            <span className="blue">in</span> <span className="orange">India</span>
          </h1>
        </div>
        
        <div className="grid-container">
          <div className="grid-item item1">
            <a href="https://www.indiatoday.in/education-today/jobs-and-careers/story/indian-students-prefer-internship-internship-vs-training-skills-needed-1594510-2019-09-02" target="_blank" rel="noopener noreferrer">
              84% of Indian Students Prefer Internships
            </a>
          </div>
          <div className="grid-item item2">
          </div>
          <div className="grid-item item3">
            <a href="https://economictimes.indiatimes.com/jobs/76000-students-applied-to-internships-every-day-in-past-year-survey/articleshow/81967814.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst" target="_blank" rel="noopener noreferrer">
              Pandemic Spurs 35% Rise in Internship Seekers
            </a>
          </div>
          <div className="grid-item item4">
            <a href="https://www.indiatoday.in/education-today/jobs-and-careers/story/indian-students-prefer-internship-internship-vs-training-skills-needed-1594510-2019-09-02" target="_blank" rel="noopener noreferrer">
              <LazyLoad height={200} offset={100}>
                <img 
                  src={image1} 
                  alt="img 1" 
                  className="grid-image" 
                  onLoad={() => {
                    startTransition(() => {
                      // Placeholder for any logic needed after image load
                    });
                  }}
                />
              </LazyLoad>
            </a>
          </div>
          <div className="grid-item item5"></div>
          <div className="grid-item item6">
            <a href="https://economictimes.indiatimes.com/jobs/76000-students-applied-to-internships-every-day-in-past-year-survey/articleshow/81967814.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst" target="_blank" rel="noopener noreferrer">
              <LazyLoad height={200} offset={100}>
                <img 
                  src={image2} 
                  alt="img 2" 
                  className="grid-image" 
                  onLoad={() => {
                    startTransition(() => {
                      // Placeholder for any logic needed after image load
                    });
                  }}
                />
              </LazyLoad>
            </a>
          </div>
        </div>
        
        {/* Curved Rectangle */}
        <div className="curved-rectangle">
          <a href="https://www.businessinsider.in/internships-in-india-on-the-rise-with-startups-leading-the-way/articleshow/67655265.cms" target="_blank" rel="noopener noreferrer">
            India Sees 80% Surge in Internship Applications
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default Blogs;
