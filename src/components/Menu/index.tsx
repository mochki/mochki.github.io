import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { pageMetadata } from "../../pages";

export const Menu: React.FC<{ show: boolean }> = ({ show }) => {
  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.nav
        key="menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
        className="grid flex-grow justify-items-center grid-rows-14"
      >
        {pageMetadata.map(({ id, title }) => (
          <div
            key={id}
            className="flex w-full center items-center overflow-hidden"
          >
            <Link
              to={id}
              // className="text-[7rem] leading-[0.7] text-gray-600 hover:text-white hover:scale-110 w-full text-center cursor-pointer text-nowrap"
              className="text-4xl leading-[0.7] text-gray-600 hover:text-white hover:scale-110 w-full text-center cursor-pointer text-nowrap"
            >
              {title.toUpperCase()}
            </Link>
          </div>
        ))}
      </motion.nav>
    </AnimatePresence>
  );
};
