import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Arrows } from "./Arrows";
import { PageProps } from "../../pages";

// const HeaderSubtitle: React.FC<Pick<Page, "type">> = ({ type }) => (
//   <div className="font-light">{type}</div>
// );
// // activePage.id !== "about" && (
// //   <React.Fragment key={}>
// //     <h1 className="ml-3 text-5xl">& {activePage.title}</h1>
// //     <h1 className="ml-8 text-2xl font-japanese">を作りました</h1>
// //   </React.Fragment>
// // )}

export const Article: React.FC<PageProps> = ({ activePage }) => {
  if (!activePage) return null;

  const { sourceCode, homepage, article, images = [] } = activePage;

  // gonna throw the subtitle in here

  return (
    <AnimatePresence>
      <motion.section animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute top-64 mx-40 grid grid-cols-2">
        <section>
          {images.map(({ src, caption }, i) => (
            <React.Fragment key={`image-${i}`}>
              <img src={src} alt={caption} />
              <div>{caption}</div>
            </React.Fragment>
          ))}
        </section>
        <div className="">
          {sourceCode && (
            <div>
              <a href={sourceCode}>Source Code</a>
            </div>
          )}
          {homepage && (
            <div>
              <a href={homepage}>Homepage</a>
            </div>
          )}
          {article.map(({ type, content, link }) => (
            <div key={content[0]}>
              {type === "paragraphs" && (
                <p>
                  {content.map((paragraph, i) => (
                    <React.Fragment key={`p-${i}`}>{paragraph}</React.Fragment>
                  ))}
                </p>
              )}
              {type === "list" && (
                <ul>
                  {content.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {type === "bigHeader" && <h1>{content[0]}</h1>}
              {type === "smallHeader" && <h2>{content[0]}</h2>}
              {type === "quote" && (
                <blockquote>
                  {content.map((paragraph, i) => (
                    <React.Fragment key={`q-${i}`}>{paragraph}</React.Fragment>
                  ))}
                </blockquote>
              )}
              {type === "link" && (
                <a href={link} target="_blank" rel="noreferrer">
                  {content[0]}
                </a>
              )}
            </div>
          ))}
        </div>
      </motion.section>
      <motion.nav
        key="arrows"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute flex gap-8 bottom-64 right-32 cursor-pointer"
      >
        <Arrows />
      </motion.nav>
    </AnimatePresence>
  );
};
