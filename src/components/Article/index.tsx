import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Arrows } from "./Arrows";
import { PageProps } from "../../pages";

export const Article: React.FC<PageProps> = ({ activePage }) => {
  return (
    <AnimatePresence>
      {activePage && (
        <>
          <motion.section
            key="article"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-64 mx-40 grid grid-cols-2"
          >
            <div></div>
            <div className="">{JSON.stringify(activePage.article)}</div>
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
        </>
      )}
    </AnimatePresence>
  );
};
