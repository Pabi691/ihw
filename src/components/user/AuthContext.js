import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(localStorage.getItem('userToken')); 
  const [localCartItems, setLocalCartItems] = useState(
    JSON.parse(localStorage.getItem('localCart')) || []
  );
  // const uservarified = localStorage.getItem('uservarified');
  // const webToken = process.env.REACT_APP_WEB_TOKEN; // Default token for unauthenticated users
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    if (userToken) {
      // const encryptedToken = CryptoJS.AES.encrypt(userToken, secretKey).toString(); // Encrypt the token
      // localStorage.setItem('userToken', encryptedToken);
      localStorage.setItem('userToken', userToken);
      // localStorage.removeItem('webToken', webToken);
    } else {
      localStorage.removeItem('userToken');
      // localStorage.setItem('webToken', webToken);
    }
  }, [userToken]);

  // const decryptedToken = token
  // ? CryptoJS.AES.decrypt(token, secretKey).toString(CryptoJS.enc.Utf8) // Decrypt the token
  // : null;

  useEffect(() => {
    if (apiUrl) {
      localStorage.setItem('apiurl', apiUrl);
    } else {
      localStorage.removeItem('apiurl');
    }
  }, [apiUrl]);

  useEffect(() => {
    if (localCartItems.length === 0) {
      localStorage.removeItem('localCart');
    } else {
      localStorage.setItem('localCart', JSON.stringify(localCartItems));
    }
  }, [localCartItems]);

  const setToken = (token) => {
    setUserToken(token); 

    // if(uservarified === null) return;
    
    // if(uservarified && uservarified !== null ){
    //   navigate('/myaccount');
    //   window.location.reload();
    // }
    
    
  };

  const logout = () => {
    // Clear authentication-related states
    setUserToken(null);
    setLocalCartItems([]);

    // Remove all relevant localStorage and sessionStorage data
    localStorage.clear();  // Clears all localStorage items
    sessionStorage.clear(); // Clears sessionStorage if used

    // Redirect to login page
    navigate('/login');

    // Force reload to ensure session cleanup
    window.location.reload();
};

  

  // const getToken = () => userToken || webToken;

  return (
    <AuthContext.Provider value={{ userToken, setToken, logout, apiUrl }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
