import React from "react";
// import kuwagata from "./assets/kuwagata.jpg";
// import "./App.css";

function App() {
  const [project, setProject] = React.useState(null);

  return (
    <>
      <header className="flex items-end px-28 py-8 bg-white h-40 text-black">
        <h1 className="text-6xl">こんにちは</h1>
        <h1 className="ml-8 text-5xl">i'm mochki</h1>
        {!project && (
          <>
            <h1 className="ml-8 text-2xl">and i made</h1>
            <h1 className="ml-8 text-5xl">{project || "this project"}</h1>
          </>
        )}
      </header>
      <nav>
        {/* <a href="https://github.com/mochki" target="_blank">
          <img src={kuwagata} className="logo" alt="it's me!" />
        </a> */}
      </nav>
    </>
  );
}

export default App;
