import { FC } from "react";
import { Link } from "react-router-dom";
import { pageMetadata } from "../../pages";

export const Menu: FC = () => (
  <nav className="grid grow overflow-x-hidden justify-center">
    {pageMetadata.map(({ id, title }) => (
      <div
        className="flex text-center text-gray-600 duration-100 hover:ease-in-out hover:text-white hover:tracking-[-0.5em] md:hover:tracking-[-0.8em] 2xl:hover:tracking-[-1.15em]"
        key={id}
      >
        <Link
          className="!leading-[0.7] text-7xl sm:text-8xl lg:text-9xl 2xl:text-[10rem] w-full text-nowrap overflow-hidden"
          to={id}
        >
          {title.toUpperCase()}
        </Link>
      </div>
    ))}
  </nav>
);
