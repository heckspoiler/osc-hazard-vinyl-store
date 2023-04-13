import React, { useState } from "react";
import { LoginButton } from "./LoginButton/LoginButton";
import defaultFace from "../../../icons/default-face.png";

export const LoginSection = () => {
  const [image, setImage] = useState();
  return (
    <div className="LoginSection absolute right-40 h-32 w-32 flex flex-col justify-center items-center gap-4">
      <div className="imageContainer h-16 w-16 border-black border flex items-center justify-center">
        <img
          className="h-12 w-12"
          src={image || defaultFace}
          alt="Login Placeholder Image"
        />
      </div>
      <div className="ButtonContainer flex gap-1 font-mono">
        <LoginButton />
        <button className="border border-black p-1 rounded-2xl w-16 text-xs">
          Sign up
        </button>
      </div>
    </div>
  );
};
