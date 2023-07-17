import PocketBase from "pocketbase";
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import swal from "sweetalert";
import style from "./login.module.scss";

const pb = new PocketBase("http://127.0.0.1:8090");

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  let pocketbase_auth = null;
  const { english, dark }: { english: boolean; dark: boolean } =
    useOutletContext();

  useEffect(() => {
    pocketbase_auth = localStorage.getItem("pocketbase_auth");
    if (pb.authStore.isValid) navigate("/just-a-fantasy");
    else {
      pb.authStore.clear();
    }
  }, []);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const regexEmail =
    //   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (email === "" || password === "") {
      return swal({
        text: english
          ? "Fields cannot be empty!"
          : "Los campos no pueden estar vacíos!",
        icon: "error",
      });
    }

    console.log(email, password);
    // const authData = await pb
    // .collection("users")
    // .authWithPassword(email, password);

    // console.log(pb.authStore.isValid);
    // console.log(pb.authStore.token);
    // console.log(pb.authStore.model.id);
    // .then((res) => {
    //   swal({
    //     text: english
    //       ? "You have logged in! You will redirected after this popup"
    //       : "Has accedido! Serás redireccionado al aceptar.",
    //     icon: "success",
    //   });
    //   const token = res.data.token;
    //   localStorage.setItem("token_tmdb", token);
    // })
    // .catch((err) => {
    //   console.log(err);
    //   swal({
    //     text: english
    //       ? "There was some error while accesing the API"
    //       : "Hubo un error al acceder al Api!",
    //     icon: "error",
    //   });
    // });

    // return navigate("/tmdb/listings");
  };

  return (
    <div className={dark ? style.login : `${style.login} ${style.dark}`}>
      <form onSubmit={(e) => submitHandler(e)}>
        <label>
          <span>{english ? "Username" : "Correo electrónico"}</span>
          <input
            type="username"
            name="username"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          <span>{english ? "Password" : "Contraseña"}</span>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">{english ? "Login" : "Ingresar"}</button>
      </form>
    </div>
  );
};
export default Login;
