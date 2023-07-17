"use client";
import background__day from "../../assets/backgrounds/login-day.jpg";
import background__night from "../../assets/backgrounds/login-night.jpg";
import style from "./login.module.scss";
import { Button } from "@mui/material";
import { useGenerationStore } from "@/app/portfolio/states";

const Login = () => {
  const { isEnglish, isDark } = useGenerationStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div
      style={
        isDark
          ? {
              backgroundImage: `url(${background__day})`,
              backgroundSize: "cover",
              backgroundPosition: "100% 60%",
            }
          : {
              backgroundImage: `url(${background__night})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
      }
      className={isDark ? style.login : `${style.login} ${style.light}`}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <p>{isEnglish ? "Username" : "Usuario"}</p>
          <input type="text" />
        </div>
        <div>
          <p>{isEnglish ? "Password" : "Contraseña"}</p>
          <input type="text" />
        </div>
        <Button type="submit">{isEnglish ? "Login" : "Acceder"}</Button>
      </form>
    </div>
  );
};
export default Login;
