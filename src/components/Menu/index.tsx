import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { pageMetadata } from "../../pages";
import { fade } from "../../animations";

export const Menu: React.FC<{ show: boolean }> = ({ show }) => (
  <AnimatePresence>
    {show && (
      <motion.nav {...fade} className="grid grow overflow-x-hidden justify-center">
        {pageMetadata.map(({ id, title }) => (
          <div
            key={id}
            className="flex text-center text-gray-600 hover:tracking-[-1.15em] hover:text-white hover:ease-in-out duration-100"
          >
            <Link
              className="!leading-[0.7] text-7xl sm:text-8xl lg:text-9xl 2xl:text-[10rem] w-full text-nowrap overflow-hidden"
              key={id}
              to={id}
            >
              {title.toUpperCase()}
            </Link>
          </div>
        ))}
      </motion.nav>
    )}
  </AnimatePresence>
);
