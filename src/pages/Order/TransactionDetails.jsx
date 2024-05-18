import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Order.css";
const TransactionDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { totalAmount, cartItems } = location.state || {};

  // Redirect back to shop page after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 55000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <h2>Transaction Details</h2>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Item</th>
            <th>Price</th>
            <th>quantity</th>
          </tr>
        </thead>
        <tbody>
          {cartItems &&
            cartItems.map((item, id) => (
              <tr key={id}>
                <td>
                  {" "}
                  <img
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                      item.cloudinaryImageId
                    }
                    alt={item.name}
                  />
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          <tr>
            <td>Total Amount</td>
            <td>${totalAmount}</td>
          </tr>
        </tbody>
      </table>
      <p>Transaction successful!</p>
      <p>Redirecting back to shop page...</p>
    </div>
  );
};

export default TransactionDetails;
