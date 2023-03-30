import "./style.scss";
import { BsSearch } from "react-icons/bs";

export const Search = ({ fetchUser, search, setSearch }) => {
  return (
    <div className="search">
      <div className="search_icon">
        <BsSearch />
        <input
          type="text"
          placeholder="Search Username"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <button onClick={fetchUser}>Search</button>
    </div>
  );
};
