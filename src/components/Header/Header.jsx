import "./style.scss";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";

export const Header = ({ switchTheme, toggleTheme }) => {
  return (
    <div className="header">
      <div className="title">
        <h1>devfinder</h1>
      </div>
      <div className="theme">
        <button onClick={switchTheme} className="dark_mode-icon">
          {toggleTheme ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
        </button>
      </div>
    </div>
  );
};
