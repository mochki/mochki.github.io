import React from "react";
import { PageProps } from "../../pages";

export const Header: React.FC<PageProps> = ({ activePage }) => {
  return (
    <header className="flex items-end px-28 py-8 h-40 bg-white font-display text-black">
      <h1 className="text-6xl font-japanese">こんにちは</h1>
      <h1 className="ml-8 text-5xl">i'm mochki</h1>
      {activePage && activePage.id !== "about" && (
        <>
          <h1 className="ml-3 text-5xl">& {activePage.title}</h1>
          <h1 className="ml-8 text-2xl font-japanese">を作りました</h1>
        </>
      )}
      {/* todo: logo / menu / links */}
    </header>
  );
};
