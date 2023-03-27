import "./App.scss";
import { Header } from "./components/Header/Header";
import { Search } from "./components/Search/Search";
import { Card } from "./components/Card/Card";
import useLocalStorage from "use-local-storage";

const App = () => {
  const defaultTheme = window.matchMedia(
    "(prefers-colors-scheme: dark)"
  ).matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultTheme ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="container" data-theme={theme}>
      <Header
        switchTheme={switchTheme}
        toggleTheme={theme === "dark" ? true : false}
      />
      <Search />
      <Card />
    </div>
  );
};

export default App;
