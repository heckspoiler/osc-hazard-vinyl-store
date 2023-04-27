import React from "react";
import { Link } from "react-router-dom";
import "./NewsSectionFirst.css";

import eye from "../icons/eye.svg";
import mixOfTheWeek from "../icons/mix_of_the_week.svg";

export const NewsSectionFirst = () => {
  return (
    <div className="w-[100%] h-[100%] box-border mt-20 cursor-default">
      <section className="news-container w-[100vw] box-border ">
        <section className="news-first-section box-border flex flex-col justify-center h-[auto] gap-1">
          <Link to="/news/kendrick-thompson_controversy-breaks-it-all">
            <section className="news-first-section-upper brightness-[90%] hover:brightness-100 transition-all transition-200 border border-black">
              <img
                src={eye}
                className="h-40 w-40 ml-40 mt-20 absolute -rotate-45 drop-shadow-[1px_2px_2px_rgba(255,0,0,0.5)] "
              />
              <h2 className="text-white text-4xl font-monoSpace font-bold absolute mt-[22rem] ml-[3rem] bg-buttonViolet p-4 w-[60rem]">
                KENDRICK THOMPSON: Impressive Controversy breaks it all
              </h2>
              <p className="text-white absolute font-medium text-xl mt-[31rem] w-[40rem] ml-[23rem] bg-buttonViolet p-4">
                Thompsons music stands for itself, but it is also what makes him
                a true artist. Why did he manage to stay relevant for over 30
                Years? Find out about his new releases and more here.
              </p>
            </section>
          </Link>

          <section className="news-first-section-lower h-[35rem] w-[auto] flex flex-row gap-1 ">
            <Link
              to="/news/motw_mandy-pixel"
              className="news-first-section-lower-left border border-black brightness-[80%] hover:brightness-100 transition-all transition-200"
            >
              <section>
                <h2 className="text-white text-4xl font-monoSpace font-bold absolute mt-[22rem] ml-[3rem] bg-buttonViolet p-4 w-[auto]">
                  MANDY PIXEL
                </h2>
                <img
                  src={mixOfTheWeek}
                  className="absolute h-36 w-36 mt-24 ml-10 -rotate-[17deg] drop-shadow-[1px_25px_25px_rgba(255,255,255,0.9)]"
                />
                <p className="flex flex-row justify-center align-center text-white absolute font-medium text-xl mt-[27.7rem] w-[15rem] ml-[16rem] bg-buttonViolet p-4">
                  Mix of the{" "}
                  <span className="border border-white bg-white mt-auto mb-auto h-2 w-10 mx-2"></span>
                  <span>Week</span>
                </p>
              </section>
            </Link>
            <Link
              to="/news/the-lot-radio_friends-from-the-lot"
              className="news-first-section-lower-right border border-black brightness-[80%] hover:brightness-100 transition-all transition-200"
            >
              <section>
                <h2 className="text-white text-4xl font-monoSpace font-bold absolute mt-[22rem] ml-[3rem] bg-buttonViolet p-4 w-[auto]">
                  Friends from the Lot
                </h2>
                <p className="flex flex-row justify-center align-center text-white absolute font-medium text-xl mt-[27.7rem] w-[15rem] ml-[16rem] bg-buttonViolet p-4">
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
