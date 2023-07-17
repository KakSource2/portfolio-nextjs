import style from "./interactiverating.module.scss";
import icon_star from "./assets/icon-star.svg";
import icon_thank_you from "./assets/illustration-thank-you.svg";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const InteractiveRating = () => {
  const [hasVoted, setHasVoted] = useState(false);
  const [buttons, setButtons] = useState([
    { ratingRepresentation: 1, selected: false },
    { ratingRepresentation: 2, selected: false },
    { ratingRepresentation: 3, selected: false },
    { ratingRepresentation: 4, selected: false },
    { ratingRepresentation: 5, selected: false },
  ]);

  const { english, dark }: { english: boolean; dark: boolean } =
    useOutletContext();

  useEffect(() => {
    // console.log(buttons);
  }, [buttons]);

  const handleSelection = (ratingSelected: number) => {
    setButtons((prev) => {
      let newArr = prev.map((item) => {
        item.selected = false;
        return item;
      });
      newArr[ratingSelected - 1].selected = true;
      return newArr;
    });
  };

  const voteSelected = () => {
    let selected = buttons.find((item) => item.selected);
    return selected?.ratingRepresentation;
  };

  return (
    <div
      className={
        dark
          ? style.interactiverating
          : `${style.interactiverating} ${style.light}`
      }
    >
      {hasVoted ? (
        <div className={style.voted}>
          <img src={icon_thank_you}></img>
          <span>
            {english
              ? `You selected ${voteSelected()} out of 5`
              : `Has seleccionado ${voteSelected()} de 5`}
          </span>
          <h2>{english ? "Thank you!" : "Gracias!"}</h2>
          <p>
            {english
              ? "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
              : "Apreciamos que te tomes el tiempo de dar una puntuación. Si en algún momento necesitas ayuda no dude en ponerte en contacto!"}
          </p>
        </div>
      ) : (
        <main>
          <img src={icon_star}></img>
          <h2>{english ? "How did we do?" : "¿Cómo te fue?"}</h2>
          <p>
            {english
              ? "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
              : "Por favor haznos saber que tal te fue en tu pregunta. ¡Todo comentario es apreciado ya que nos ayuda a mejorar nuestro servicio!"}
          </p>
          <div className={style.rating}>
            {buttons.map((item) => {
              if (item.selected) {
                return (
                  <button
                    onClick={() => handleSelection(item.ratingRepresentation)}
                    key={item.ratingRepresentation}
                    disabled
                    className={style.disabled}
                  >
                    {item.ratingRepresentation}
                  </button>
                );
              }
              return (
                <button
                  className={style.active}
                  key={item.ratingRepresentation}
                  onClick={() => handleSelection(item.ratingRepresentation)}
                >
                  {item.ratingRepresentation}
                </button>
              );
            })}
          </div>
          <button onClick={() => setHasVoted(true)} className={style.submit}>
            {english ? "SUBMIT" : "ENVIAR"}
          </button>
        </main>
      )}
    </div>
  );
};

export default InteractiveRating;
