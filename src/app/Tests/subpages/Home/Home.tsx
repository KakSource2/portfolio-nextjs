import { Link } from "react-router-dom";
import style from "./home.module.scss";

const tests = [
  { name: "Search Bar", link: "search-bar" },
  { name: "Test", link: "test" },
  { name: "Material UI", link: "material-ui" },
];

const Home = () => {
  return (
    <div className={style.home}>
      {tests.map((item) => (
        <Link to={item.link}>{item.name}</Link>
      ))}
    </div>
  );
};
export default Home;
