import style from "./portfolio.module.scss";
import Main from "./components/Main/Main";
import Projects from "./components/Projects/Projects";

const Portfolio = () => {
  return (
    <div className={style.portfolio}>
      <Main />
      <Projects />
    </div>
  );
};
export default Portfolio;
