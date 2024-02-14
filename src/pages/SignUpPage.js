import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
    setError(""); // Clear any previous errors when the phone number changes
  };

  const handleSignUp = () => {
    axios
      .post("http://localhost:8080/api/genotp", { number: phoneNumber })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("phoneNum", phoneNumber);
        navigate("/OtpPage");
      })
      .catch((error) => {
        console.error("Error:", error);
        if (error.response && (error.response.status === 400 || error.response.status === 500)) {
          setError("Invalid phone number or server error. Please try again.");
        } else {
          setError("An unexpected error occurred. Please try again later.");
        }
      });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <label htmlFor="input">Phone Number:</label>
      <input
        type="text"
        placeholder="Enter valid phone number"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        style={{ marginRight: "10px" }}
      />
      <button onClick={handleSignUp}>Sign Up</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default SignUpPage;
