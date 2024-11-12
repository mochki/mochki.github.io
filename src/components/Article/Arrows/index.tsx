import React from "react";
// import { Link } from "react-router-dom";
import Left from "./Left.png";
import Right from "./Right.png";

export const Arrows: React.FC = () => {
  return (
    <>
      <img src={Left} />
      <img src={Right} />
    </>
  );
};
