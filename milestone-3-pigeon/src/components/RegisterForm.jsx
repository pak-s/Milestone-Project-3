// In our registration form, we will be using the following fields

import React, { useState } from 'react';
import { auth } from '../firebase';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Register the user using Firebase Authentication
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Registration successful, do something with the user object
        const user = userCredential.user;
        console.log('User registered:', user);
      })
      .catch((error) => {
        // Registration failed, handle the error
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Registration error:', errorCode, errorMessage);
      });

    // Clear form inputs after submission
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
