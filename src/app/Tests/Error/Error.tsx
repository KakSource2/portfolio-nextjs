import { useRouteError } from "react-router-dom";
import "./error.css";

type styles = {
  name: string;
  style: {
    color: string;
    backgroundColor: string;
  };
};

const color_random = () =>
  `rgba(${random_255()}, ${random_255()}, ${random_255()})`;
const backgroundColor_with_half_opacity = () =>
  `rgba(${random_255()}, ${random_255()}, ${random_255()},  ${
    random_opacity() / 2
  })`;

const randomStyle = () => {
  let style = {
    backgroundColor: backgroundColor_with_half_opacity(),
    color: color_random(),
  };
  return style;
};

const styles = [
  {
    name: "404",
    style: randomStyle(),
  },
  { name: "400000000000000000004", style: randomStyle() },
  { name: "?", style: randomStyle() },
];

const random_255 = () => Math.floor(Math.random() * 256);
const random_opacity = () => Math.random() * 1;

const Error = () => {
  let error = useRouteError();
  console.log(error);

  return (
    <div
      className="Error"
      style={styles[Math.floor(Math.random() * styles.length)].style}
    >
      <main>
        <h1>{styles[Math.floor(Math.random() * styles.length)].name}</h1>
        <p>There was an error with the page you were looking for</p>
      </main>
    </div>
  );
};
export default Error;
