import { useOutletContext } from "react-router-dom";
import style from "./interactiverating.module.scss";
import icon_check from "./assets/icon-check.svg";
import pattern_circles from "./assets/pattern-circles.svg";
import { Slider, Switch } from "@mui/material";

const InteractivePricing = () => {
  const { dark, english }: { dark: boolean; english: boolean } =
    useOutletContext();
  // const [stats, setStats] = useState({ pageviews: 0, dollarsAMonth: 16 });

  return (
    <div
      className={
        dark
          ? style.interactivepricing
          : `${style.interactivepricing} ${style.light}`
      }
    >
      <div className={style.title}>
        <h2>
          {english
            ? "Simple, traffic-based pricing"
            : "Simple, precio en base al tráfico"}
        </h2>
        <p>Sign-up for our 30-day trial. No credit card required.</p>
        <img src={pattern_circles} />
      </div>
      <main>
        <div className={style.pageviews}>
          <p>{english ? "PAGEVIEWS" : "VISTA"}</p>{" "}
          <span>
            $1500 <p>/month</p>
          </span>
        </div>
        <Slider
          sx={{
            color: "cyan",
            "& .MuiSlider-thumb": {
              color: "#1f9d84",
              width: 30,
              height: 30,
              boxShadow: "0 0.125rem 2rem 0.125rem cyan",
            },
          }}
          aria-label="monthly"
          defaultValue={2}
          min={1}
          max={3}
        />
        <div className={style.monthly_billing}>
          <p>Monthly billing</p>
          <Switch color="primary" size="small" /> <p>Yearly Billing</p>
          <p>25% discount</p>
        </div>
        <div className={style.advertisement}>
          <div>
            <p>
              <img src={icon_check} /> Unlimited websites
            </p>
            <p>
              <img src={icon_check} /> 100% data ownership
            </p>
            <p>
              <img src={icon_check} /> Email reports
            </p>
          </div>
          <button>Start my trial</button>
        </div>
      </main>
    </div>
  );
};
export default InteractivePricing;
