import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo/logo.png";

export const Header: React.FC = () => (
  <header className="flex text-5xl sm:text-6xl py-6 sm:py-8 pl-6 sm:pl-8 items-end bg-white text-black">
    <h1 className="font-japanese">こんにちは</h1>
    <h1 className="hidden md:block ml-8 font-display">i'm mochki</h1>
    <Link to="/" className="my-auto ml-auto mr-6 w-12 md:w-14">
      <img src={logo} alt="logo; back to home" />
    </Link>
  </header>
);
