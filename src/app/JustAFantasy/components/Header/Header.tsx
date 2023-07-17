import { Link } from "react-router-dom";
// import ExperienceBar from "../ExperiencieBar/ExperienceBar";
import style from "./header.module.scss";

type Header = {
  english: boolean;
  changeLocale: () => void;
  dark: boolean;
  changeDark: () => void;
};

const Header = ({ english, changeLocale, dark, changeDark }: Header) => {
  return (
    <div className={dark ? style.header : `${style.header} ${style.light}`}>
      <main>
        <h2>Just a Fantasy</h2>
        <ul>
          <li>
            <Link to="/just-a-fantasy/inventory">
              {english ? "Inventory" : "Inventario"}
            </Link>
          </li>
          <li>
            <Link to="/just-a-fantasy/skills">
              {english ? "Skills" : "Habilidades"}
            </Link>
          </li>
          <li>
            <Link to="/just-a-fantasy/stats">
              {english ? "Stats" : "Estadísticas"}
            </Link>
          </li>
          <li>
            <Link to="/just-a-fantasy/market">
              {english ? "Market" : "Mercado"}
            </Link>
          </li>
          <li>
            <Link to="/just-a-fantasy/battle">
              {english ? "Battle" : "Batalla"}
            </Link>
          </li>
          <li>
            <Link to="/just-a-fantasy/quests">
              {english ? "Quests" : "Misiones"}
            </Link>
          </li>
        </ul>
        <div className={style.user}>
          <p>Online players: 0</p>
        </div>
        <button onClick={changeLocale}>Español</button>
        <button onClick={changeDark}>Light mode</button>
      </main>
      {/* <ExperienceBar
        experiencie={stats.experiencie}
        totalExperiencie={stats.totalExperiencie}
      /> */}
    </div>
  );
};
export default Header;
