import React, { useContext } from "react";
import { AuthContext } from "../shop/context/Authcontext";
import { useNavigate } from "react-router-dom";
import "./login.css";
const SignIn = () => {
  const { isSignedIn, signin } = useContext(AuthContext);
  const Navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData);
    console.log(formData.get("email"));
    signin(formData);
    {
      isSignedIn ? Navigate("/shop") : Navigate("/");
    }
  };

  return (
    <div>
      <div>
        <h1>Signin</h1>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Password</label>
          <input type="password" name="password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
