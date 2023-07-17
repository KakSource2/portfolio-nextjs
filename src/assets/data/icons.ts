import sun from "../images/icons/sun.png";
import moon from "../images/icons/moon.png";
import argentina from "../images/icons/argentina.png";
import united_states from "../images/icons/united-states.png";
import linkedin from "../images/icons/linkedin.png";
import twitter from "../images/icons/twitter.png";
import youtube from "../images/icons/youtube.png";
import facebook from "../images/icons/facebook.png";
import instagram from "../images/icons/instagram.png";
import instagram_2 from "../images/icons/instagram-2.png";
import css_3 from "../images/icons/css-3.png";
import javascript from "../images/icons/js.png";
import typescript from "../images/icons/typescript.png";
import nodejs from "../images/icons/nodejs.png";
import react from "../images/icons/physics.png";
import treasure from "../images/icons/treasure.png";
import visible from "../images/icons/visible.png";
import windy from "../images/icons/windy.png";
import windy_2 from "../images/icons/windy-2.png";
import time_left from "../images/icons/time-left.png";
import shield from "../images/icons/shield.png";
import rain from "../images/icons/rain.png";
import rain_2 from "../images/icons/rain-2.png";
import question from "../images/icons/question.png";
import play from "../images/icons/play-button-arrowhead.png";
import pause from "../images/icons/pause.png";
import moon_2 from "../images/icons/moon-2.png";
import moon_3 from "../images/icons/moon-3.png";
import menu from "../images/icons/menu.png";
import menu_2 from "../images/icons/menu-2.png";
import menu_3 from "../images/icons/menu-3.png";
import level from "../images/icons/level.png";
import level_2 from "../images/icons/level-2.png";
import html5 from "../images/icons/html-5.png";
import gmail from "../images/icons/gmail.png";
import github from "../images/icons/github.png";
import email from "../images/icons/email.png";
import forward from "../images/icons/forward-button.png";
import down_arrow from "../images/icons/down-arrow.png";
import down_arrow_2 from "../images/icons/down-arrow-2.png";
import down_arrow_red from "../images/icons/down-arrow-red.png";
import diskette from "../images/icons/diskette.png";
import direct_download from "../images/icons/direct-download.png";
import dice from "../images/icons/dice.png";
import curiosity from "../images/icons/curiosity.png";
import confused from "../images/icons/confused.png";
import coin from "../images/icons/coin.png";
import close from "../images/icons/close.png";
import check from "../images/icons/check.png";
import broom from "../images/icons/broom.png";
import arrowheads_left from "../images/icons/arrowheads-of-thin-outline-to-the-left.png";
import acid_rain from "../images/icons/acid-rain.png";
import campfire from "../images/icons/campfire.png";
import front_end_mentor from "../images/icons/favicon-32x32.png";

import { StaticImageData } from "next/image";

type imageProps = {
  alt_en: string;
  alt_es: string;
  icon: StaticImageData;
};

type extraIcon = {
  icon_2: StaticImageData;
};
type extraExtraIcon = {
  icon_2: StaticImageData;
  icon_3: StaticImageData;
};

type imagesProps = {
  dark_mode: {
    sun: imageProps;
    moon: imageProps & extraExtraIcon;
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
    instagram: imageProps & extraIcon;
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
    down_arrow: imageProps & extraExtraIcon;
    menu: imageProps & extraExtraIcon;
    curiosity: imageProps;
  };
  game: {
    treasure: imageProps;
    shield: imageProps;
    level: imageProps & extraIcon;
    dice: imageProps;
    coin: imageProps;
    campfire: imageProps;
  };
  weather: {
    windy: imageProps & extraIcon;
    rain: imageProps & extraIcon;
    acid_rain: imageProps;
  };
  player: {
    play: imageProps;
    pause: imageProps;
    forward: imageProps;
  };
  projects: {
    front_end_mentor: imageProps;
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
    campfire: {
      alt_en:
        "Icon from the superset of JavaScript thats made for type-safety: TypeScript ",
      alt_es: "Ícono de la red social Facebook",
      icon: campfire,
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
  projects: {
    front_end_mentor: {
      alt_en:
        "Icon from the superset of JavaScript thats made for type-safety: TypeScript ",
      alt_es: "Ícono de la red social Facebook",
      icon: front_end_mentor,
    },
  },
};

export { icons };
