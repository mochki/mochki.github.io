import About from "./About";

import Asteroids from "./Asteroids";

type ArticleContent = {
  type: "paragraph" | "list" | "bigHeader";
  content: string[];
};

type Image = {
  src: string;
  caption: string;
};

export type Project = {
  name: string;
  sourceCode?: string;
  article: ArticleContent[];
  images: Image[];
  hideFromMenu?: boolean;
};

export default [
  About,
  // WNERL,
  // Tetris,
  // Submarine,
  // Sahara,
  // FS,
  // Mapover,
  // Hippo,
  // ML,
  // Windo,
  Asteroids,
  // Physics,
  // RSA,
  // Sudoku,
  // Manga,
] as Project[];
