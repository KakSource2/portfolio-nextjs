import "./footer.module.scss";
import icon_linkedin from "../assets/linkedin.png";
import logo_tmdb from "../assets/TMDB.png";
import logo_kak from "../assets/logo-kak.png";
import style from "./footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <main>
        <Link
          to="https://www.linkedin.com/in/gaston-ignacio-bernardez-64437b209/"
          rel="noopener noreferrer"
        >
          <img src={icon_linkedin} />
        </Link>
        <Link to="https://www.themoviedb.org/">
          <img src={logo_tmdb} />
        </Link>
        <Link to="/">
          <img src={logo_kak} />
        </Link>
      </main>
      <p>© Alkemy Challenge</p>
    </footer>
  );
};

export default Footer;
