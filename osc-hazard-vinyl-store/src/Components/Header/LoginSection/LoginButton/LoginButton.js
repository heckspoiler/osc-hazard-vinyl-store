import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send user's credentials to backend service for authentication
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white absolute border border-black p-8 gap-4 flex flex-col mt-1 right-24 text-sm w-80"
    >
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

      <button
        type="submit"
        className="bg-buttonYellow w-2/3 ml-auto mr-auto h-8 border border-black rounded-2xl text-xs"
      >
        Log In
      </button>
    </form>
  );
};

export const LoginButton = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div>
      <button
        onClick={handleLoginClick}
        className="border border-black p-1 rounded-2xl w-16 text-xs hover:bg-buttonYellow transition duration-200 ease-in-out"
      >
        Login
      </button>
      {showLoginForm && <LoginForm />}
    </div>
  );
};
