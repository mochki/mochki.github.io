import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { pageMetadata } from "../../pages";

const nonAboutPages = pageMetadata.filter(({ id }) => id !== "about");

export const Menu: React.FC<{ show: boolean }> = ({ show }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          key="menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
          className="grid flex-grow justify-items-center grid-rows-14"
        >
          {nonAboutPages.map(({ id, title }) => (
            <div
              key={id}
              className="flex w-full center items-center overflow-hidden"
            >
              <Link
                to={id}
                className="text-[7rem] leading-[0.7] text-gray-600 hover:text-white hover:scale-110 w-full text-center cursor-pointer text-nowrap"
              >
                {title.toUpperCase()}
              </Link>
            </div>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
