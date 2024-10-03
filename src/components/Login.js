import React, { useState } from "react";
import { FaLock, FaEnvelope } from "react-icons/fa"; // Importing icons for better UI
import "./styles/Login.css"; // Import CSS file for styling
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    accountType: "consumer",
  });

  const [formErrors, setFormErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((oldState) => {
      const newState = {
        ...oldState,
        [name]: value,
      };
      console.log(newState);
      return newState;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = {};
    // Basic Validation
    if (!formData.email.trim()) {
      errors.emailError = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.emailError = "Email is invalid";
    }

    if (!formData.password.trim()) {
      errors.passwordError = "Password is required";
    } else if (formData.password.length < 6) {
      errors.passwordError = "Password must be at least 6 characters long";
    }

    if (Object.keys(errors).length === 0) {
      console.log("Form data:", formData); // Handle login (e.g., API call)
      setFormData({
        ...formData,
        email: "",
        password: "",
      });
      setFormErrors({
        emailError: "",
        passwordError: "",
      });
      if(formData.accountType === "consumer") {
      toast.success("Logged in as Consumer!");
      navigate("/find-schemes");
      }else {
        toast.success("Logged in as Post Service Person!");
        navigate("/population-statistics-dashboard");
      }
    } else {
      setFormErrors(errors);
      toast.warning("Enter the required fields");
    }
  };

  return (
    <div className="login-container">
      {" "}
      {/* Added unique class here */}
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Account Type: </label>
          <select
            className="input-container"
            name="accountType"
            value={formData.accountType || ""}
            onChange={handleInputChange}
          >
            {" "}
            <option value="consumer">Consumer</option>
            <option value="postServiceProvider">Post Service Person</option>
          </select>
          <label>Email:</label>
          <div className="input-container">
            <FaEnvelope className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          {formErrors.emailError && <span>{formErrors.emailError}</span>}
        </div>
        <div>
          <label>Password:</label>
          <div className="input-container">
            <FaLock className="icon" />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          {formErrors.passwordError && <span>{formErrors.passwordError}</span>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
