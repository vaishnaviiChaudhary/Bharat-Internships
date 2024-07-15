import React, { useTransition } from "react";
import Navbar from "./Navbar";
import "../App.css"; // Import the common CSS file

const Home = () => {
  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // useTransition hook for scrolling
  const [startTransition] = useTransition();

  const handleScrollToTop = () => {
    startTransition(() => {
      scrollToTop();
    });
  };

  return (
    <>
      <div id="home" className="home-container">
        {/* Memoized Navbar */}
        <MemoizedNavbar />
        <div className="home-text-section">
          <div className="colored-text">
            <h1>
              <span className="blue">Internship</span>{" "}
              <span className="orange">and</span>
              <br />
              <span className="blue">Training</span>{" "}
              <span className="orange">Opportunity</span>
            </h1>
            <h2 className="black">Onboarding 50 Interns!</h2>
            <h2 className="black">Hurry Up! Limited Slots Available!</h2>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button className="Btn" onClick={handleScrollToTop}>
        <svg className="arrow" viewBox="0 0 20 20">
          <path d="M10 0 L5 10 L15 10 Z"></path>
        </svg>
        <div className="text">Back to Top</div>
      </button>
    </>
  );
};

// Memoized Navbar component
const MemoizedNavbar = React.memo(Navbar);

export default Home;
