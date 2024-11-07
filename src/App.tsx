import React from "react";
import Projects, { Project } from "./assets/projects";

function App() {
  const [project, setProject] = React.useState<Project | null>(null);

  return (
    <>
      <header className="flex items-end px-28 py-8 bg-white h-40 text-black">
        {/* TODO: japanese font */}
        <h1 className="text-6xl">こんにちは</h1>
        <h1 className="ml-8 text-5xl">i'm mochki</h1>
        {project && (
          <>
            <h1 className="ml-8 text-2xl">and i made</h1>
            <h1 className="ml-8 text-5xl">{project.name}</h1>
          </>
        )}
        {/* TODO: not this */}
        <button onClick={() => setProject(null)}>back</button>
        {/* menu, about, logo */}
      </header>
      {project ? (
        <section>{JSON.stringify(project.article)}</section>
      ) : (
        <nav className="grid">
          {Projects.map((project) => (
            <div onClick={() => setProject(project)}>{project.name}</div>
          ))}
        </nav>
      )}
    </>
  );
}

export default App;
