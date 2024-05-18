// CartItem.jsx
import React, { useState } from "react";
import "./cart.css";
import { useNavigate } from "react-router-dom";
const CartItem = ({
  cloudinaryImageId,
  name,
  price,
  onUpdateTotalAmount,
  cuisine,
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleUpdateQuantity = (value) => {
    const newQuantity = Math.max(1, quantity + value); // Ensure quantity is not negative
    setQuantity(newQuantity);
    onUpdateTotalAmount(price * newQuantity); // Update total amount in parent component
  };

  const Navigate = useNavigate();

  function ordernow() {
    Navigate("/order", {
      state: {
        name,
        cuisine,
        areaName,
        sla,
        quantity,
        costForTwo,
        avgRatingString,
        cloudinaryImageId,
      },
    });
  }
  return (
    <div>
      <div className="cartItem">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
            cloudinaryImageId
          }
          alt={name}
        />
        <div className="description">
          <p>
            <b>
              <h3>{name}</h3>
            </b>
          </p>
          <p>
            <b>{cuisine}</b>
          </p>
          <p>Price:₹ {price}</p>
          <div className="countHandler">
            <button
              onClick={() => handleUpdateQuantity(-1)}
              onChange={ordernow}
            >
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => handleUpdateQuantity(1)}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
