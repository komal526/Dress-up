import React, { useState } from "react";
import "../Styles/Contact.css"; // Import the CSS file

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    size: "",
    clothestype: "",
    clothesdetails: "",
    measurements: "",
    suggestion: "",
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

    // Send the form data to the backend
    try {
      const response = await fetch("http://localhost:5000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data.message); // Handle success or failure here
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="contact-outer-section">
      <div className="contact-container">
        <h2>Dress Measurements Form</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Radio buttons for size */}
          <div className="form-group-2">
            <label>Size:</label>
            <div className="form-group-radio">
              <label>
                <input
                  type="radio"
                  name="size"
                  value="Small"
                  checked={formData.size === "Small"}
                  onChange={handleChange}
                  required
                />
                S
              </label>
            </div>
            {/* Repeat for other sizes */}
            <div className="form-group-radio">
              <label>
                <input
                  type="radio"
                  name="size"
                  value="Medium"
                  checked={formData.size === "Medium"}
                  onChange={handleChange}
                  required
                />
                M
              </label>
            </div>
            <div className="form-group-radio">
              <label>
                <input
                  type="radio"
                  name="size"
                  value="large"
                  checked={formData.size === "large"}
                  onChange={handleChange}
                  required
                />
                l
              </label>
            </div>
            
            {/* Other sizes */}
          </div>

          {/* Measurement fields */}
          <div className="form-group-3">
            <label htmlFor="cliothestype">Type of clothes:</label>
            <input
              type="text"
              id="cliothestype"
              name="cliothestype"
              value={formData.cliothestype}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-3">
            <label htmlFor="clothesdetails">Details of Your clothes:</label>
            <input
              type="text"
              id="clothesdetails"
              name="clothesdetails"
              value={formData.clothesdetails}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-3">
            <label htmlFor="measurements">Details of Your Measurements:</label>
            <input
              type="text"
              id="measurements"
              name="measurements"
              value={formData.measurements}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-3">
            <label htmlFor="suggestion">Any suggestions:</label>
            <input
              type="text"
              id="suggestion"
              name="suggestion"
              value={formData.suggestion}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
