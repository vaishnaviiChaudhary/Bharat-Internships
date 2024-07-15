import React, { useState, useCallback } from 'react';
import './App.css'; // Make sure your CSS file is imported
import Home from './Components/Home';
import WhyUs from './Components/whyUs';
import Programs from './Components/Programs';
import Blogs from './Components/Blogs';
import Footer from './Components/Footer';
import Highlights from './Components/Highlights';
import Testimonials from './Components/testimonials';
import StickyButton from './Components/StickyButton';
import FixedImage from './Components/FixedImage';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = useCallback(() => {
    setIsDarkTheme(prevTheme => !prevTheme);
  }, []);

  return (
    <div className={`App ${isDarkTheme ? 'dark-theme' : ''}`}>
      {/* Toggle Theme Button */}
      <button onClick={toggleTheme} className="toggle-button">
        {isDarkTheme ? 'Light Theme' : 'Dark Theme'}
      </button>

      {/* Content Components */}
      <div className="content">
        <Home />
        <Highlights />
        <WhyUs />
        <Programs />
        <Blogs />
        <Testimonials />
        <StickyButton />
        <FixedImage />
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default React.memo(App);
