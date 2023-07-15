"use client";
import { icons } from "@/assets/data/icons";
import me from "@/assets/me.png";
import style from "./main.module.scss";
import Image from "next/image";
import { useGenerationStore } from "../../states";
const Main = () => {
  const { isEnglish, isDark } = useGenerationStore();

  return (
    <main className={isDark ? style.main : `${style.main} ${style.light}`}>
      <div className={style.details}>
        {isEnglish ? (
          <h1>
            Hi, I'm <b>Gaston.</b>
          </h1>
        ) : (
          <h1>
            Hola, Soy <b>Gastón.</b>
          </h1>
        )}
        <p>
          {isEnglish
            ? "As a passionate Front End Developer, I specialize in building dynamic and engaging web applications. With a strong focus on user experience, I bring designs to life by leveraging my expertise in HTML, CSS, and JavaScript. I strive to create intuitive interfaces, seamless interactions, and responsive layouts. My goal is to deliver visually appealing and user-friendly web experiences that captivate and engage audiences."
            : "Como apasionado Desarrollador Front End, me especializo en construir dinámicas y atractivas aplicaciones web. Con un fuerte mira en la experiencia del usuario, traigo diseños a la vida mostrando mi dominion en HTML, CSS y JavaScript. Me esfuerzo en crear interfaces intuitivas, con buena interaccion, y diseños receptivos. Mi meta es entregar experiencias web atractivas fáciles de usar las cuales capten el interés de la audiencia"}
          .
        </p>
        <div className={style.btns}>
          <a href="https://www.linkedin.com/in/gaston-bernardez-64437b209/">
            <p>{isEnglish ? "Contact" : "Contacto"}</p>
            <Image
              alt={
                isEnglish
                  ? icons.social_media.linkedIn.alt_en
                  : icons.social_media.linkedIn.alt_es
              }
              src={icons.social_media.linkedIn.icon}
            />
          </a>
          <a href="#apps">
            <p className="projects">{isEnglish ? "Projects" : "Proyectos"}</p>
          </a>
        </div>
      </div>
      <Image className={style.photo} alt="A photo of me" src={me} />
    </main>
  );
};
export default Main;
