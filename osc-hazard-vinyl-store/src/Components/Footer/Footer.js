import React, { useState, Link } from "react";
import { MovingBanner } from "./MovingBanner/MovingBanner";
import zickzack from "./MovingBanner/icon/zickzack.svg";
import logo from "./logo/logo.svg";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer box-border">
      <MovingBanner />
      <div className="footer-content box-border pt-2 bg-violetLowOpa">
        <img src={logo} className="h-24 w-24" />
        <h1 className=""></h1>
      </div>
    </footer>
  );
};
