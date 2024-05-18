import React, { createContext, useState } from "react";
import axios from "axios";

export const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (foodItem) => {
    // Make a POST request to your PHP script to add the item to the cart
    axios
      .post("http://localhost/cardinfo.php", foodItem)
      .then((response) => {
        // Handle successful response
        console.log("Item added to cart:", response.data);
        // Update cart state if needed
        setCartItems((prev) => [...prev, foodItem]);
      })
      .catch((error) => {
        // Handle error
        console.error("Error adding item to cart:", error);
      });
  };

  const contextValue = {
    cartItems,
    addToCart,
    // Other context functions...
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
