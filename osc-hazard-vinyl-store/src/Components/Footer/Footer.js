import React, { useState, Link } from "react";
import { MovingBanner } from "./MovingBanner/MovingBanner";
import zickzack from "./MovingBanner/icon/zickzack.svg";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <MovingBanner />
    </footer>
  );
};
