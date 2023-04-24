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
      <div className="footer-content box-border py-4 flex flex-row mx-8 justify-between">
        <div className="box-border py-4 flex flex-col gap-4 ml-8">
          <img src={logo} className="footer-logo h-32 w-32" />
          <section className="footer-adress border-box flex flex-col">
            <p className="text-s">Rue de Marvilée 24-1</p>
            <p className="text-s">75003 Paris</p>
            <p className="text-xs">+33 1 44 56 45 45</p>
            <p className="text-xxs footer-mail w-36 mt-4 text-center">
              If you have questions or complaints reach us here:
            </p>
            <p className="text-xs footer-mail mt-2">
              <a href="carlo_ettisberger@hotmail.com">
                decksaver@osc-hazard.fr
              </a>
            </p>
          </section>
          <section className="footer-social mt-8 flex flex-col justify-center align-center w-40 gap-4 ">
            <h1 className="text-l font-monoSpace">Follow us:</h1>
            <section className="footer-social-icon-container flex flex-row gap-8 m-auto">
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
        <section className="h-auto w-auto border-box flex flex-col gap-10 my-auto">
          <div className="footer-blocks border border-black w-80 h-4 rounded-3xl"></div>
          <div className="footer-blocks border border-black w-80 h-4 rounded-3xl"></div>
          <div className="footer-blocks border border-black w-80 h-4 rounded-3xl"></div>
          <div className="footer-blocks border border-black w-80 h-4 rounded-3xl"></div>
        </section>
        <section className="h-auto w-auto border-box flex flex-col my-auto border border-black p-10 bg-buttonYellow">
          <form className="flex-col flex gap-4">
            <label className="text-s font-monoSpace">
              SUBSCRIBE TO OUR NEWSLETTER
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="border border-black pl-6 h-8 input-footer"
            />
            <input
              type="text"
              placeholder="Your email"
              className="border border-black pl-6 h-8 input-footer"
            />
            <button className="border border-black w-48 mx-auto rounded-xl bg-violetLowOpa hover:bg-violet transition-all duration-200">
              Subscribe
            </button>
          </form>
        </section>
      </div>
    </footer>
  );
};
