import { FC } from "react";
import { useLoaderData } from "react-router-dom";
import { useShortcuts } from "./effects/shortcuts";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Article } from "./components/Article";
import { ActivePage } from "./pages";

export const App: FC = () => {
  const activePage = useLoaderData() as ActivePage;
  useShortcuts();

  return (
    <>
      <Header />
      {!activePage ? <Menu /> : <Article {...activePage} />}
    </>
  );
};
