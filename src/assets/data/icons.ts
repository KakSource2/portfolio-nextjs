import sun from "../icons/sun.png";
import moon from "../icons/moon.png";
import argentina from "../icons/argentina.png";
import united_states from "../icons/united-states.png";
import linkedin from "../icons/linkedin.png";
import twitter from "../icons/twitter.png";
import youtube from "../icons/youtube.png";
import facebook from "../icons/facebook.png";
import instagram from "../icons/instagram.png";
import instagram_2 from "../icons/instagram-2.png";
import css_3 from "../icons/css-3.png";
import javascript from "../icons/js.png";
import typescript from "../icons/typescript.png";
import nodejs from "../icons/nodejs.png";
import react from "../icons/physics.png";
import treasure from "../icons/treasure.png";
import visible from "../icons/visible.png";
import windy from "../icons/windy.png";
import windy_2 from "../icons/windy-2.png";
import time_left from "../icons/time-left.png";
import shield from "../icons/shield.png";
import rain from "../icons/rain.png";
import rain_2 from "../icons/rain-2.png";
import question from "../icons/question.png";
import play from "../icons/play-button-arrowhead.png";
import pause from "../icons/pause.png";
import moon_2 from "../icons/moon-2.png";
import moon_3 from "../icons/moon-3.png";
import menu from "../icons/menu.png";
import menu_2 from "../icons/menu-2.png";
import menu_3 from "../icons/menu-3.png";
import level from "../icons/level.png";
import level_2 from "../icons/level-2.png";
import html5 from "../icons/html-5.png";
import gmail from "../icons/gmail.png";
import github from "../icons/github.png";
import email from "../icons/email.png";
import forward from "../icons/forward-button.png";
import down_arrow from "../icons/down-arrow.png";
import down_arrow_2 from "../icons/down-arrow-2.png";
import down_arrow_red from "../icons/down-arrow-red.png";
import diskette from "../icons/diskette.png";
import direct_download from "../icons/direct-download.png";
import dice from "../icons/dice.png";
import curiosity from "../icons/curiosity.png";
import confused from "../icons/confused.png";
import coin from "../icons/coin.png";
import close from "../icons/close.png";
import check from "../icons/check.png";
import broom from "../icons/broom.png";
import arrowheads_left from "../icons/arrowheads-of-thin-outline-to-the-left.png";
import acid_rain from "../icons/acid-rain.png";

import { StaticImageData } from "next/image";

type imageProps = {
  alt_en: string;
  alt_es: string;
  icon: StaticImageData;
  icon_2?: StaticImageData;
  icon_3?: StaticImageData;
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
    twitter: imageProps;
    youtube: imageProps;
    facebook: imageProps;
    instagram: imageProps;
    gmail: imageProps;
    github: imageProps;
    email: imageProps;
  };
  skills: {
    html5: imageProps;
    css_3: imageProps;
    react: imageProps;
    javascript: imageProps;
    node_js: imageProps;
    typescript: imageProps;
  };
  interface: {
    question: imageProps;
    diskette: imageProps;
    confused: imageProps;
    check: imageProps;
    broom: imageProps;
    arrow_left: imageProps;
    time_left: imageProps;
    direct_download: imageProps;
    close: imageProps;
    visible: imageProps;
    down_arrow: imageProps;
    menu: imageProps;
    curiosity: imageProps;
  };
  game: {
    treasure: imageProps;
    shield: imageProps;
    level: imageProps;
    dice: imageProps;
    coin: imageProps;
  };
  weather: { windy: imageProps; rain: imageProps; acid_rain: imageProps };
  player: {
    play: imageProps;
    pause: imageProps;
    forward: imageProps;
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
      icon_2: moon_2,
      icon_3: moon_3,
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
    twitter: {
      alt_en: "Icon from the social media Twitter",
      alt_es: "Ícono de la red social Twitter",
      icon: twitter,
    },
    youtube: {
      alt_en: "Icon from the social media Youtube",
      alt_es: "Ícono de la red social Youtube",
      icon: youtube,
    },
    facebook: {
      alt_en: "Icon from the social media Facebook",
      alt_es: "Ícono de la red social Facebook",
      icon: facebook,
    },
    instagram: {
      alt_en: "Icon from the social media Instagram",
      alt_es: "Ícono de la red social Instagram",
      icon: instagram,
      icon_2: instagram_2,
    },
    gmail: {
      alt_en: "Icon from the social media Instagram",
      alt_es: "Ícono de la red social Instagram",
      icon: gmail,
    },
    github: {
      alt_en: "Icon from the social media Instagram",
      alt_es: "Ícono de la red social Instagram",
      icon: github,
    },
    email: {
      alt_en: "Icon from the social media Instagram",
      alt_es: "Ícono de la red social Instagram",
      icon: email,
    },
  },
  skills: {
    html5: {
      alt_en: "Icon from the stylesheet language CSS3",
      alt_es: "Ícono de la red social Facebook",
      icon: html5,
    },
    css_3: {
      alt_en: "Icon from the stylesheet language CSS3",
      alt_es: "Ícono de la red social Facebook",
      icon: css_3,
    },
    react: {
      alt_en: "Icon from the framework React",
      alt_es: "Ícono de la red social Facebook",
      icon: react,
    },
    javascript: {
      alt_en: "Icon from the language used in this app, JavaScript",
      alt_es: "Ícono de la red social Facebook",
      icon: javascript,
    },
    node_js: {
      alt_en: "Icon from the Javascript runtime Node.JS",
      alt_es: "Ícono de la red social Facebook",
      icon: nodejs,
    },
    typescript: {
      alt_en:
        "Icon from the superset of JavaScript thats made for type-safety: TypeScript ",
      alt_es: "Ícono de la red social Facebook",
      icon: typescript,
    },
  },
  interface: {
    question: {
      alt_en:
        "Icon from the superset of JavaScript thats made for type-safety: TypeScript ",
      alt_es: "Ícono de la red social Facebook",
      icon: question,
    },
    diskette: {
      alt_en:
        "Icon from the superset of JavaScript thats made for type-safety: TypeScript ",
      alt_es: "Ícono de la red social Facebook",
      icon: diskette,
    },
    confused: {
      alt_en:
        "Icon from the superset of JavaScript thats made for type-safety: TypeScript ",
      alt_es: "Ícono de la red social Facebook",
      icon: confused,
    },
    check: {
      alt_en:
        "Icon from the superset of JavaScript thats made for type-safety: TypeScript ",
      alt_es: "Ícono de la red social Facebook",
      icon: check,
    },
    broom: {
      alt_en:
        "Icon from the superset of JavaScript thats made for type-safety: TypeScript ",
      alt_es: "Ícono de la red social Facebook",
      icon: broom,
    },
    arrow_left: {
      alt_en:
        "Icon from the superset of JavaScript thats made for type-safety: TypeScript ",
      alt_es: "Ícono de la red social Facebook",
      icon: arrowheads_left,
    },
    time_left: {
      alt_en:
        "Icon from the superset of JavaScript thats made for type-safety: TypeScript ",
      alt_es: "Ícono de la red social Facebook",
      icon: time_left,
    },
    direct_download: {
      alt_en:
        "Icon from the superset of JavaScript thats made for type-safety: TypeScript ",
      alt_es: "Ícono de la red social Facebook",
      icon: direct_download,
    },
    close: {
      alt_en:
        "Icon from the superset of JavaScript thats made for type-safety: TypeScript ",
      alt_es: "Ícono de la red social Facebook",
      icon: close,
    },
    visible: {
      alt_en:
        "Icon from the superset of JavaScript thats made for type-safety: TypeScript ",
      alt_es: "Ícono de la red social Facebook",
      icon: visible,
    },
    down_arrow: {
      alt_en:
        "Icon from the superset of JavaScript thats made for type-safety: TypeScript ",
      alt_es: "Ícono de la red social Facebook",
      icon: down_arrow,
      icon_2: down_arrow_2,
      icon_3: down_arrow_red,
    },
    menu: {
      alt_en:
        "Icon from the superset of JavaScript thats made for type-safety: TypeScript",
      alt_es: "Ícono de la red social Facebook",
      icon: menu,
      icon_2: menu_2,
      icon_3: menu_3,
    },
    curiosity: {
      alt_en:
        "Icon from the superset of JavaScript thats made for type-safety: TypeScript ",
      alt_es: "Ícono de la red social Facebook",
      icon: curiosity,
    },
  },
  game: {
    treasure: {
      alt_en:
        "Icon from the superset of JavaScript thats made for type-safety: TypeScript ",
      alt_es: "Ícono de la red social Facebook",
      icon: treasure,
    },
    shield: {
      alt_en:
        "Icon from the superset of JavaScript thats made for type-safety: TypeScript ",
      alt_es: "Ícono de la red social Facebook",
      icon: shield,
    },
    level: {
      alt_en:
        "Icon from the superset of JavaScript thats made for type-safety: TypeScript ",
      alt_es: "Ícono de la red social Facebook",
      icon: level,
      icon_2: level_2,
    },

    dice: {
      alt_en:
        "Icon from the superset of JavaScript thats made for type-safety: TypeScript ",
      alt_es: "Ícono de la red social Facebook",
      icon: dice,
    },
    coin: {
      alt_en:
        "Icon from the superset of JavaScript thats made for type-safety: TypeScript ",
      alt_es: "Ícono de la red social Facebook",
      icon: coin,
    },
  },
  weather: {
    windy: {
      alt_en:
        "Icon from the superset of JavaScript thats made for type-safety: TypeScript ",
      alt_es: "Ícono de la red social Facebook",
      icon: windy,
      icon_2: windy_2,
    },

    rain: {
      alt_en:
        "Icon from the superset of JavaScript thats made for type-safety: TypeScript ",
      alt_es: "Ícono de la red social Facebook",
      icon: rain,
      icon_2: rain_2,
    },
    acid_rain: {
      alt_en:
        "Icon from the superset of JavaScript thats made for type-safety: TypeScript ",
      alt_es: "Ícono de la red social Facebook",
      icon: acid_rain,
    },
  },
  player: {
    play: {
      alt_en:
        "Icon from the superset of JavaScript thats made for type-safety: TypeScript ",
      alt_es: "Ícono de la red social Facebook",
      icon: play,
    },
    pause: {
      alt_en:
        "Icon from the superset of JavaScript thats made for type-safety: TypeScript ",
      alt_es: "Ícono de la red social Facebook",
      icon: pause,
    },
    forward: {
      alt_en:
        "Icon from the superset of JavaScript thats made for type-safety: TypeScript ",
      alt_es: "Ícono de la red social Facebook",
      icon: forward,
    },
  },
};

export { icons };
