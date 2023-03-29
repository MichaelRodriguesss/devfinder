import "./App.scss";
import { Header } from "./components/Header/Header";
import { Search } from "./components/Search/Search";
import { Card } from "./components/Card/Card";
import useLocalStorage from "use-local-storage";
import { useState } from "react";
import { Api } from "./providers/Api/api.js";

const App = () => {
  const [user, setUser] = useState();
  const [search, setSearch] = useState("");
  const [userNotFound, setUserNotFound] = useState(false);

  const fetchUser = async () => {
    if (search === "") {
      return alert("Preencha o campo nome!");
    }
    try {
      const response = await Api.get(`/${search}`);
      setUserNotFound(false);
      return setUser(response.data);
    } catch (err) {
      console.log(err);
      setUserNotFound(true);
    }
  };

  console.log(user);

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
      <Search setSearch={setSearch} search={search} fetchUser={fetchUser} />
      <Card user={user} userNotFound={userNotFound} />
    </div>
  );
};

export default App;
