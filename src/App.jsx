import "./App.scss";
import { Header } from "./components/Header/Header";
import { Search } from "./components/Search/Search";
import { Card } from "./components/Card/Card";
import useLocalStorage from "use-local-storage";
import { useState } from "react";
import { Api } from "./providers/Api/api.js";
import { Loading } from "./components/Loading/Loading";

const App = () => {
  const [user, setUser] = useState();
  const [search, setSearch] = useState("");
  const [userNotFound, setUserNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    if (search === "") {
      return alert("Preencha o campo nome!");
    }
    try {
      setLoading(true);
      const response = await Api.get(`/${search}`);
      setLoading(false);
      setUserNotFound(false);
      return setUser(response.data);
    } catch (err) {
      console.log(err);
      setLoading(false);
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
      {loading && <Loading />}
      {user && (
        <Card user={user} userNotFound={userNotFound} loading={loading} />
      )}
      {!user && <p className="notfound">Digite um usuário !</p>}
    </div>
  );
};

export default App;
