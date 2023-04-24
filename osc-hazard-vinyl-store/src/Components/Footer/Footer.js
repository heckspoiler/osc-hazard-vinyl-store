import React, { useState, Link } from "react";
import { MovingBanner } from "./MovingBanner/MovingBanner";
import zickzack from "./MovingBanner/icon/zickzack.svg";
import logo from "./logo/logo.svg";
import soundcloud from "./icons/soundcloud.svg";
import instagram from "./icons/instagram.svg";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer box-border mt-10">
      <MovingBanner />
      <div className="footer-content box-border pt-4 flex flex-col gap-2 ml-8">
        <img src={logo} className="footer-logo h-28 w-28" />
        <section className="footer-adress border-box flex flex-col">
          <p className="text-s">Rue de Marvilée 24-1</p>
          <p className="text-s">75003 Paris</p>
          <p className="text-xs footer-mail">
            <a href="carlo_ettisberger@hotmail.com">decksaver@osc-hazard.fr</a>
          </p>
        </section>
        <section className="footer-social mt-8">
          <h1 className="text-l font-monoSpace">Follow us here:</h1>
          <section className="footer-social-icon-container flex flex-row">
            <a
              href="https://www.instagram.com/nts_radio/?hl=de"
              target="_blank"
            >
              <img src={soundcloud} className="h-16 w-16" />
            </a>
            <a
              href="https://www.instagram.com/nts_radio/?hl=de"
              target="_blank"
            >
              <img src={instagram} className="h-16 w-16" />
            </a>
          </section>
        </section>
      </div>
    </footer>
  );
};
