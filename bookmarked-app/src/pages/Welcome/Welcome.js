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
    if (scrollPosition > 800) { // Adjust this threshold as needed
      history.push("/loading");
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition, history]);

  // Calculate opacity based on scroll position
  // Adjust these calculations as needed based on your page's design
  const welcomeOpacity = Math.max(1 - scrollPosition / 400, 0); // Fades out as you scroll
  const loadingOpacity = Math.min(scrollPosition / 800, 1); // Fades in as you scroll down

  return (
    <div className="welcome-page">
      <h1 class="welcome-text" style={{ opacity: welcomeOpacity, transition: 'opacity 0.5s linear' }}>Welcome, Author!</h1>
      <h1 class="arrow" style={{ marginTop: '30px', opacity: welcomeOpacity, welcotransition: 'opacity 0.5s linear' }}> ^ </h1>

      <img class="logo" src={logo} alt="Loading page" style={{ marginTop: '800px', opacity: loadingOpacity, transition: 'opacity 0.5s linear' }} />
    </div>
  );
}