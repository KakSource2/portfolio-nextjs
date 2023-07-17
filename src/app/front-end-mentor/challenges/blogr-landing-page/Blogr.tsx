import style from "./blogr.module.scss";
import Navbar from "./components/Navbar";
const Blogr = () => {
  return (
    <div className={style.blogr}>
      <Navbar />
    </div>
  );
};
export default Blogr;
