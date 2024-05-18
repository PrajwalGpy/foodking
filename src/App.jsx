import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ShopContextProvider } from "./pages/shop/context/shop-context.jsx";
import { AuthProvider } from "./pages/shop/context/Authcontext.jsx";
import Home from "./pages/Home/Home.jsx";
import { Contact } from "./pages/contact/Contact";
import { Navbar } from "./pages/shop/components/Navbar.jsx";
import TransactionDetails from "./pages/Order/TransactionDetails.jsx";
import { Shop } from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import { CardInfo } from "./pages/shop/CardInfo";
import Login from "./pages/User/Login";
import SignIn from "./pages/User/SignIn";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
        return; // Exit the loop early if the item is already present
      }
    });

    if (isPresent) {
      return; // If item is already in cart, do nothing
    } else {
      // If item is not in cart, add it
      setCart([...cart, item]);
    }
  };

  return (
    <div className="App">
      <AuthProvider>
        <ShopContextProvider>
          <Router>
            <Navbar size={cart.length} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/shop"
                element={<Shop handleClick={handleClick} />}
              />
              <Route
                path="/cardinfo"
                element={<CardInfo handleClick={handleClick} />}
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart cart={cart} />} />
              <Route path="/order" element={<TransactionDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signin" element={<SignIn />} />
            </Routes>
          </Router>
        </ShopContextProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
