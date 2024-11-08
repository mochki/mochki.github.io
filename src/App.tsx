import React from "react";
import Projects, { Project } from "./assets/projects";

function App() {
  const [project, setProject] = React.useState<Project | null>(null);

  return (
    <>
      <header className="flex items-end px-28 py-8 h-40 bg-white font-display text-black">
        {/* TODO: japanese font */}
        <h1 className="text-6xl">こんにちは</h1>
        <h1 className="ml-8 text-5xl">i'm mochki</h1>
        {project && project.name !== "About" && (
          <>
            <h1 className="ml-8 text-2xl font-light">and i made</h1>
            <h1 className="ml-8 text-5xl">{project.name}</h1>
          </>
        )}
        {/* TODO: not this */}
        {project && <button onClick={() => setProject(null)}>back</button>}
        {/* menu, about, logo */}
      </header>
      {project ? (
        // ARTICLE
        <section>{JSON.stringify(project.article)}</section>
      ) : (
        // TODO: router & links
        // LINKS
        <nav className="grid justify-center items-center justify-items-center w-full h-full">
          {Projects.filter(({ name }) => name !== "About").map((project) => (
            <div
              className="cursor-pointer text-7xl overflow-hidden text-nowrap text-gray-600 hover:text-9xl hover:text-white"
              onClick={() => setProject(project)}
            >
              {project.name.toUpperCase()}
            </div>
          ))}
        </nav>
      )}
      {/* ARROWS */}
      {/* Keyboard Shortcuts */}
    </>
  );
}

export default App;
