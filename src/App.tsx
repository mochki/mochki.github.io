import { useState } from "react";
import Projects, { Project } from "./assets/projects";
// 14 projects to display, 1 about page --> tailwind config
// import { Article } from "./components/Article";

function App() {
  const [project, setProject] = useState<Project | null>(null);

  return (
    <>
      <header className="flex items-end px-28 py-8 h-40 bg-white font-display text-black">
        {/* TODO: japanese font */}
        <h1 className="text-6xl font-japanese">こんにちは</h1>
        <h1 className="ml-8 text-5xl">i'm mochki</h1>
        {project && project.name !== "About" && (
          <>
            <h1 className="ml-3 text-5xl">& {project.name}</h1>
            <h1 className="ml-8 text-2xl font-japanese">を作りました</h1>
          </>
        )}
        {project && (
          <button className="ml-12" onClick={() => setProject(null)}>
            back
          </button>
        )}
        {/* menu, about, logo */}
      </header>
      {/* <div class="absolute h-40">BLANK MASK</div> */}
      {project ? (
        <section>{JSON.stringify(project.article)}</section>
      ) : (
        // <Article project={project} />
        // TODO: router & links
        <nav className="grid flex-grow justify-items-center grid-rows-14">
          {Projects.filter(({ name }) => name !== "About").map((project) => (
            <div
              className="flex w-full center items-center overflow-hidden"
              onClick={() => setProject(project)}
            >
              {/* gonna need to do media queries and set the text size. or something */}
              <a className="text-[7rem] leading-[0.7] text-gray-600 hover:text-white hover:scale-110 w-full text-center cursor-pointer text-nowrap">
                {project.name.toUpperCase()}
              </a>
            </div>
          ))}
        </nav>
      )}
      {/* ARROWS <footer> */}
      {/* Keyboard Shortcuts */}
    </>
  );
}

export default App;
