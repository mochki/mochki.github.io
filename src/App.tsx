import { useLoaderData } from "react-router-dom";
import { useShortcuts } from "./effects/shortcuts";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Article } from "./components/Article";
import { PageState } from "./pages";

function App() {
  const activePage = useLoaderData() as PageState;
  useShortcuts();

  return (
    <>
      <Header activePage={activePage} />
      <Menu show={!activePage} />
      <Article activePage={activePage} />
    </>
  );
}

export default App;
