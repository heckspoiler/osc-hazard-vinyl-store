import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./SignupButton.css";

const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send users Information to Backend to create new user.
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <label htmlFor="profile-picture">Upload your Profile Picture:</label>
      <input
        type="file"
        id="profile-picture"
        accept="image/png, image/jpeg"
        value={profilePicture}
        onChange={(event) => setProfilePicture(event.target.value)}
        className="border border-black pl-2 text-xs h-6"
      />
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="first-name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        className="border border-black pl-2 text-xs h-6"
      />

      <label htmlFor="lastName">Lasts Name:</label>
      <input
        type="text"
        id="last-name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        className="border border-black pl-2 text-xs h-6"
      />

      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        className="border border-black pl-2 text-xs h-6"
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="border border-black pl-2 text-xs h-6"
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        className="border border-black pl-2 text-xs h-6"
      />

      <label htmlFor="dateofbirth">Date of Birth:</label>
      <DatePicker
        id="dateOfBirth"
        selected={dateOfBirth}
        onChange={(date) => setDateOfBirth(date)}
        dateFormat="dd/MM/yyyy"
        showYearDropdown
        scrollableYearDropdown
        yearDropdownItemNumber={50}
        className="border border-black pl-2 text-xs h-6"
      />
    </form>
  );
};

export const SignupButton = () => {
  const [showSignupForm, setShowSignupForm] = useState(true);

  const handleSignupClick = () => {
    setShowSignupForm(!showSignupForm);
    console.log("huso");
  };

  return (
    <div>
      <button
        onClick={handleSignupClick}
        className="border border-black p-1 rounded-2xl w-16 text-xs hover:bg-buttonYellow"
      >
        Sign Up
      </button>
      {showSignupForm && <SignupForm />}
    </div>
  );
};
