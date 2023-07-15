import sun from "../icons/sun.png";
import moon from "../icons/moon.png";
import argentina from "../icons/argentina.png";
import united_states from "../icons/united-states.png";
import linkedin from "../icons/linkedin.png";
import { StaticImageData } from "next/image";

type imageProps = {
  alt_en: string;
  alt_es: string;
  icon: StaticImageData;
};

type imagesProps = {
  dark_mode: {
    sun: imageProps;
    moon: imageProps;
  };
  flags: {
    united_states: imageProps;
    argentina: imageProps;
  };
  social_media: {
    linkedIn: imageProps;
  };
};

const icons: imagesProps = {
  dark_mode: {
    sun: {
      alt_en: "Icon of a Sun",
      alt_es: "Ícono del Sol",
      icon: sun,
    },
    moon: {
      alt_en: "Icon of a Sun",
      alt_es: "Ícono de la Luna",
      icon: moon,
    },
  },
  flags: {
    argentina: {
      alt_en: "Icon of a flag from Argentina",
      alt_es: "Ícono de la bandera de Argentina",
      icon: argentina,
    },
    united_states: {
      alt_en: "Icon of a flag from United States",
      alt_es: "Ícono de la bandera de Estados Unidos",
      icon: united_states,
    },
  },
  social_media: {
    linkedIn: {
      alt_en: "Icon from the social media LinkedIn",
      alt_es: "Ícono de la red social LinkedIn",
      icon: linkedin,
    },
  },
};

export { icons };
