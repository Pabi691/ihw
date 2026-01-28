import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalProvider } from './global/GlobalContext';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
// import { StrictMode } from 'react';

function Root() {

  useEffect(() => {
    const INACTIVITY_LIMIT = 60 * 60 * 1000;

    const clearAuth = () => {
      localStorage.removeItem("userToken");
      localStorage.removeItem("lastActivity");
      sessionStorage.clear();
    };

    const last = localStorage.getItem("lastActivity");

    if (last && Date.now() - last > INACTIVITY_LIMIT) {
      clearAuth();
      window.location.replace("/login");
      return;
    }

    let timeout;
    const updateActivity = () => {
      if (timeout) return;
      timeout = setTimeout(() => {
        localStorage.setItem("lastActivity", Date.now());
        timeout = null;
      }, 5000);
    };

    ["mousemove", "keydown", "click", "scroll", "touchstart"].forEach(
      (event) => window.addEventListener(event, updateActivity)
    );

    updateActivity();

    const interval = setInterval(() => {
      const last = localStorage.getItem("lastActivity");
      if (last && Date.now() - last > INACTIVITY_LIMIT) {
        clearAuth();
        window.location.replace("/login");
      }
    }, 60000);

    return () => {
      clearInterval(interval);
      ["mousemove", "keydown", "click", "scroll", "touchstart"].forEach(
        (event) => window.removeEventListener(event, updateActivity)
      );
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
