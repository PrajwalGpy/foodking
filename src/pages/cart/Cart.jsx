import React, { useContext, useState, useEffect } from "react";
import CartItem from "./cart-item";
import { ShopContext } from "../shop/context/shop-context";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Calculate initial total amount based on prices of items in the cart
    const initialTotalAmount = cartItems.reduce(
      (total, item) => total + item.price,
      0
    );
    setTotalAmount(initialTotalAmount);
  }, [cartItems]);
  const navigate = useNavigate(); // Use useNavigate hook to navigate to new pages

  const handleUpdateTotalAmount = (newTotal) => {
    setTotalAmount(newTotal);
  };

  const handleOrderNow = () => {
    // Navigate to transaction details page
    navigate("/order", { state: { totalAmount, cartItems } });
  };

  return (
    <div className="cart">
      <div>
        <h1>Your cart items</h1>
      </div>
      <div className="cart-items">
        {cartItems.map((item, id) => (
          <CartItem
            key={id}
            {...item}
            onUpdateTotalAmount={handleUpdateTotalAmount}
          />
        ))}
      </div>
      <div className="total-amount">
        <p>Total Amount: ${totalAmount}</p>
      </div>
      <button onClick={handleOrderNow}>Order Now</button>
    </div>
  );
};

export default Cart;
