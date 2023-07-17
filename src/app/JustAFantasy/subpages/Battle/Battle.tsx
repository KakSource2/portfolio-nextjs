import { useOutletContext } from "react-router-dom";
import style from "./battle.module.scss";
import { search_for_monsters } from "../../components/common_functions";

const Battle = ({}) => {
  const { english, dark }: { english: boolean; dark: boolean } =
    useOutletContext();
  // const [monster, setMonster] = useState();

  // const add_monster = async () => {
  //   const records = await search_for_monsters();
  //   if (records) {
  //     const r = () => Math.floor(Math.random() * records.length);
  //     console.log(records[r]);
  //   }
  // };

  return (
    <div className={dark ? style.battle : `${style.battle} ${style.light}`}>
      <main>
        <button onClick={() => search_for_monsters()}>
          {english ? "Search for monster..." : "Buscar monstruos"}
        </button>
        {/* <div>{stats?.hp / stats?.max_hp}</div> */}
        {/* {stats?.hp} / {stats?.max_hp} */}
        <div>monster.hp / monster.max_hp</div>
      </main>
    </div>
  );
};
export default Battle;
