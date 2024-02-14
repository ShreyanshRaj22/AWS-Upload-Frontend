import React, { useState } from "react";
import axios from "axios";

const SignInPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/login", {
        name: formData.name,
        number: formData.number,
      });
    } catch (error) {
      console.error("Error Logging In:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="name"
          onChange={handleChange}
          value={formData.name}
          type="text"
        />
        <label htmlFor="number">Mobile No.:</label>
        <input
          type="text"
          name="number"
          onChange={handleChange}
          value={formData.number}
          id="number"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignInPage;
