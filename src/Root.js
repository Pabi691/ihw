import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalProvider } from './global/GlobalContext';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
// import { StrictMode } from 'react';

function Root() {

  useEffect(() => {
    const INACTIVITY_LIMIT = 60 * 60 * 1000; // 1 hour

    function updateActivity() {
      localStorage.setItem("lastActivity", Date.now());
    }

    // Add listeners for any activity
    window.addEventListener("mousemove", updateActivity);
    window.addEventListener("keydown", updateActivity);
    window.addEventListener("click", updateActivity);
    window.addEventListener("scroll", updateActivity);
    window.addEventListener("touchstart", updateActivity);

    updateActivity(); // set initial timestamp

    const interval = setInterval(() => {
      const last = localStorage.getItem("lastActivity");
      if (!last) return;

      if (Date.now() - last > INACTIVITY_LIMIT) {
        localStorage.clear();
        sessionStorage.clear();

        // Optional redirect
        window.location.href = "/login";
      }
    }, 60000); // check every 1 minute

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", updateActivity);
      window.removeEventListener("keydown", updateActivity);
      window.removeEventListener("click", updateActivity);
      window.removeEventListener("scroll", updateActivity);
      window.removeEventListener("touchstart", updateActivity);
    };
  }, []);
  
  return (
    // <StrictMode>
    <HelmetProvider>
      <Router>
        <GlobalProvider>
          <App />
        </GlobalProvider>
      </Router>
    </HelmetProvider>
    // </StrictMode>
  );
}

export default Root;
