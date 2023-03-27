import "./style.scss";
import { BsSearch } from "react-icons/bs";

export const Search = () => {
  return (
    <div className="search">
      <div className="search_icon">
        <BsSearch />
        <input type="text" placeholder="Search Github Username..." />
      </div>
      <button>Search</button>
    </div>
  );
};
