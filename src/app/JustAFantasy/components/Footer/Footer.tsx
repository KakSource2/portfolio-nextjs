import { Outlets } from "../../../../assets/always_types";

const Footer = ({ english, dark }: Outlets) => {
  return (
    <div className={dark ? "" : ""}>{english ? "Footer" : "Pie de página"}</div>
  );
};
export default Footer;
