import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OtpPage = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setOtp(e.target.value);
    setError("");
  };

  const handleClick = () => {
    axios
      .post("http://localhost:8080/api/verifyuser", {
        number: localStorage.getItem("phoneNum"),
        otp: otp,
      })
      .then((response) => {
        console.log(response);
        navigate("/update");
      })
      .catch((error) => {
        console.error("Error verifying OTP:", error);

        if (error.response) {
          const status = error.response.status;

          if (status === 404) {
            setError("User not found. Please check the OTP and try again.");
          } else if (status === 401) {
            setError("Invalid OTP. Please try again.");
          } else if (status === 500) {
            setError("Server error. Please try again later.");
          } else {
            setError("An unexpected error occurred. Please try again later.");
          }
        } else {
          setError("An unexpected error occurred. Please try again later.");
        }
      });
  };

  return (
    <div>
      <label htmlFor="input">OTP:</label>
      <input
        type="text"
        value={otp}
        placeholder="Enter received OTP"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Verify OTP</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default OtpPage;
