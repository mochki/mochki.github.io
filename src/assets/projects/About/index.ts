import kuwagata from "./kuwagata.jpg";
import { Project } from "..";

export default {
  name: "About",
  article: [
    {
      type: "paragraphs",
      content: ["I really like lists. These are the lists I will cover:"],
    },
    {
      type: "list",
      content: [
        "Places I’ve Worked & Some Accomplishments",
        "Places I’ve Lived & What I Was Doing There",
        "Things That Make Me Happy",
        "Topics On My To Learn List",
        "Life Long Dreams",
      ],
    },
    {
      type: "paragraphs",
      content: [
        "Strong educational & hobbyist foundations in low-level computer engineering, reverse engineering, disassembling, and debugging. Professional experience building enterprise web applications in highly collaborative environments with designers, big data engineers, and product management.",
        "If you want to contact me, just fork a project and @mention me in a pull request. I will get back to you.",
      ],
    },
    {
      type: "bigHeader",
      content: ["Places I’ve Worked & Some Accomplishments"],
    },
    {
      type: "list",
      content: [
        "RMS - insurance features & design system component library for use in React, Vue, and as vanilla Web Components",
        // TODO: fill these in
        "FamilySearch",
        "Jarvis Ventures",
      ],
    },
    {
      type: "bigHeader",
      content: ["Place I’ve Lived & What I Was Doing There"],
    },
    {
      type: "list",
      content: [
        "Japan - catching bugs & learning how to human",
        "California - crying & eating a lot",
        "Washington - little kid school & pokemon",
        "California - learning what an ego is and growing one",
        "Massachusetts - harry potter & more pokemon",
        "Pennsylvania - liking girls & even more pokemon",
        "Washington - teenage angst & life long friends that I never talk to",
        "Hawaii - two year church mission & so much sunburn",
        "Idaho - adult school & embracing introvertism",
        "Utah - work & work & work",
        "Washington - freedome & intense mental health struggles",
        "Utah - who knows from here on out",
      ],
    },
    {
      type: "bigHeader",
      content: ["Things That Make Me Happy"],
    },
    {
      type: "list",
      content: [
        // TODO: update
        "Grapefruit, Miso Soup, Hiyashi Ramen, Cucumbers, and Tea",
        "Cats, Clocks Ticking, Reading, and Flowers",
        "Hiking, Soccer, Ice Skating, and Rugby",
        "Kendama, Pokemon, and Retro Video Games",
      ],
    },
    {
      type: "bigHeader",
      content: ["Topics On My To Learn List"],
    },
    {
      type: "list",
      content: [
        // TODO: fill in
        "Game Development",
        "Emacs & the GNU world",
        "Rust",
        "Machine Learning",
        "Databases",
        "UI/UX Design",
      ],
    },
    {
      type: "bigHeader",
      content: ["Life Long Dreams"],
    },
    {
      type: "list",
      content: [
        // TODO: fill in
        "Get fluent in Japanese",
        "Live in Japan",
        "Travel until I get so exhausted and don't want to travel anymore",
      ],
    },
  ],
  images: [
    {
      src: kuwagata,
      caption: "Extra points if you know what this is from",
    },
  ],
  hideFromMenu: true,
} satisfies Project;
