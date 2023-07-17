import style from "./navbar.module.scss";
// import icon_arrow_dark from "../images/icons/icon-arrow-dark.svg";
import icon_arrow_light from "../images/icons/icon-arrow-light.svg";
import background_pattern_intro from "../images/backgrounds/bg-pattern-intro-desktop.svg";
const Navbar = () => {
  return (
    <div
      style={{
        backgroundImage: `url("${background_pattern_intro}")`,
        backgroundSize: "150%",
        backgroundPosition: "left",
      }}
      className={style.navbar}
    >
      <div>
        <p className={style.logo}>Blogr</p>
        <ul>
          <li>
            Products <img src={icon_arrow_light} />
          </li>
          <li>
            Company <img src={icon_arrow_light} />
          </li>
          <li>
            Connect <img src={icon_arrow_light} />
          </li>
        </ul>
        <div>
          <button>Login</button>
          <button>Sign up</button>
        </div>
      </div>

      <main>
        <h1>A modern publish platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div>
          <button>Start for Free</button>
          <button>Learn More</button>
        </div>
      </main>
    </div>
  );
};
export default Navbar;
