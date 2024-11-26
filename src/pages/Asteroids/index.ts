import GameStart from "./GameStart.png";
import Level5 from "./Level5.png";
import GameOver from "./GameOver.png";
import { Page } from "../";

export default {
  id: "asteroids",
  title: "Asteroids",
  type: "project",
  // TODO: sourceCode: "https://github.com/mochki/...../Asteroids",
  article: [
    {
      type: "bigHeader",
      content: ["SPAAAAAAAAAACCCCEEE"],
    },
    {
      type: "paragraphs",
      content: [
        "We basically remade that 1979 hit completely, with higher resolution! It’s all written in C++ and uses OpenGL. It’s got:",
      ],
    },
    {
      type: "list",
      content: [
        "Scores!",
        "Levels!",
        "3D donut space projected in 2D so you wrap around all sides!",
        "Lives!",
        "Temporary invincibility!",
        "Random background stars!",
        "Random asteroids!",
      ],
    },
    {
      type: "paragraphs",
      content: [
        "At the time, this represented a lot of firsts for me: it was the first game I made, the first time I ran into a callback function, and first time doing anything with graphics. It was a ton of fun, I encourage everyone to download the source code and compile it and run it.",
      ],
    },
  ],
  images: [
    {
      src: GameStart,
      caption: "Screenshot of initial game beginning, you start with one life and asteroids are randomly generated.",
    },
    {
      src: Level5,
      caption: "Level 5 screenshot, you gain lives as you clear levels.",
    },
    {
      src: GameOver,
      caption: "Game over when you have lost all your lives.",
    },
  ],
} as const satisfies Page;
