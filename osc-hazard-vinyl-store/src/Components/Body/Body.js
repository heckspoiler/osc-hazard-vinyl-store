import React from "react";
import { Link } from "react-router-dom";
import { ImageSlider } from "./ImageSlider/ImageSlider";
import { NewsContainer } from "./NewsContainer/NewsContainer";
import { InStoreEvents } from "./InStoreEvents/InStoreEvents";
import { Header } from "../Header/Header";
import "./Body.css";
import { motion } from "framer-motion";

export const Body = () => {
  return (
    <motion.section
      className="body flex flex-col z-1"
      initial={{ marginTop: "-1500px" }}
      animate={{ marginTop: "0px" }}
      exti={{ marginLeft: "2500px" }}
    >
      <Header />
      <ImageSlider />
      <NewsContainer />
      <InStoreEvents />
    </motion.section>
  );
};
