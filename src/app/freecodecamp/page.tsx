"use client";
import { useGenerationStore } from "../portfolio/states";
import style from "./main.module.scss";
import img_survey_form from "../assets/projects/survey-form.png";
import img_tribute_page from "../assets/projects/tribute-page.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type projects = {
  id: number;
  name: { en: string; es: string };
  link: string;
  img: StaticImageData;
  alt_en: string;
  alt_es: string;
}[];

const projects: projects = [
  {
    id: 1,
    name: { en: "Survey Form", es: "Formulario Encuesta" },
    link: "/free-code-camp/survey-form",
    img: img_survey_form,
    alt_en: "",
    alt_es: "",
  },
  {
    id: 2,
    name: { en: "Tribute Page", es: "Página tributo" },
    link: "/free-code-camp/tribute-page",
    img: img_tribute_page,
    alt_en: "",
    alt_es: "",
  },
];

const Main = () => {
  const { isEnglish, isDark } = useGenerationStore();

  return (
    <div
      className={
        isDark ? style.freecodecamp : `${style.freecodecamp} ${style.light}`
      }
    >
      <main>
        {projects.map((item) => (
          <div key={item.id}>
            <Link href={item.link}>
              <p>{isEnglish ? item.name.en : item.name.es}</p>
              <Image alt={isEnglish ? "" : ""} src={item.img} />
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
};
export default Main;
