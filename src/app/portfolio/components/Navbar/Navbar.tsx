"use client";
import Link from "next/link";
import style from "./navbar.module.scss";
import Image from "next/image";
import { icons } from "@/assets/data/icons";
import Swal from "sweetalert2";
import { Amarante } from "next/font/google";
import { useGenerationStore } from "../../states";

const amarante = Amarante({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  const { isEnglish, setEnglish, isDark, setDark } = useGenerationStore();
  const redirection_to_linkedin = async () => {
    const test = Swal.fire({
      title: isEnglish
        ? "Sending you to my LinkedIn"
        : "Llevándote a mi LinkedIn",
      text: isEnglish ? "Do you want to go?" : "¿Quieres ir?",
      confirmButtonText: isEnglish ? "Let's go!" : "¡Vamos!",
      cancelButtonText: "Nah",
      showCancelButton: true,
      cancelButtonColor: "red",
      allowEscapeKey: true,
    });
    if ((await test).isConfirmed) {
      window.location.href =
        "https://www.linkedin.com/in/gaston-bernardez-64437b209/";
    }
  };

  return (
    <header
      className={
        isDark
          ? `${style.navbar} ${amarante.className}`
          : `${style.navbar} ${style.light}`
      }
    >
      <button className={style.logo} onClick={redirection_to_linkedin}>
        Gaston Bernardez
      </button>
      <div className={style.btns}>
        <Link href="#apps">
          <p>{isDark ? "Apps" : "Aplicaciones"}</p>
        </Link>
        <Link href="#skills">
          <p>{isDark ? "Skills" : "Habilidades"}</p>
        </Link>
      </div>
      <div className={style.config}>
        <button onClick={() => setEnglish(!isEnglish)}>
          {isEnglish ? (
            <>
              <p>Español</p>
              <Image
                alt="icon of a flag from Argentina"
                src={icons.flags.argentina.icon}
              />
            </>
          ) : (
            <>
              <p>English</p>
              <Image
                alt={
                  isEnglish
                    ? icons.flags.united_states.alt_en
                    : icons.flags.united_states.alt_es
                }
                src={icons.flags.united_states.icon}
              />
            </>
          )}
        </button>
        <button
          onClick={() => setDark(!isDark)}
          className={isDark ? style.darkmode : style.lightmode}
        >
          {isDark ? (
            <Image
              alt={
                isEnglish
                  ? icons.dark_mode.sun.alt_en
                  : icons.dark_mode.sun.alt_es
              }
              src={icons.dark_mode.sun.icon}
            />
          ) : (
            <Image
              alt={
                isEnglish
                  ? icons.dark_mode.moon.alt_en
                  : icons.dark_mode.moon.alt_es
              }
              src={icons.dark_mode.moon.icon}
            />
          )}
        </button>
      </div>
    </header>
  );
};
export default Navbar;
