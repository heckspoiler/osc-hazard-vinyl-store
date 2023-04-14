import React, { useState } from "react";

const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [age, setAge] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send users Information to Backend to create new user.
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="profile-picture">Upload your Profile Picture:</label>
      <input
        type="file"
        id="prifile-picture"
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
    </form>
  );
};
