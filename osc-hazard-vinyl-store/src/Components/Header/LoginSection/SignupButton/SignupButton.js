import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./SignupButton.css";
import "react-datepicker/dist/react-datepicker.css";

const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send users Information to Backend to create new user.
  };

  if (password !== passwordConfirmation) {
    alert("Password and password confirmation do not match.");
    return;
  }

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    setProfilePicture(URL.createObjectURL(file));
    setImage(URL.createObjectURL(file));
  };

  return (
    <form onSubmit={handleSubmit} className="login-form text-xs">
      <h2 className="title">Enter your Details!</h2>
      <div className="input-container">
        <label htmlFor="username">
          Username<sup className="text-red-600 text-xs">*</sup>:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="border border-black pl-2 text-xs h-6"
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="profile-picture">Upload your Profile Picture:</label>
        <input
          type="file"
          id="profile-picture"
          accept="image/png, image/jpeg"
          value={profilePicture}
          onChange={handleProfilePictureChange}
          className="border border-black pl-2 text-xs h-6"
        />
      </div>
      <div className="input-container">
        <label htmlFor="firstName">
          First Name<sup className="text-red-600 text-xs">*</sup>:
        </label>
        <input
          type="text"
          id="first-name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          className="border border-black pl-2 text-xs h-6"
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="lastName">
          Last Name<sup className="text-red-600 text-xs">*</sup>:
        </label>
        <input
          type="text"
          id="last-name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          className="border border-black pl-2 text-xs h-6"
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="email">
          Email<sup className="text-red-600 text-xs">*</sup>:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="border border-black pl-2 text-xs h-6"
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">
          Password<sup className="text-red-600 text-xs">*</sup>:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="border border-black pl-2 text-xs h-6"
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="passwordConfirmation">
          Confirm Password<sup className="text-red-600 text-xs">*</sup>:
        </label>
        <input
          type="password"
          id="passwordConfirmation"
          value={passwordConfirmation}
          onChange={(event) => setPasswordConfirmation(event.target.value)}
          className="border border-black pl-2 text-xs h-6"
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="dateofbirth">
          Date of Birth<sup className="text-red-600 text-xs">*</sup>:
        </label>
        <DatePicker
          id="dateOfBirth"
          selected={dateOfBirth}
          onChange={(date) => setDateOfBirth(date)}
          dateFormat="dd/MM/yyyy"
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={50}
          className="border border-black pl-2 text-xs h-6"
          required
        />
      </div>

      <button
        type="submit"
        className="submit-button absolute bg-buttonYellow w-32 left-0 right-0 top-0 ml-auto mr-auto h-8 border border-black rounded-2xl text-xs"
      >
        Sign Up
      </button>
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
