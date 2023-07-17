import style from "./resultsummary.module.scss";
import { useState } from "react";
import memory from "./assets/images/icon-memory.svg";
import reaction from "./assets/images/icon-reaction.svg";
import verbal from "./assets/images/icon-verbal.svg";
import visual from "./assets/images/icon-visual.svg";
import { useOutletContext } from "react-router-dom";
import type { fem_outlets } from "../../main";

type scores = { category: string; score: number }[];

const create_random_score = () => {
  const newScore: scores = [
    {
      category: "Reaction",
      score: Math.floor(Math.random() * 100),
    },
    {
      category: "Memory",
      score: Math.floor(Math.random() * 100),
    },
    {
      category: "Verbal",
      score: Math.floor(Math.random() * 100),
    },
    {
      category: "Visual",
      score: Math.floor(Math.random() * 100),
    },
  ];
  return newScore;
};

const ResultSummary = () => {
  const [score, setScore] = useState<scores>(create_random_score());
  const { dark, english }: fem_outlets = useOutletContext();

  const totalScore = Math.floor(
    (score[0].score + score[1].score + score[2].score + score[3].score) / 4
  );

  const score_message = () => {
    if (totalScore < 30) return <p>Bad</p>;
    if (totalScore >= 30 && totalScore < 50) return <span>Mhhm</span>;
    if (totalScore >= 50 && totalScore < 70) return <span>Average</span>;
    if (totalScore >= 70 && totalScore < 90) return <span>Good</span>;
    if (totalScore >= 90 && totalScore <= 100) return <span>Excellent</span>;
  };

  const calc = (number: number) => {
    const average = 35;

    return Math.floor((number / average / 7) * 100);
  };

  return (
    <div
      className={
        dark ? style.resultssummary : `${style.resultssummary} ${style.light}`
      }
    >
      <main>
        <div className={style.general}>
          <p>{english ? "Your Result" : "Tu Resultado"}</p>
          <span className={style.total__score}>
            <b>{totalScore}</b>
            <p>{english ? "of 100" : "de 100"} </p>
          </span>
          <p>{score_message()}</p>
          <p className={style.details}>
            {english
              ? `You scored higher than ${calc(
                  totalScore
                )}% of the people who have taken these tests.`
              : `Has conseguido una puntuación mayor al ${calc(
                  totalScore
                )}% de la gente que ha tomado este examen`}
          </p>
        </div>
        <div className={style.summary}>
          <h3>{english ? "Summary" : "Sumario"}</h3>
          <div className={style.reaction}>
            <div>
              <img src={reaction} />
              <p>{english ? "Reaction" : "Reacción"}</p>
            </div>
            <div>
              <p>
                <b>{score[0].score}</b>/100
              </p>
            </div>
          </div>
          <div className={style.memory}>
            <div>
              <img src={memory} />
              <p>{english ? "Memory" : "Memoria"}</p>
            </div>
            <div>
              <p>
                <b>{score[1].score}</b>/100
              </p>
            </div>
          </div>
          <div className={style.verbal}>
            <div>
              <img src={verbal} />
              <p>{english ? "Verbal" : "Hablado"}</p>
            </div>
            <div>
              <p>
                <b>{score[2].score}</b>/100
              </p>
            </div>
          </div>
          <div className={style.visual}>
            <div>
              <img src={visual} />
              <p>Visual</p>
            </div>
            <div>
              <p>
                <b>{score[3].score}</b>/100
              </p>
            </div>
          </div>
          <button onClick={() => setScore(create_random_score())}>
            {english ? "Continue" : "Continuar"}
          </button>
        </div>
      </main>
    </div>
  );
};

export default ResultSummary;
