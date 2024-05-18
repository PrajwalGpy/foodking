// AuthContext.js
import React, { createContext, useContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = async (formData) => {
    try {
      const email = formData.get("email");
      const password = formData.get("password");
      const response = await axios.post("http://localhost/loginn.php", {
        email,
        password,
      });
      console.log("Response:", response.data);
      if (response.data.message === "Login successful") {
        setIsLoggedIn(true);
        setUser(response.data.user); // Assuming the server returns user data
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
      // Assuming the server returns user data
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const signin = async (formData) => {
    try {
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");
      const response = await axios.post("http://localhost/signin.php", {
        name,
        email,
        password,
      });
      console.log("Response:", response.data);
      if (response.data.message == "Data added to database successfully") {
        setIsSignedIn(true);
        setUser(response.data.user); // Assuming the server returns user data
      } else {
        setIsSignedIn(false);
        setUser(null);
      }
      // Assuming the server returns user data
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const logout = async () => {
    try {
      // Call the logout PHP endpoint to destroy session on the server
      await axios.get("http://localhost/logout.php");

      // Call the logout function provided by the AuthContext to update the authentication state
      setIsLoggedIn(false);
      setUser(null);
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }

    // Perform logout logic (e.g., destroy session on server)
  };
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, user, login, logout, signin, isSignedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
