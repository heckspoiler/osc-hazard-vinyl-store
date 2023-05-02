import React from "react";
import "./MovingBanner.css";
import zickzack from "./icon/zickzack.svg";

const contentArray = [zickzack, zickzack];

export const MovingBanner = () => {
  return (
    <div className="moving-banner-container relative w-[200%] overflow-hidden h-4 w-full bg-violet flex flex-row justify-between items-center border border-y-black">
      <div className="w-[200%] flex items-center h-20 justify-between gap-36 absolute left-0 animate animate">
        {contentArray.map((i) => {
          return (
            <div className="content-container font-monoSpace text-xxs">
              <img src={i} className="w-3 h-3" />
              <div>Get 10% off Your First Order</div>
              <img src={i} className="w-3 h-3" />
              <div>Use Code BONJOUR10</div>
            </div>
          );
        })}
        {contentArray.map((i) => {
          return (
            <div className="content-container font-monoSpace text-xxs">
              <img src={i} className="w-3 h-3" />
              <div>Get 10% off Your First Order</div>
              <img src={i} className="w-3 h-3" />
              <div>Use Code BONJOUR10</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
