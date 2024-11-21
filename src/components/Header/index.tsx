import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo/logo.png";
import { Page, PageProps } from "../../pages";

const HeaderSubtitle: React.FC<Pick<Page, "type">> = ({ type }) => (
  <div>{type}</div>
);
// activePage.id !== "about" && (
//   <>
//     <h1 className="ml-3 text-5xl">& {activePage.title}</h1>
//     <h1 className="ml-8 text-2xl font-japanese">を作りました</h1>
//   </>
// )}

export const Header: React.FC<PageProps> = ({ activePage }) => {
  // const { type } = activePage;
  return (
    <header className="flex items-end px-28 py-8 h-40 bg-white font-display text-black">
      <h1 className="text-6xl font-japanese">こんにちは</h1>
      <h1 className="ml-8 text-5xl">i'm mochki</h1>
      {activePage && <HeaderSubtitle type={activePage.type} />}
      <img src={logo} alt="logo" className="w-20 h-20 ml-auto" />
      {activePage && <Link to="/">back</Link>}
    </header>
  );
};
