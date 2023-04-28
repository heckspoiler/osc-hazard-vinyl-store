import React from "react";
import "./NewsSectionSecond.css";
import CS80 from "./images/cs80.jpg";
import klausJakuhn from "./images/klaus-jakuhn.jpg";
import { Link } from "react-router-dom";
import eye from "../icons/eye.svg";

export const NewsSectionSecond = () => {
  return (
    <section className="flex flex-col gap-10">
      <section className="news-second-section box-border flex flex-col justify-center h-[auto] cursor-auto">
        <Link
          to="/news/yamaha-cs80_here-to-stay"
          className="w-[80%] ml-auto mr-auto"
        >
          <section className="news-second-section-main brightness-[90%] transition-all transition-200 hover:brightness-100 box-border ml-auto mr-auto">
            <h1 className="text-3xl font-monoSpace border border-black text-white bg-buttonViolet font-bold p-4 w-[auto] absolute ml-40 mt-[26rem] z-10">
              SYNTH HISTORY
            </h1>
            <p className="text-white absolute border border-black font-medium font-extrabold text-xl mt-[31rem] w-[40rem] ml-[23rem] bg-buttonViolet p-4 z-10 font-inter">
              The Yamaha CS-80 came 50 Years ago to stay - but bring the big
              bucks
            </p>
            <img
              src={CS80}
              alt="Yamaha CS-80 Synth"
              className="ml-auto mr-auto scale-[107%] border border-black"
            />
          </section>
        </Link>
        <section className="news-second-section-lower-first box-border border border-black w-[77.2%] ml-auto mr-auto mt-7 flex h-[26.8rem]">
          <div className="lower-first-image-container h-[100%] w-[100%]">
            <img src={klausJakuhn} />
          </div>
          <div className="lower-first-text-container bg-buttonViolet flex flex-col h-[100%] w-[100%] border-l border-black">
            <h1 className="absolute text-2xl ml-20 font-monoSpace bg-white w-auto p-4 mt-20 font-bold border border-black">
              Joining Klaus Jankuhn
            </h1>
            <p className="mt-44 bg-white p-4 ml-20 text-l font-inter w-[60%] border border-black">
              Our friends from Groove Magazine sat down with the Pioneer and
              talked about his journey. Read the full interview here and also
              get a preview of his upcoming album.
            </p>
            <button className="absolute border border-black mt-[22rem] ml-[30rem] px-4 py-2 bg-white font-monoSpace rounded-3xl hover:bg-buttonYellowHover transition-all transition-200">
              More
            </button>
            <img
              src={eye}
              className="h-20 w-20 ml-[32rem] mt-32 absolute rotate-45 drop-shadow-[1px_2px_2px_rgba(255,255,255,0.2)] "
            />
            ;
          </div>
        </section>
      </section>
    </section>
  );
};
