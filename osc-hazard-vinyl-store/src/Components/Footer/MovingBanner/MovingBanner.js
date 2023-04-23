import React, { useState } from "react";
import "./MovingBanner.css";
import zickzack from "./icon/zickzack.svg";

export const MovingBanner = () => {
  return (
    <div className="moving-banner h-6 w-full bg-violet flex flex-row overflow-hidden">
      <div className="banner-content w-full flex">
        <div className="content-group flex justify-between">
          {/* Content */}
          <div className="content w-80 flex flex-row justify-between">
            <div className="img-container h-full w-4 flex justify-center items-center">
              <img src={zickzack} className="h-4 w-4" />
            </div>
            <div className="font-monoSpace text-xs h-auto text-center w-auto">
              10% Off your First Order
            </div>
          </div>
          <div className="content w-80 flex flex-row justify-between">
            <div className="img-container h-full w-4 flex justify-center items-center">
              <img src={zickzack} className="h-4 w-4" />
            </div>
            <div className="font-monoSpace text-xs h-auto text-center w-auto">
              10% Off your First Order
            </div>
          </div>
          <div className="content w-80 flex flex-row justify-between">
            <div className="img-container h-full w-4 flex justify-center items-center">
              <img src={zickzack} className="h-4 w-4" />
            </div>
            <div className="font-monoSpace text-xs h-auto text-center w-auto">
              10% Off your First Order
            </div>
          </div>
          <div className="content w-80 flex flex-row justify-between">
            <div className="img-container h-full w-4 flex justify-center items-center">
              <img src={zickzack} className="h-4 w-4" />
            </div>
            <div className="font-monoSpace text-xs h-auto text-center w-auto">
              10% Off your First Order
            </div>
          </div>
          {/* Content */}
          <div className="content w-80 flex flex-row justify-between">
            <div className="img-container h-full w-4 flex justify-center items-center">
              <img src={zickzack} className="h-4 w-4" />
            </div>
            <div className="font-monoSpace text-xs h-auto text-center w-auto">
              10% Off your First Order
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
