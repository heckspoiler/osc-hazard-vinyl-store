import React, { useState } from "react";
import { LoginButton } from "./LoginButton/LoginButton";
import { SignupButton } from "./SignupButton/SignupButton";
import defaultFace from "../../../icons/default-face.png";
import "./LoginSection.css";

export const LoginSection = () => {
  const [image, setImage] = useState();
  return (
    <div className="LoginSection absolute right-28 h-32 w-32 flex flex-col justify-center items-center gap-4 ">
      <div className="imageContainer h-14 w-14 border-black border flex items-center justify-center ">
        <img
          className="h-10 w-10"
          src={image || defaultFace}
          alt="Login Placeholder Image"
        />
      </div>
      <div className="ButtonContainer relative flex gap-1 font-monoSpace">
        <LoginButton />
        <SignupButton setImage={setImage} />
      </div>
    </div>
  );
};
