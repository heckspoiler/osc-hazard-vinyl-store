import React from "react";
import { Link } from "react-router-dom";
import "./NewsSectionFirst.css";

import eye from "../icons/eye.svg";
import mixOfTheWeek from "../icons/mix_of_the_week.svg";

export const NewsSectionFirst = () => {
  return (
    <div className="h-[100%] box-border mt-32 cursor-default">
      <div className="absolute h-[75rem] w-[77%] bg-buttonYellowHover ml-28 "></div>
      <section className="news-container box-border drop-shadow drop-shadow-lg">
        <section className="news-first-section box-border flex flex-col justify-center h-[auto] gap-1 w-[100%]">
          <Link to="/news/kendrick-thompson_controversy-breaks-it-all">
            <section className="news-first-section-upper brightness-[90%] hover:brightness-100 transition-all transition-200 border border-black">
              <img
                src={eye}
                className="h-40 w-40 ml-40 mt-20 absolute -rotate-45 drop-shadow-[1px_2px_2px_rgba(255,0,0,0.5)] "
              />
              <h2 className="text-white border border-black text-xl font-monoSpace font-bold absolute mt-[22rem] ml-[5rem] bg-buttonViolet p-4 w-[auto]">
                KENDRICK THOMPSON: <br />
                Impressive Controversy breaks it all
              </h2>
              <p className="text-white absolute border border-black font-medium text-sm mt-[28rem] w-[30rem] font-inter ml-[15rem] bg-buttonViolet p-4">
                Thompsons music stands for itself, but it is also what makes him
                a true artist. Why did he manage to stay relevant for over 30
                Years? Find out about his new releases and more here.
              </p>
            </section>
          </Link>

          <section className="news-first-section-lower h-[35rem] w-[100%] flex flex-row gap-1 ">
            <Link
              to="/news/motw_mandy-pixel"
              className="news-first-section-lower-left border border-black brightness-[80%] hover:brightness-100 transition-all transition-200"
            >
              <section>
                <h2 className="text-white text-xl border border-black font-monoSpace font-bold absolute mt-[22rem] ml-[3rem] bg-buttonViolet p-4 w-[auto]">
                  MANDY PIXEL
                </h2>

                <p className="flex flex-row justify-center border border-black align-center text-white absolute font-medium text-sm mt-[26.1rem] font-inter w-[15rem] ml-[5rem] bg-buttonViolet p-4">
                  Mix of the{" "}
                  <span className="border border-white bg-white mt-auto mb-auto h-2 w-10 mx-2"></span>
                  <span>Week</span>
                </p>
                <img
                  src={mixOfTheWeek}
                  className="h-28 w-28 ml-10 mt-20 absolute -rotate-[calc(30deg)] drop-shadow-[1px_20px_20px_rgba(255,255,255,0.5)] "
                />
              </section>
            </Link>
            <Link
              to="/news/the-lot-radio_friends-from-the-lot"
              className="news-first-section-lower-right border border-black brightness-[80%] hover:brightness-100 transition-all transition-200"
            >
              <section>
                <h2 className="text-white border border-black text-xl font-monoSpace font-bold absolute mt-[22rem] ml-[3rem] bg-buttonViolet p-4 w-[auto]">
                  Friends from the Lot
                </h2>
                <p className="flex flex-row border border-black justify-center align-center text-white absolute font-medium text-sm font-inter mt-[26.1rem] w-[15rem] ml-[5rem] bg-buttonViolet p-4">
                  The Lot Radio
                  <span className="border border-white bg-white mt-auto mb-auto h-2 w-10 mx-2"></span>
                </p>
              </section>
            </Link>
          </section>
        </section>
      </section>
    </div>
  );
};
