import { Link, useNavigate } from "react-router-dom";
import style from "./header.module.scss";
import Search from "./Search";

const MoviesHeader = ({
  english,
  changeEnglish,
}: {
  english: boolean;
  changeEnglish: () => void;
}) => {
  const navigation = useNavigate();

  const token = localStorage.getItem("token_tmdb");

  const logout = () => {
    localStorage.removeItem("token_tmdb");
    navigation("login");
  };

  return (
    <ul className={style.movies}>
      <p className={style.logo}>
        <Link to="">
          TM<b>DB</b>
        </Link>
      </p>
      <div className={style.nav__buttons}>
        {!token && (
          <Link to="login">
            <span>Login</span>
          </Link>
        )}
        {token && (
          <Link to="listings">
            <span>{english ? "Listing" : "Listado"}</span>
          </Link>
        )}

        <Link to="contact">
          <span>{english ? "Contact" : "Contacto"}</span>
        </Link>

        {token && (
          <button onClick={() => logout()}>
            {english ? "Logout" : "Cerrar sesión"}
          </button>
        )}
        <button style={{ fontSize: "0.8rem" }} onClick={() => changeEnglish()}>
          {english ? "Cambiar a español" : "Change to english"}
        </button>
      </div>
      <Search />
    </ul>
  );
};

export default MoviesHeader;
