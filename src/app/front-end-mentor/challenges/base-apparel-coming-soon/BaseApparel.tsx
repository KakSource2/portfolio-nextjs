import style from "./baseapparelcomingsoon.module.scss";
import logo from "./assets/logo.svg";
import background from "./assets/bg-pattern-desktop.svg";
import hero_desktop from "./assets/hero-desktop.jpg";
import { useOutletContext } from "react-router-dom";

const BaseApparel = () => {
  const { english, dark }: { english: boolean; dark: boolean } =
    useOutletContext();

  return (
    <div
      style={{
        backgroundImage: `url("${background}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={
        dark
          ? style.baseapparelcomingsoon
          : `${style.baseapparelcomingsoon} ${style.light}`
      }
    >
      <main>
        <img src={logo} />
        <div>
          <p className={style.heading}>
            WE'RE
            <br />
            <b>COMING</b> <br />
            <b>SOON</b>
          </p>

          <p>
            {english
              ? "Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals."
              : ""}
          </p>
          <form>
            <input type="text" />
            <button>{">"}</button>
          </form>
        </div>
      </main>
      <img src={hero_desktop} alt="" />
    </div>
  );
};
export default BaseApparel;
