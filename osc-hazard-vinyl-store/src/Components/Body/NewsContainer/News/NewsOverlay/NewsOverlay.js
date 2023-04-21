import React, { useState } from "react";
import { NewsOverlayButtons } from "./NewsOverlayButtons/NewsOverlayButtons";
import { Link } from "react-router-dom";

export const NewsOverlay = () => {
  return (
    <div className="news-overlay absolute flex justify-center h-52 w-52 mt-4 ml-8">
      <div className="grid h-auto max-w-40 grid-cols-3 gap-2 z-10">
        <NewsOverlayButtons />
        <NewsOverlayButtons />
      </div>
      <div className="absolute z-0 h-52 w-52 bg-white border border-black absolute bg-gray-800 opacity-50 flex justify-center items-center"></div>
    </div>
  );
};
