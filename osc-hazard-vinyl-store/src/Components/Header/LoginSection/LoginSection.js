import React, { useState } from "react";
import defaultFace from "../../../icons/default-face.png";

export const LoginSection = () => {
  return (
    <div className="LoginSection border border-black absolute right-10 h-16 w-16">
      <div classList="imageContainer">
        <img src={defaultFace} alt="Login Placeholder Image" />
      </div>
      <div classList="ButtonContainer">
        <button></button>
        <button></button>
      </div>
    </div>
  );
};
