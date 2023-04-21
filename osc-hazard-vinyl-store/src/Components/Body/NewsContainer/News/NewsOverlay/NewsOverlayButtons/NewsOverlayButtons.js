import React, { useState } from "react";
import "./NewsOverlayButtons.css";
import playButton from "./icons/play-button.svg";
import pauseButton from "./icons/pause-button.svg";

export const NewsOverlayButtons = () => {
  const [hidePlayButton, setHidePlayButton] = useState(false);
  const [hidePauseButton, setHidePauseButton] = useState(true);

  const handlePlayButtonClick = () => {
    setHidePlayButton(true);
    setHidePauseButton(false);
  };

  const handlePauseButtonClick = () => {
    setHidePlayButton(false);
    setHidePauseButton(true);
  };

  return (
    <div className="newsoverlay-button-container flex items-center justify-center h-8 w-16 overflow-hidden relative m-auto">
      {!hidePlayButton && (
        <button
          className="news-overlay-button play-button h-6 w-6 transition-all duration-300 ease-in-out"
          onClick={handlePlayButtonClick}
        >
          <img src={playButton} className="h-full w-full object-cover"></img>
        </button>
      )}
      {!hidePauseButton && (
        <button
          className="news-overlay-button pause-button h-6 w-6 transition-all duration-300 ease-in-out"
          onClick={handlePauseButtonClick}
        >
          <img src={pauseButton} className="h-full w-full object-cover"></img>
        </button>
      )}
    </div>
  );
};
