import styled from "styled-components";
import style from "./advicegenerator.module.scss";
import icon_dice from "./assets/icon-dice.svg";
import pattern_divider_desktop from "./assets/pattern-divider-desktop.svg";
// import pattern_divider_mobile from "./assets/pattern-divider-mobile.svg";
import { useState } from "react";
import quotes, { quotesPROPS } from "./data/quotes";
import { useOutletContext } from "react-router-dom";

const r = () => Math.floor(Math.random() * 256);
const random_rgb = () => `rgba(${r()}, ${r()}, ${r()})`;

const CustomButton = styled.button<{ randomBackground: string }>`
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: hsl(150, 100%, 66%);
  box-shadow: 0 0.125rem 1rem hsl(150, 100%, 66%);
  border: none;
  &:active {
    background-color: ${(props) => props.randomBackground};
  }
  &:hover {
    background-color: ${(props) => props.randomBackground};
    box-shadow: 0 0.125rem 1rem ${(props) => props.randomBackground};
  }

  img {
    width: 75%;
  }
`;

const AdviceGenerator = () => {
  const [advice, setAdvice] = useState<quotesPROPS | undefined>(
    quotes[Math.floor(Math.random() * quotes.length)]
  );
  const { english, dark }: { english: boolean; dark: boolean } =
    useOutletContext();

  const handleAdviceChange = () => {
    setAdvice(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  const adviceElement = () => {
    if (
      (english && typeof advice?.quote_en === "undefined") ||
      typeof advice?.quote_en === "undefined" ||
      typeof advice?.quote_es === "undefined" ||
      (!english && typeof advice?.quote_es === "undefined") ||
      advice?.quote_en === "" ||
      advice?.quote_es === ""
    ) {
      return <span>Not translated yet :(</span>;
    }

    if (
      (english && advice?.quote_en.length > 280) ||
      (english && advice?.quote_es.length > 280)
    ) {
      return (
        <span style={{ fontSize: "18px" }}>
          {english ? advice.quote_en : advice.quote_es}
        </span>
      );
    }

    if (
      (english && advice?.quote_en.length > 160) ||
      (english && advice?.quote_es.length > 160)
    ) {
      return (
        <span style={{ fontSize: "20px" }}>
          {english ? advice.quote_en : advice.quote_es}
        </span>
      );
    }

    return (
      <span>{advice && `${english ? advice.quote_en : advice.quote_es}`}</span>
    );
  };

  return (
    <div
      className={
        dark ? style.advicegenerator : `${style.advicegenerator} ${style.light}`
      }
    >
      <main>
        <h4>
          {english ? "ADVICE" : "CONSEJO"} #{advice?.id}
        </h4>
        <p>{adviceElement()}</p>
        <img src={pattern_divider_desktop} alt="pattern divider" />
        <CustomButton
          randomBackground={random_rgb()}
          onClick={handleAdviceChange}
        >
          <img src={icon_dice} alt="dice" />
        </CustomButton>
      </main>
    </div>
  );
};
export default AdviceGenerator;
