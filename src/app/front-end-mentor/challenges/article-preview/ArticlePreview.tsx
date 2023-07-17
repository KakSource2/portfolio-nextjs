import style from "./articlepreview.module.scss";
import drawers from "./assets/drawers.jpg";
import avatar from "./assets/avatar-michelle.jpg";
import icon_share from "./assets/icons/icon-share.svg";
import { useOutletContext } from "react-router-dom";
const ArticlePreview = () => {
  const {
    dark,
    english,
  }: {
    dark: boolean;
    english: boolean;
  } = useOutletContext();

  return (
    <div
      className={
        dark ? style.articlepreview : `${style.articlepreview} ${style.light}`
      }
    >
      <main>
        <div className={style.photo}>
          <img src={drawers} alt="An image about drawers" />
        </div>
        <div className={style.details}>
          <h3>
            {english
              ? "Shift the overall look and feel by adding these wonderful touches to furniture in your home"
              : "Cambia el panorama y la sensación agregando estos toques impresionantes a los muebles de tu casa"}
          </h3>
          <p>
            {english
              ? "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete."
              : "¿Alguna vez has estado en un cuarto y sentiste que faltaba algo? "}
          </p>
          <div>
            <img src={avatar} />
            <div>
              <h5>Michelle Appleton</h5>
              <span>28 Jun 2020</span>
            </div>
            <img src={icon_share} />
          </div>
        </div>
      </main>
    </div>
  );
};
export default ArticlePreview;
