import React, { useState } from "react";
import { NewsOverlayButtons } from "./NewsOverlayButtons/NewsOverlayButtons";
import { Link } from "react-router-dom";

export const NewsOverlay = () => {
  return (
    <div className="news-overlay absolute flex justify-center h-36 w-36 mt-4 ml-8">
      <div className="grid h-auto max-w-40 grid-cols-3 gap-2 z-10">
        <NewsOverlayButtons />
        <NewsOverlayButtons />
      </div>
      <div className="absolute z-0 h-36 w-36 bg-white border border-black absolute bg-black opacity-30 flex justify-center items-center"></div>
    </div>
  );
};
