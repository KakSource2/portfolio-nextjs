import style from "./productpreview.module.scss";
import img_product_desktop from "./assets/image-product-desktop.jpg";
import cart from "./assets/icon-cart.svg";
import { useOutletContext } from "react-router-dom";

const ProductPreview = () => {
  const { dark, english }: { dark: boolean; english: boolean } =
    useOutletContext();

  return (
    <div
      className={
        dark ? style.productpreview : `${style.productpreview} ${style.light}`
      }
    >
      <main>
        <div className={style.product__photo}>
          <img src={img_product_desktop} />
        </div>
        <div className={style.product}>
          <p className={style.category}>P E R F U M E</p>
          <h2 className={style.title}>Gabrielle Essence Eau De Parfum</h2>
          <p className={style.overview}>
            {english
              ? "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL"
              : "Una interpretación floral, solar y voluptuosa compuesta por Olivier Polge, creador de perfume por la Casa de CHANEL"}
          </p>
          <div className="price">
            <span className={style.discount}>$149.99</span>{" "}
            <span className={style.original}>$169.99</span>
          </div>
          <button>
            <img src={cart} /> {english ? "Add to Cart" : "Agregar al carrito"}
          </button>
        </div>
      </main>
    </div>
  );
};

export default ProductPreview;
