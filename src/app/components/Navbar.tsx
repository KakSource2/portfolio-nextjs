import Link from "next/link";
import style from "./navbar.module.scss";
import Image from "next/image";
import { moon, sun } from "@/assets/icons/icons";
import Swal from "sweetalert2";

const Navbar = ({ english, changeToEnglish, dark, changeToDark }: navbar) => {
  const redirection_to_linkedin = async () => {
    const test = Swal.fire({
      title: english
        ? "Sending you to my LinkedIn"
        : "Llevándote a mi LinkedIn",
      text: english ? "Do you want to go?" : "¿Quieres ir?",
      confirmButtonText: english ? "Let's go!" : "¡Vamos!",
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
    <header className={dark ? style.navbar : `${style.navbar} ${style.light}`}>
      <button onClick={redirection_to_linkedin}>Gaston Bernardez</button>
      <div className={style.btns}>
        <Link href="#apps">{english ? "Apps" : "Aplicaciones"}</Link>
        <Link href="#skills">{english ? "Skills" : "Habilidades"}</Link>
      </div>
      <div className={style.config}>
        <button onClick={changeToEnglish}>
          {english ? "Español" : "English"}
        </button>
        <button
          onClick={changeToDark}
          className={dark ? style.darkmode : style.lightmode}
        >
          {dark ? (
            <Image alt="icon of a sun" src={sun} />
          ) : (
            <Image alt="icon of a moon" src={moon} />
          )}
        </button>
      </div>
    </header>
  );
};
export default Navbar;
