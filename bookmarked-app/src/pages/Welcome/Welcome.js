import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { auth, database } from "../../firebase-config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import logoNoTitle from "../../images/bookmarked-logo-notitle.png";
import googleLogo from "../../images/GoogleLoginLogo.png";
import {doc, setDoc, getDoc} from "firebase/firestore";
import "./Welcome.css";

export default function Welcome() {
  const history = useHistory();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    let timeoutId = null; // Initialize a variable to keep track of the timeout

    const handleScroll = () => {
      const position = window.pageYOffset;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollPosition(position);

      // Check if scrolled more than halfway
      if (position >= maxScroll / 2) {
        // Clear any existing timeout to avoid multiple redirects
        if (timeoutId !== null) {
          clearTimeout(timeoutId);
        }
        // Set a new timeout to redirect after 2000 milliseconds (2 seconds)
        timeoutId = setTimeout(() => {
          // history.push("/writingdoc");
        }, 2000); // Adjust the time as needed
      } else {
        // If user scrolls away from the halfway point, clear the timeout
        if (timeoutId !== null) {
          clearTimeout(timeoutId);
          timeoutId = null;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Ensure to clear the timeout when the component unmounts to prevent memory leaks
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
    };
  }, [history]);

  // Calculate opacity based on scroll position
  const welcomeOpacity = Math.max(1 - scrollPosition / 400, 0); // Fades out as you scroll
  const loadingOpacity = Math.min(scrollPosition / 1000, 1); // Fades in as you scroll down

  // Login, prompt tutorial if new user
  const signInWithGoogle = () => {
    setShowLogin(false);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const tutorialRef = doc(database, "tutorial", user.uid);
        // console.log(`login ${user.uid}`);
        getDoc(tutorialRef).then((doc) => {
          if (doc.exists()) {
            history.push("/writingdoc");
          } else {
            console.log("new user");
            setDoc(tutorialRef, { uid: user.uid })
              .then(() => {
                history.push("/tutorial/welcome");
              })
              .catch((error) => {
                console.error("Error setting document:", error);
              });
          }
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="welcome-page">
      <h1
        className="welcome-text"
        style={{ opacity: welcomeOpacity, transition: "opacity 0.5s linear" }}
      >
        Welcome, Author!
      </h1>
      <h1
        className="arrow"
        style={{
          marginTop: "30px",
          opacity: welcomeOpacity,
          transition: "opacity 0.5s linear",
        }}
      >
        {" "}
        ^{" "}
      </h1>

      <div className="login-section">
        <img
          className="login-logo"
          alt="bookmarked book logo"
          src={logoNoTitle}
          style={{
            marginTop: "600px",
            opacity: loadingOpacity,
            transition: "opacity 0.2s linear",
          }}
        />
        <h1 className="login-header">Enter your workspace</h1>
        {showLogin ? (
          <>
            <h2 className="login-instructions">Please sign in using</h2>
            <img
              className="google-login-logo"
              alt="Google login button"
              src={googleLogo}
              onClick={signInWithGoogle}
            />
          </>
        ) : (
          <>
            <div className="loading-dots" style={{ opacity: loadingOpacity }}>
              <div className="loading-dot"></div>
              <div className="loading-dot"></div>
              <div className="loading-dot"></div>
            </div>
          </>

        )}
      </div>

      {/* <img className="logo" src={logo} alt="Logo" style={{ marginTop: '800px', opacity: loadingOpacity, transition: 'opacity 0.2s linear' }} /> */}

      {/* Add loading dots with improved visibility handling */}
      {/* <div className="loading-dots" style={{ opacity: loadingOpacity }}>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
      </div> */}
    </div>
  );
}
