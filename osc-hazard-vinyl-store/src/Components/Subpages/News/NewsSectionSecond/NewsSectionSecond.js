import React from "react";
import "./NewsSectionSecond.css";
import CS80 from "./images/cs80.jpg";
import { Link } from "react-router-dom";

export const NewsSectionSecond = () => {
  return (
    <section>
      <section className="news-second-section box-border flex flex-col justify-center h-[auto] gap-1">
        <Link to="/news/yamaha-cs80_here-to-stay">
          {" "}
          <section className="news-second-section-main brightness-[90%] transition-all transition-200 hover:brightness-100 box-border w-[80%] ml-auto mr-auto">
            <h1 className="text-3xl font-monoSpace text-white bg-buttonViolet font-bold p-4 w-[auto] absolute ml-40 mt-[26rem]">
              SYNTH HISTORY
            </h1>
            <p className="text-white absolute font-medium text-xl mt-[31rem] w-[40rem] ml-[23rem] bg-buttonViolet p-4">
              The Yamaha CS-80 came 50 Years ago to stay - but bring the big
              bucks
            </p>
            <img
              src={CS80}
              alt="Yamaha CS-80 Synth"
              className="ml-auto mr-auto"
            />
          </section>
        </Link>
      </section>
    </section>
  );
};
