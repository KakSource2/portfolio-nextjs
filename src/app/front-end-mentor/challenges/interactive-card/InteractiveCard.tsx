import { useState } from "react";
import style from "./interactive_card.module.scss";
import img__card_back from "./images/bg-card-back.png";
import img__card_front from "./images/bg-card-front.png";
import img__bg_main_desktop from "./images/bg-main-desktop.png";
// import img__bg_main_mobile from "./images/bg-main-mobile.png";

const InteractiveCard = () => {
  const [credentials, setCredentials] = useState({
    cardName: "",
    cardNumber: "",
    cardMonth: "",
    cardYear: "",
    cardCVC: 0,
  });

  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(credentials);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className={style.interactive_card}>
      <div>
        <img src={img__bg_main_desktop} />
      </div>
      <main>
        <form onSubmit={formHandler}>
          <label>CARDHOLDER NAME</label>
          <input
            onChange={handleChange}
            name="cardName"
            placeholder="e.g. Jane Appleseed"
            type="text"
          />
          <label>CARD NUMBER</label>
          <input
            onChange={handleChange}
            type="text"
            name="cardNumber"
            placeholder="e.g. 1234 5678 9123 0000"
          />
          <div>
            <div>
              <label>EXP. DATE (MM/YY)</label>
              <input
                onChange={handleChange}
                name="cardMonth"
                placeholder="MM"
              ></input>
              <input
                onChange={handleChange}
                name="cardYear"
                placeholder="YY"
              ></input>
            </div>
            <div>
              <label>CVC</label>
              <input
                onChange={handleChange}
                name="cardCVC"
                type="text"
                placeholder="e.g. 123"
              />
            </div>
          </div>
          <button type="submit">Confirm</button>
        </form>
      </main>
      <div className={style.cards}>
        <img src={img__card_front} />
        <img src={img__card_back} />
      </div>
    </div>
  );
};
export default InteractiveCard;
