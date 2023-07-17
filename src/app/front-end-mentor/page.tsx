import Image from "next/image";
import style from "./home.module.scss";
import { icons } from "@/assets/data/icons";
import { useGenerationStore } from "../portfolio/states";
import Link from "next/link";
import { apps } from "@/assets/data/apps";

const Home = () => {
  const { isEnglish, isDark } = useGenerationStore();

  return (
    <div className={isDark ? style.home : `${style.home} ${style.light}`}>
      {isEnglish ? (
        <h1>
          <Link href="https://www.frontendmentor.io/">
            <Image
              alt={
                isEnglish
                  ? icons.projects.front_end_mentor.alt_en
                  : icons.projects.front_end_mentor.alt_es
              }
              src={icons.projects.front_end_mentor.icon}
            />
          </Link>
          <p>
            <span>Frontend</span> Mentor Challenges!
          </p>
        </h1>
      ) : (
        <h1>
          <Link href="https://www.frontendmentor.io/">
            <Image
              alt={
                isEnglish
                  ? icons.projects.front_end_mentor.alt_en
                  : icons.projects.front_end_mentor.alt_es
              }
              src={icons.projects.front_end_mentor.icon}
            />
          </Link>
          <p>
            ¡Desafíos de <span>Frontend</span> Mentor!
          </p>
        </h1>
      )}
      <div className={style.challenges}>
        {apps[2]?.projects &&
          apps[2].projects.map((item) => {
            if (item.img) {
              <button disabled>
                <p>{isEnglish ? item.name.en : item.name.es}</p>
                <Image src={item.img} alt={""} />
              </button>;
            }
            if (item.wip)
              return (
                <button disabled>
                  <p>{isEnglish ? item.name.en : item.name.es}</p>
                </button>
              );
            return (
              <Link href={item.link}>
                <p>{isEnglish ? item.name.en : item.name.es}</p>
              </Link>
            );
          })}
      </div>
    </div>
  );
};
export default Home;
