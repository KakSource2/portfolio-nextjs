import { useOutletContext } from "react-router-dom";
import style from "./stats.module.scss";

const Stats = () => {
  const { english, dark }: { english: boolean; dark: boolean } =
    useOutletContext();
  return (
    <div className={dark ? style.stats : `${style.stats} ${style.light}`}>
      <h2>{english ? "Stats" : "Estadísticas"}</h2>
      <div>
        <h3>
          {/* {english ? "Current level" : "Nivel actual"}: {stats?.level} */}
        </h3>
        <p>{/* {english ? "Strength" : "Fuerza"}: {stats?.strenght} */}</p>
        <p>{/* {english ? "Agility" : "Agilidad"}: {stats?.agility} */}</p>
        <p>{/* {english ? "Dexterity" : "Destreza"}: {stats?.dexterity} */}</p>
        <p>
          {/* {english ? "Constitution" : "Constitución"}: {stats?.constitution} */}
        </p>
        {/* {JSON.stringify(stats)} */}
      </div>
    </div>
  );
};
export default Stats;
