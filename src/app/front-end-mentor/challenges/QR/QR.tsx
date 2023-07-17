import { useOutletContext } from "react-router-dom";
import image from "./assets/image-qr-code.png";
import style from "./qr.module.scss";

const QR = () => {
  const { dark, english }: { dark: boolean; english: boolean } =
    useOutletContext();

  return (
    <div className={dark ? style.qr : `${style.qr} ${style.light}`}>
      <main>
        <img src={image} />
        <h3>
          {english
            ? "Improve your front-end skills by building projects"
            : "Mejora tus habilidades de front-end creando proyectos"}
        </h3>
        <p>
          {english
            ? "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
            : "Escanea el código QR para visitar Frontend Mentor y llevar tus habilidades de programación al siguiente nivel"}
        </p>
      </main>
    </div>
  );
};
export default QR;
