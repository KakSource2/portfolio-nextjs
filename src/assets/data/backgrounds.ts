import { StaticImageData } from "next/image";
import hailing from "../images/backgrounds/hailing.jpg";
import hailing_2 from "../images/backgrounds/North-Farm-stone-circle-hailing5.jpg";
import cloudy from "../images/backgrounds/blue_sky_with_big_white_cloud.png";
import cloudy_night_fullmoon from "../images/backgrounds/darkmoon.jpg";
import space from "../images/backgrounds/colors-1648345088088-3481.jpg";
import space_2 from "../images/backgrounds/login-night.jpg";
import space_3 from "../images/backgrounds/night-stars.jpg";
import space_4 from "../images/backgrounds/space-1657112974035-8898.jpg";
import thunderstorm from "../images/backgrounds/weather-1.jpg";
import raining from "../images/backgrounds/WallpaperDog-427768.jpg";
import raining_2 from "../images/backgrounds/WallpaperDog-17201349.jpg";
import paperwork from "../images/backgrounds/scott-graham-OQMZwNd3ThU-unsplash.jpg";
import paperwork_2 from "../images/backgrounds/stil-vdaJJbls3xE-unsplash.jpg";
import dollars from "../images/backgrounds/dollars.jpg";
import dollar_burning from "../images/backgrounds/jp-valery-blOLCO2K4M0-unsplash.jpg";
import coffe from "../images/backgrounds/taza-cafe.jpg";
import nuclear_explosion from "../images/backgrounds/Explosion_Nuclear.jpg";
import fallout from "../images/backgrounds/Fallout_by_TheNonSequitur.jpg";
import tabla_esmeralda from "../images/backgrounds/Fotothek_df_tg_0006097_Theosophie_^_Alchemie.jpg";
import camo from "../images/backgrounds/iblO1aG.jpg";
import water_droplet_waves from "../images/backgrounds/iStock_000003479403Large.jpg";
import construction_site from "../images/backgrounds/josue-isai-ramos-figueroa-qvBYnMuNJ9A-unsplash.jpg";
import bonfire from "../images/backgrounds/login-day.jpg";
import fantasy from "../images/backgrounds/magical place.jpg";
import mountains from "../images/backgrounds/magical-place-18.jpg";
import lake from "../images/backgrounds/magical-places-lake-louise-alberta.jpg";
import industry from "../images/backgrounds/patrick-hendry-MQ6KtSsfgIc-unsplash.jpg";
import forest from "../images/backgrounds/sebastian-unrau-sp-p7uuT0tw-unsplash.jpg";
import synthwave from "../images/backgrounds/synthwave.png";

type backgroundProps = {
  description: string;
  alt_en: string;
  alt_es: string;
  background: StaticImageData;
};

type backgroundsProps = {
  space: backgroundProps[];
  weather: {
    hailing: backgroundProps[];
    cloudy: backgroundProps[];
    thunderstorm: backgroundProps[];
    rain: backgroundProps[];
  };
  work: backgroundProps[];
  crypto: backgroundProps[];
};

const backgrounds: backgroundsProps = {
  space: [
    {
      description: "",
      alt_en: "",
      alt_es: "",
      background: space,
    },
    {
      description: "",
      alt_en: "",
      alt_es: "",
      background: space_2,
    },
    {
      description: "",
      alt_en: "",
      alt_es: "",
      background: space_3,
    },
    {
      description: "",
      alt_en: "",
      alt_es: "",
      background: space_4,
    },
  ],
  weather: {
    hailing: [
      {
        description: "",
        alt_en: "",
        alt_es: "",
        background: hailing,
      },
      {
        description: "",
        alt_en: "",
        alt_es: "",
        background: hailing_2,
      },
    ],
    cloudy: [
      {
        description: "",
        alt_en: "",
        alt_es: "",
        background: cloudy,
      },
      {
        description: "",
        alt_en: "",
        alt_es: "",
        background: cloudy_night_fullmoon,
      },
    ],
    thunderstorm: [
      {
        description: "",
        alt_en: "",
        alt_es: "",
        background: thunderstorm,
      },
    ],
    rain: [
      {
        description: "",
        alt_en: "",
        alt_es: "",
        background: raining,
      },
      {
        description: "",
        alt_en: "",
        alt_es: "",
        background: raining_2,
      },
    ],
  },
  work: [
    {
      description: "",
      alt_en: "",
      alt_es: "",
      background: paperwork,
    },
    {
      description: "",
      alt_en: "",
      alt_es: "",
      background: paperwork_2,
    },
    {
      description: "",
      alt_en: "",
      alt_es: "",
      background: coffe,
    },
  ],
  crypto: [
    {
      description: "",
      alt_en: "",
      alt_es: "",
      background: dollars,
    },
    {
      description: "",
      alt_en: "",
      alt_es: "",
      background: dollar_burning,
    },
  ],
};
