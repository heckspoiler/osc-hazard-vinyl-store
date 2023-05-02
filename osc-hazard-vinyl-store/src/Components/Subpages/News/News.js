import React from "react";
import { Link } from "react-router-dom";
import { HeaderSubpages } from "../HeaderSubpages/HeaderSubpages";
import { NewsSectionFirst } from "./NewsSectionFirst/NewsSectionFirst";
import { NewsSectionSecond } from "./NewsSectionSecond/NewsSectionSecond";
import { motion } from "framer-motion";
import "./News.css";

export const News = () => {
  return (
    <motion.div
      initial={{ marginTop: "-1500px", opacity: 0, marginLeft: "-1500px" }}
      animate={{ marginTop: "0px", opacity: 1, marginLeft: "0px" }}
      exti={{ marginLeft: "-2500px" }}
    >
      <Link to="/news">
        <HeaderSubpages />
        <NewsSectionFirst />
        <NewsSectionSecond />
      </Link>
    </motion.div>
  );
};
