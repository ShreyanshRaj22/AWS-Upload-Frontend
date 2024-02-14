import React, { useState } from "react";
import axios from "axios";

const UpdatePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    dobDay: '',
    dobMonth: '',
    dobYear: '',
    gender: 'male', // Default gender
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
      const response = await axios.post('http://localhost:8080/api/updateuserinfo', {
        number: localStorage.getItem('phoneNum'),
        name: formData.name,
        dob: {
          day: formData.dobDay,
          month: formData.dobMonth,
          year: formData.dobYear,
        },
        gender: formData.gender,
      });

      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br />

        <label htmlFor="dobDay">Date of Birth - Day:</label>
        <input
          type="number"
          id="dobDay"
          name="dobDay"
          min="1"
          max="31"
          value={formData.dobDay}
          onChange={handleChange}
          required
        />

        <label htmlFor="dobMonth">Month:</label>
        <input
          type="number"
          id="dobMonth"
          name="dobMonth"
          min="1"
          max="12"
          value={formData.dobMonth}
          onChange={handleChange}
          required
        />

        <label htmlFor="dobYear">Year:</label>
        <input
          type="number"
          id="dobYear"
          name="dobYear"
          value={formData.dobYear}
          onChange={handleChange}
          required
        /><br />

        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdatePage;
