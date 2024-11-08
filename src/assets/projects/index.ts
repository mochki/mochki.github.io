import About from "./About";

import WNERL from "./W.NERL";
import Tetris from "./Tetris";
import Submarine from "./Submarine";
import Sahara from "./Sahara";
import FS from "./FS";
import Hippo from "./Hippo";
import ML from "./ML";
import Windo from "./Windo";
import Asteroids from "./Asteroids";
import Physics from "./Physics";
import RSA from "./RSA";
import Sudoku from "./Sudoku";
import Manga from "./Manga";

type ArticleContent = {
  type: "paragraphs" | "list" | "bigHeader" | "smallHeader" | "quote" | "link";
  content: string[];
  link?: string;
};

type Image = {
  src: string;
  caption: string;
};

export type Project = {
  name: string;
  sourceCode?: string;
  homepage?: string;
  article: ArticleContent[];
  images?: Image[];
  hideFromMenu?: boolean;
};

export default [
  About,
  WNERL,
  Tetris,
  Submarine,
  Sahara,
  FS,
  Hippo,
  ML,
  Windo,
  Asteroids,
  Physics,
  RSA,
  Sudoku,
  Manga,
  // MORE, like OPOF, god legends, etc.
] as Project[];
