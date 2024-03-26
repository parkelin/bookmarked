import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Welcome.css'; // Ensure you have the corresponding CSS

export default function Welcome() {
  const history = useHistory();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Navigate when "Loading..." becomes fully visible
    if (scrollPosition > 1800) {
      history.push("/loading");
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition, history]);

  // Calculate opacity based on scroll position
  const welcomeOpacity = Math.max(1 - scrollPosition / 400, 0); // Fades out as you scroll
  const loadingOpacity = Math.min(scrollPosition / 1000, 1); // Fades in as you scroll down

  return (
    <div className="welcome-page">
      <h1 className="welcome-text" style={{ opacity: welcomeOpacity, transition: 'opacity 0.5s linear' }}>Welcome, Author!</h1>
      <h1 className="arrow" style={{ marginTop: '30px', opacity: welcomeOpacity, transition: 'opacity 0.5s linear' }}> ^ </h1>

      <img className="logo" src={logo} alt="Logo" style={{ marginTop: '800px', opacity: loadingOpacity, transition: 'opacity 0.2s linear' }} />

      {/* Add loading dots with improved visibility handling */}
      <div className="loading-dots" style={{ opacity: loadingOpacity }}>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
      </div>
    </div>
  );
}
