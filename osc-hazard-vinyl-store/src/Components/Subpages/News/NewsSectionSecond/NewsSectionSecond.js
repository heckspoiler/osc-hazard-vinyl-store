import React from "react";
import "./NewsSectionSecond.css";
import CS80 from "./images/cs80.jpg";
import klausJakuhn from "./images/klaus-jakuhn.jpg";
import { Link } from "react-router-dom";
import eye from "../icons/eye.svg";
import dorisNorton from "./images/doris-norton.webp";

export const NewsSectionSecond = () => {
  return (
    <section className="flex flex-col gap-10 w-[100%]">
      <section className="news-second-section box-border flex flex-col justify-center h-[auto] cursor-auto">
        <Link
          to="/news/legacy_yamaha-cs80-here-to-stay"
          className="w-[80%] ml-auto mr-auto"
        >
          <section className="news-second-section-main brightness-[90%] transition-all transition-200 hover:brightness-100 box-border ml-auto mr-auto">
            <h1 className="text-2xl font-monoSpace border border-black text-white bg-buttonViolet font-bold p-4 w-[auto] absolute ml-[10%] mt-[26rem] z-10">
              SYNTH HISTORY
            </h1>
            <p className="text-white absolute border border-black font-medium font-extrabold text-l mt-[31rem] w-[25rem] ml-[15%] bg-buttonViolet p-4 z-10 font-inter">
              The Yamaha CS-80 came 50 Years ago to stay - but bring the big
              bucks
            </p>
          </section>
        </Link>
        <Link
          to="/news/legacy_klaus-jankuhn"
          className="w-[80%] h-auto mx-auto"
        >
          <section className="news-second-section-lower-first brightness-[90%] transition-all transition-200 hover:brightness-100 box-border border border-black ml-auto mr-auto mt-1 flex h-[26.8rem]">
            <div className="lower-first-image-container h-[100%] w-[100%]"></div>
            <div className="lower-first-text-container bg-buttonViolet flex flex-col h-[100%] w-[100%] border-l border-black">
              <h1 className="absolute text-xl ml-20 font-monoSpace bg-white w-auto p-4 mt-20 font-bold border border-black">
                Joining Klaus Jankuhn
              </h1>
              <p className="mt-40 bg-white p-4 ml-20 text-sm font-inter w-[60%] border border-black">
                Our friends from Groove Magazine sat down with the Pioneer and
                talked about his journey. Read the full interview here and also
                get a preview of his upcoming album.
              </p>
              <img
                src={eye}
                className="h-20 w-20 ml-[40%] mt-32 absolute rotate-45 drop-shadow-[1px_2px_2px_rgba(255,255,255,0.2)] "
              />
              ;
            </div>
          </section>
        </Link>
        <Link to="/news/legacy_doris-norton" className="h-auto mx-auto w-[80%]">
          <section className="news-second-section-lower-second brightness-[90%] transition-all transition-200 hover:brightness-100 box-border border border-black ml-auto mr-auto mt-1 flex h-[26.8rem]">
            <div className="lower-second-text-container bg-buttonViolet flex flex-col h-[100%] w-[100%] border-r border-black">
              <h1 className="absolute text-xl ml-[15%] font-monoSpace bg-white w-auto p-4 mt-20 font-bold border border-black">
                Portrait: Doris Norton
              </h1>
              <p className="mt-40 bg-white p-4 ml-[27%] text-sm font-inter w-[60%] border border-black">
                Long before everyone was talking about the "New Normal", Doris
                Norton was heading full speed to legendary status. Read here
                about her struggles and what it meant for her to be the first
                musician ever to be sponsored by Apple.
              </p>

              <img
                src={eye}
                className="h-20 w-20 ml-[2rem] mt-32 absolute -rotate-45 drop-shadow-[1px_2px_2px_rgba(255,255,255,0.2)] "
              />
            </div>
            <div className="lower-second-image-container h-[100%] w-[100%] bg"></div>
          </section>
        </Link>
      </section>
    </section>
  );
};
