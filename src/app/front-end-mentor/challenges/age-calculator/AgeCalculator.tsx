import style from "./agecalculator.module.scss";
import icon_arrow from "./assets/images/icon-arrow.svg";
import { useState } from "react";

const AgeCalculator = () => {
  const [day, setDay] = useState(0);
  const [months, setMonths] = useState(0);
  const [years, setYears] = useState(0);

  const handleInputs = (
    e: React.ChangeEvent<HTMLInputElement>,
    which: string
  ) => {
    if (which === "day") {
      setDay(parseInt(e.target.value));
    }
    if (which === "month") {
      setMonths(parseInt(e.target.value));
    }
    if (which === "years") {
      setYears(parseInt(e.target.value));
    }
  };

  return (
    <div className={style.agecalculator}>
      <main>
        <div className={style.inputs}>
          <div>
            <p>DAY</p>
            <input
              onChange={(e) => handleInputs(e, "day")}
              placeholder="DD"
              type="number"
            />
          </div>
          <div>
            <p>MONTH</p>
            <input
              onChange={(e) => handleInputs(e, "month")}
              placeholder="MM"
              type="number"
            />
          </div>
          <div>
            <p>YEAR</p>
            <input
              onChange={(e) => handleInputs(e, "years")}
              placeholder="YYYY"
              type="number"
            />
          </div>
          <button>
            <img src={icon_arrow} />
          </button>
        </div>
        <div className={style.display}>
          <p>
            <span>{day}</span> years
          </p>
          <p>
            <span>{months}</span> months
          </p>
          <p>
            <span>{years}</span> days
          </p>
        </div>
      </main>
    </div>
  );
};
export default AgeCalculator;
