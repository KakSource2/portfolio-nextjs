import { useOutletContext } from "react-router-dom";
import style from "./ThreeColumn.module.scss";
import icon_sedans from "./assets/icon-sedans.svg";
import icon_suvs from "./assets/icon-suvs.svg";
import icon_luxury from "./assets/icon-luxury.svg";

const ThreeColumn = () => {
  const { english, dark }: { english: boolean; dark: boolean } =
    useOutletContext();

  return (
    <div
      className={
        dark ? style.threecolumn : `${style.threecolumn} ${style.light}`
      }
    >
      <main>
        <div>
          <div>
            <img src={icon_sedans} />
            <h2>SEDANS</h2>
            <p>
              {english
                ? "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
                : "Elige un sedan por su asequibilidad y excelente eficiencia en consumo de combustible. Ideal para trasladarse en la cuidad o en su siguiente viaje en carretera."}
            </p>
          </div>
          <button>{english ? "Learn More" : "Aprender más"}</button>
        </div>
        <div>
          <div>
            <img src={icon_suvs} />
            <h2>SUVS</h2>
            <p>
              {english
                ? "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
                : "Toma un SUV por sus interiores espacios, y versatilidad. Perfecto para su siguiente vacacion familiar o aventurarse fuera de carretera."}
            </p>
          </div>
          <button>{english ? "Learn More" : "Aprender más"}</button>
        </div>
        <div>
          <div>
            <img src={icon_luxury} />
            <h2>LUXURY</h2>
            <p>
              {english
                ? "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
                : "Viaja en las mejores marcas de autos sin precios cambiantes. Disfruta un mejorado comfort de una lujuriosa renta y llega a todos lados con estilo. "}
            </p>
          </div>
          <button>{english ? "Learn More" : "Aprender más"}</button>
        </div>
      </main>
    </div>
  );
};
export default ThreeColumn;
