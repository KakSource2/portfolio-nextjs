import icon__clock from "./assets/icon-clock.svg";
import icon__ethereum from "./assets/icon-ethereum.svg";
import icon__view from "./assets/icon-view.svg";
import img__avatar from "./assets/image-avatar.png";
import img__equilibrium from "./assets/image-equilibrium.jpg";
import style from "./nft_card.module.scss";

const NftCard = () => {
  return (
    <div className={style.nft_card}>
      <main>
        <div className={style.nft}>
          <img src={img__equilibrium} />
          <img className={style.view} src={icon__view} />
        </div>
        <div className={style.card__content}>
          <h3>Equilibrium #3429</h3>
          <p>Our Equilibrium collection promotes balance and calm</p>
          <div className={style.price}>
            <div>
              <img src={icon__ethereum} /> 0.041 ETH
            </div>
            <div>
              <img src={icon__clock} /> 3 days left
            </div>
          </div>
          <div className={style.creation}>
            <img src={img__avatar} /> <p>Creation of Jules Wyvern</p>
          </div>
        </div>
      </main>
    </div>
  );
};
export default NftCard;
