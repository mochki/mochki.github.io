import { Page } from "./types";

import WNERL from "./W.NERL";
import Tetris from "./Tetris";
import Submarine from "./Submarine";
import Sahara from "./Sahara";
import Designer from "./Designer";
import FS from "./FS";
import Hippo from "./Hippo";
import ML from "./ML";
import Windo from "./Windo";
import Asteroids from "./Asteroids";
import Physics from "./Physics";
import RSA from "./RSA";
import Sudoku from "./Sudoku";
import Manga from "./Manga";
import About from "./About";
import { LoaderFunction } from "react-router-dom";

const pages = {
  [WNERL.id]: WNERL,
  [Tetris.id]: Tetris,
  [Submarine.id]: Submarine,
  [Sahara.id]: Sahara,
  [Designer.id]: Designer,
  [FS.id]: FS,
  [Hippo.id]: Hippo,
  [ML.id]: ML,
  [Windo.id]: Windo,
  [Asteroids.id]: Asteroids,
  [Physics.id]: Physics,
  [RSA.id]: RSA,
  [Sudoku.id]: Sudoku,
  [Manga.id]: Manga,
  [About.id]: About,
};

type PageId = keyof typeof pages;

export const pageParam = "pageId";
export const pageIds = Object.keys(pages) as PageId[];

export const pageLoader: LoaderFunction<Page> = async ({ params }) => {
  const pageId = params[pageParam] as PageId | undefined;
  return pageId ? pages[pageId] : null;
};
