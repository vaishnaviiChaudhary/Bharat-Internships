import React, { useTransition } from "react";
import LazyLoad from 'react-lazyload';
import Navbar from "./Navbar";
import "../App.css"; // Import the common CSS file

// Import images for testimonials (replace with your actual image paths)
import person1Image from "../Assets/Priya Gowda.png";
import person2Image from "../Assets/MVVS Krishna.png";
import person3Image from "../Assets/Riyashmin Ahmed.png";
import person4Image from "../Assets/ShivKumar Rathod.png";
import person5Image from "../Assets/Shyoni Jana.png";
import rotatedImage from "../Assets/img2.png"; // Replace with your actual rotated image path

function Testimonials() {
  const [startTransition] = useTransition();

  // Testimonial data
  const testimonials = [
    {
      name: "Shyoni Jana",
      profession: "Customer Relationship Manager",
      review: "Enrolling in Bharat Internships has been a game-changer for my career. The program sharpened my skills and opened up a world of job opportunities. The training was incredibly thorough, and the hands-on experience I gained is something I truly value. Even though I initially hesitated because of the fee, it was definitely worth it. I now have a clear career path and a fantastic job. I highly recommend Bharat Internships to anyone looking to boost their career.",
      image: person5Image,
    },
    {
      name: "ShivKumar Rathod",
      profession: "Marketing Intern",
      review: "Joining Bharat Internships was a pivotal moment for me. The program was intense and focused on developing skills that helped me advance in my career. Although the fee seemed steep at first, it was completely worth it considering the job opportunities that came my way. I came out of the internship more skilled and confident, and I quickly secured a job in my desired field. Bharat Internships is a fantastic investment in your future.",
      image: person4Image,
    },
    {
      name: "Riyashmin Ahmed",
      profession: "Assistant sales executive ",
      review: "Bharat Internships gave me a wonderful platform to improve my skills and land several job opportunities. The training was detailed and aligned with industry needs, ensuring I was ready for the job market. The fee was worth every penny for the immense value I received. I feel more capable and competitive in my career now. I highly recommend Bharat Internships to anyone looking to advance their professional journey.",
      image: person3Image,
    },
    {
      name: "MVVS Krishna",
      profession: "Web developer",
      review: "This programme gave a boost to my career, and the mentors are so supportive . I always wanted to join an internship where I excelled and developed my skills, so i would suggest Bharat internships is the best path for an internship.",
      image: person2Image,
    },
    {
      name: "Priya Gowda",
      profession: "Assistant Business development executive ",
      review: "My time with Bharat Internships was nothing short of amazing. The program was thoughtfully designed to help us excel in our fields. The skills I developed during the internship significantly boosted my confidence and employability. The fee was a smart investment, especially considering the job opportunities that followed. Bharat Internships genuinely set the stage for my professional growth.",
      image: person1Image,
    },
  ];

  return (
    <div id="testimonials">
      <div className="students-container">
        <Navbar />
        <h2 className="studentHeading">What Students Say</h2>

        {/* Rotated Images (Assuming these are decorative and not part of the testimonials) */}
        <div className="rotated-image-container1">
          <LazyLoad height={200} offset={100}>
            <img 
              src={rotatedImage} 
              alt="image1" 
              className="rotated-image3" 
              onLoad={() => {
                startTransition(() => {
                  // Placeholder for any logic needed after image load
                });
              }}
            />
          </LazyLoad>
        </div>
        <div className="rotated-image-container2">
          <LazyLoad height={200} offset={100}>
            <img 
              src={rotatedImage} 
              alt="image2" 
              className="rotated-image2" 
              onLoad={() => {
                startTransition(() => {
                  // Placeholder for any logic needed after image load
                });
              }}
            />
          </LazyLoad>
        </div>

        {/* Testimonials Slider */}
        <div className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="profile-pic">
                <LazyLoad height={200} offset={100}>
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    onLoad={() => {
                      startTransition(() => {
                        // Placeholder for any logic needed after image load
                      });
                    }}
                  />
                </LazyLoad>
              </div>
              <div className="testimonial-info">
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.profession}</h4>
                <p>{testimonial.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
