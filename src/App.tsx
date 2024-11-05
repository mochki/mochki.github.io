import kuwagata from "./assets/kuwagata.jpg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://github.com/mochki" target="_blank">
          <img src={kuwagata} className="logo" alt="it's me!" />
        </a>
      </div>
      <h1>こんにちは</h1>
      <p className="wip">work in progress. this'll be sick, truss</p>
    </>
  );
}

export default App;
