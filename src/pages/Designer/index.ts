import DesktopMobile from "./DesktopMobile.png";
import Portfolio from "./Portfolio.png";
import OldSite from "./OldSite.png";
import { Page } from "../types";

export default {
  id: "designer",
  title: "Designer Portfolio",
  // TODO: homepage: "https://www.",
  article: [
    {
      type: "bigHeader",
      content: ["Let Me Explain"],
    },
    {
      type: "paragraphs",
      content: [
        "This exclusive designer is my sister. She is, by far, my favorite sister. She is also probably my favorite person in the world. So when she asks me to do things for free, sometimes I do that thing.",
        "She is a phenomenal graphic designer. She has worked for some great companies and they also thought so. But one day, she decided she didn’t want to live in Utah anymore and work for the company she was currently working for, so she redesigned her site to build up her portfolio and asked me to code it all up. This I did, for free.",
        "This was after the first time she designed her site and I coded it up for her. That time, she bought me all my snowboarding gear as payment. If anyone needs a web developer, I am for hire if you’re willing to shell out snowboarding gear. Honestly though, she is great and you should check out her site by clicking on the homepage link up top or by going to TODOTODO",
        "I bootstrapped her website with Creat-React-App because I can’t be bothered to mess around with Webpack configs when I don’t need too. Because of this, it is a full fledged PWA so go add these sites to your mobile homepage and see the power of the future!",
        "Her husband is an iOS developer and between the three of us, we can almost do anything. We are recruiting family members, specifically anyone that could potentially be into me and would add valuable skills to the family. DM me on instagram for details.",
      ],
    },
  ],
  images: [
    {
      src: DesktopMobile,
      caption:
        "A desktop and mobile screenshot of her current portfolio website’s homepage.",
    },
    {
      src: Portfolio,
      caption:
        "A desktop and mobile screenshot of her current portfolio website’s project page.",
    },
    {
      src: OldSite,
      caption: "An older version of her site, of which I also made.",
    },
  ],
} as const satisfies Page;
