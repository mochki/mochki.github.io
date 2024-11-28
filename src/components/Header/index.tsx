import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo/logo.png";

export const Header: React.FC = () => (
  <header className="flex text-5xl sm:text-6xl p-6 sm:p-8 items-end bg-white text-black">
    <h1 className="font-japanese">こんにちは</h1>
    <h1 className="hidden md:block ml-8 font-display">i'm mochki</h1>
    <Link to="/" className="my-auto ml-auto w-12 md:w-14">
      <img src={logo} alt="logo; back to home" />
    </Link>
  </header>
);
