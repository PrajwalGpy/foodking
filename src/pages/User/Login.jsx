import React, { useContext } from "react";
import "./login.css";
import { AuthContext } from "../shop/context/Authcontext";
import { useNavigate, Link } from "react-router-dom";
const Login = () => {
  const Navigate = useNavigate();
  const { login, isLoggedIn } = useContext(AuthContext); // Accessing login method from AuthContext

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const formData = new FormData(event.target); // Create FormData object from form data
    console.log(formData);
    console.log(formData.get("email"));
    login(formData);

    {
      isLoggedIn ? Navigate("/shop") : Navigate("/login");
    }
  };

  return (
    <div>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" name="email" />
          <label>Password</label>
          <input type="password" name="password" />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <p>
          <Link to="/signin">Create an acount?</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
