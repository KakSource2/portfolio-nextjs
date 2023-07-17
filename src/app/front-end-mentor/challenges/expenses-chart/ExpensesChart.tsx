import styled from "styled-components";
import logo from "./assets/logo.svg";
import style from "./expenseschart.module.scss";
import { fem_outlets } from "../../main";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import {
  randomNumberBetween,
  randomNumberBetweenWithFloat,
} from "../../../../assets/kakland";

const DivColours = styled.div<{ percent: string }>`
  display: grid;
  width: 100%;

  background: linear-gradient(
    0deg,
    #ff0000 ${(props) => props.percent},
    #ffffff ${(props) => props.percent}
  );
`;

type user = {
  balance: number;
  spendings: number;
  lastMonthPercent: number;
};

const ExpensesChart = () => {
  const { english }: fem_outlets = useOutletContext();
  const [user, setUser] = useState<user>({
    balance: 0,
    spendings: 0,
    lastMonthPercent: 0,
  });

  const randomize = () => {
    setUser({
      balance: randomNumberBetween(50000),
      spendings: randomNumberBetween(5000),
      lastMonthPercent: randomNumberBetweenWithFloat(24),
    });
  };

  const data = [
    {
      id: 0,
      name: english ? "Sunday" : "Domingo",
      percent: `${randomNumberBetween(100)}%`,
    },
    {
      id: 1,
      name: english ? "Monday" : "Lunes",
      percent: `${randomNumberBetween(100)}%`,
    },
    {
      id: 2,
      name: english ? "Tuesday" : "Martes",
      percent: `${randomNumberBetween(100)}%`,
    },
    {
      id: 3,
      name: english ? "Wednesday" : "Miércoles",
      percent: `${randomNumberBetween(100)}%`,
    },
    {
      id: 4,
      name: english ? "Thursday" : "Jueves",
      percent: `${randomNumberBetween(100)}%`,
    },
    {
      id: 5,
      name: english ? "Friday" : "Viernes",
      percent: `${randomNumberBetween(100)}%`,
    },
    {
      id: 6,
      name: english ? "Saturday" : "Sábado",
      percent: `${randomNumberBetween(100)}%`,
    },
  ];

  return (
    <div className={style.expenseschart}>
      <button onClick={() => randomize()}>
        {english ? "Change" : "Cambiar"}
      </button>
      <main>
        <div className={style.balance}>
          <div>
            <p>{english ? "My balance" : "Mi balance"}</p>
            <span>${user.balance}</span>
          </div>
          <img src={logo} />
        </div>
        <div className={style.container}>
          <div className={style.spendings}>
            <h2>
              {english ? "Spending - Last 7 days" : "Gastos - Últimos 7 días"}
            </h2>
            <div>
              {data.map((item) => (
                <span key={item.id}>
                  <DivColours percent={item.percent}></DivColours>
                  <p>{item.name.substring(0, 3)}</p>
                </span>
              ))}
            </div>
          </div>
          <div className={style.last}>
            <div className={style.price}>
              <p>Total this month:</p>
              <span>{user.spendings}$</span>
            </div>
            <div className={style.discount}>
              <span>{user.lastMonthPercent.toString().substring(0, 4)}%</span>
              <span>from last month</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default ExpensesChart;
