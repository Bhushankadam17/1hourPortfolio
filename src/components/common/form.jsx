import React, { useState } from 'react';
import './styles/form.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission logic here, like sending data to a server or API
    console.log('Form submitted:', formData);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" className="label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" className="label">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="input textarea"
            required
          />
        </div>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
