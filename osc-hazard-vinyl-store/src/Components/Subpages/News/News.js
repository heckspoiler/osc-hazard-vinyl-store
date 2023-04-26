import React from "react";
import { Link } from "react-router-dom";
import { HeaderSubpages } from "../HeaderSubpages/HeaderSubpages";
import "./News.css";

export const News = () => {
  return (
    <Link to="/news">
      <HeaderSubpages />
      <div className="w-[100%] h-[100%] box-border mt-20">
        <section className="news-container w-[100vw] box-border">
          <section className="news-first-section box-border flex flex-col justify-center h-[auto] gap-1">
            <section className="news-first-section-upper">
              <h2 className="text-white text-4xl font-monoSpace font-bold absolute mt-[22rem] ml-[3rem] bg-buttonViolet p-4 w-[60rem]">
                Kendrick Thompson: Impressive Controversy breaks it all
              </h2>
              <p className="text-white absolute font-medium text-xl mt-[31rem] w-[40rem] ml-[23rem] bg-buttonViolet p-4">
                Thompsons music stands for itself, but it is also what makes him
                a true artist. Why did he manage to stay relevant for over 30
                Years? Find out about his new releases and more here.
              </p>
            </section>
            <section className="news-first-section-lower h-[35rem] w-[auto] flex flex-row gap-1">
              <section className="news-first-section-lower-left"></section>
              <section className="news-first-section-lower-right"></section>
            </section>
          </section>
        </section>
      </div>
    </Link>
  );
};
