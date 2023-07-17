import { StaticImageData } from "next/image";
import bushkraft from "../apps/bushkraft.jpg";
import free_code_camp from "../apps/freecodecamp.jpg";
import front_end_mentor from "../apps/frontendmentor.png";
import rick_and_morty from "../apps/rick-and-morty.jpg";
import them_paint from "../apps/thempaint.jpg";
import the_movies_database from "../apps/TMDB.png";
import confused from "../apps/test/confused.png";
import curiosity from "../apps/test/curiosity.png";
import question from "../apps/test/question.png";
import who from "../apps/test/who.png";
import why from "../apps/test/why.png";
import { randomNumberBetween } from "./random_numbers";
import fem__interactive_rating from "../images/apps/front-end-mentor/interactive-rating.png";
import fem__results_summary from "../images/apps/front-end-mentor/results-summary.png";
import fem__advice_generator from "../images/apps/front-end-mentor/Advice Generator.png";
import fem__article_preview from "../images/apps/front-end-mentor/Article Preview.png";
import fem__base_apparel_coming_soon from "../images/apps/front-end-mentor/BaseApparel - Coming Soon.png";
import fem__3_column_card from "../images/apps/front-end-mentor/3 column card.png";
import fem__product_preview from "../images/apps/front-end-mentor/ProductPreview.png";
import fem__age_calculator from "../images/apps/front-end-mentor/age calculator.png";
import fem__qr from "../images/apps/front-end-mentor/QR.png";
import fem__expenses_chart from "../images/apps/front-end-mentor/Expenses Chart.png";

type challenges = {
  id: number;
  name: { es: string; en: string };
  link: string;
  img?: StaticImageData;
  wip: boolean;
}[];

const fem_challenges: challenges = [
  {
    id: 1,
    name: { es: "Puntuación interactiva", en: "Interactive rating" },
    link: "/front-end-mentor/interactive-rating",
    img: fem__interactive_rating,
    wip: false,
  },
  {
    id: 2,
    name: { es: "Vista previa producto", en: "Product preview" },
    link: "/front-end-mentor/product-preview",
    wip: false,
    img: fem__product_preview,
  },
  {
    id: 3,
    name: { es: "Sumario resultado", en: "Result summary" },
    link: "/front-end-mentor/results-summary",
    img: fem__results_summary,
    wip: false,
  },
  {
    id: 4,
    name: { es: "Carta en columna de 3", en: "3 column card" },
    link: "/front-end-mentor/3-column-card",
    wip: false,
    img: fem__3_column_card,
  },
  {
    id: 5,
    name: { es: "Generador de consejos", en: "Advice generator" },
    link: "/front-end-mentor/advice-generator",
    wip: false,
    img: fem__advice_generator,
  },
  {
    id: 6,
    name: { es: "Calculador de edad", en: "Age calculator" },
    link: "/front-end-mentor/age-calculator",
    wip: false,
    img: fem__age_calculator,
  },
  {
    id: 7,
    name: { es: "Vista previa de artículo", en: "Article preview" },
    link: "/front-end-mentor/article-preview",
    wip: false,
    img: fem__article_preview,
  },
  {
    id: 9,
    name: {
      es: "BaseApparel - Vuelvo pronto",
      en: "BaseApparel - Coming Soon",
    },
    link: "/front-end-mentor/base-apparel-coming-soon",
    wip: false,
    img: fem__base_apparel_coming_soon,
  },
  {
    id: 10,
    name: { es: "Blogr", en: "Blogr" },
    link: "/front-end-mentor/blogr-landing-page",
    wip: true,
  },
  {
    id: 11,
    name: {
      es: "Coding Bootcamp Testimonios",
      en: "Coding Bootcamps Testimonials",
    },
    link: "/front-end-mentor/coding-bootcamp-testimonials",
    wip: true,
  },
  {
    id: 12,
    name: {
      es: "Producto de recaudación de fondos",
      en: "Crowfunding Products",
    },
    link: "/front-end-mentor/crowfunding-product",
    wip: true,
  },
  {
    id: 13,
    name: { es: "Cuadro de expensas", en: "Expenses chart" },
    link: "/front-end-mentor/expenses-chart",
    wip: false,
    img: fem__expenses_chart,
  },
  {
    id: 14,
    name: { es: "Acordión FAQ", en: "FAQ Accordion" },
    link: "/front-end-mentor/faq-accordion",
    wip: true,
  },
  {
    id: 15,
    name: { es: "Sección de cuatro cartas", en: "Four card feature section" },
    link: "/front-end-mentor/four-card-feature-section",
    wip: true,
  },
  {
    id: 16,
    name: {
      es: "Fylo Landing Page version oscura",
      en: "Fylo Dark Theme Landing Page",
    },
    link: "/front-end-mentor/fylo-dark-theme-landing-page",
    wip: true,
  },
  {
    id: 17,
    name: { es: "Fylo almacenamiento de datos", en: "Fylo Data Storage" },
    link: "/front-end-mentor/fylo-data-storage",
    wip: true,
  },
  {
    id: 18,
    name: {
      es: "Fylo landing page doble columna",
      en: "Fylo Landing Page 2 column",
    },
    link: "/front-end-mentor/fylo-landing-page-2-column",
    wip: true,
  },
  {
    id: 19,
    name: {
      es: "Huddle landing page alternativo",
      en: "Huddle Landing Page Alternative",
    },
    link: "/front-end-mentor/huddle-landing-page",
    wip: true,
  },
  {
    id: 20,
    name: {
      es: "Huddle Landing Page Curvado",
      en: "Huddle Landing Page Curved",
    },
    link: "/front-end-mentor/huddle-landing-page-single-introduction",
    wip: true,
  },
  {
    id: 21,
    name: {
      es: "Huddle Landing Page introducción única",
      en: "Huddle Landing Page Single Introduction",
    },
    link: "/front-end-mentor/insure-landing-page",
    wip: true,
  },
  {
    id: 22,
    name: { es: "Insure Landing Page", en: "Insure Landing Page" },
    link: "/front-end-mentor/article-preview",
    wip: true,
  },
  {
    id: 23,
    name: { es: "Carta interactiva", en: "Interactive Card" },
    link: "/front-end-mentor/interactive-card",
    wip: true,
  },
  {
    id: 24,
    name: { es: "Precios interactivos", en: "Interactive pricing" },
    link: "/front-end-mentor/interactive-pricing",
    wip: false,
  },
  {
    id: 25,
    name: {
      es: "Seccion introductoria con navegación",
      en: "Intro section dropdown nav",
    },
    link: "/front-end-mentor/article-preview",
    wip: true,
  },
  {
    id: 26,
    name: { es: "Formulario de registro", en: "Intro signup form" },
    link: "/front-end-mentor/article-preview",
    wip: true,
  },
  {
    id: 27,
    name: { es: "Loopstudio landing page", en: "Loopstudio landing page" },
    link: "/front-end-mentor/article-preview",
    wip: true,
  },
  {
    id: 28,
    name: { es: "Noticias", en: "News" },
    link: "/front-end-mentor/article-preview",
    wip: true,
  },
  {
    id: 29,
    name: { es: "", en: "Newsletter signup with success" },
    link: "/front-end-mentor/article-preview",
    wip: true,
  },
  {
    id: 30,
    name: { es: "Carta NFT", en: "NFT Card" },
    link: "/front-end-mentor/article-preview",
    wip: true,
  },
  {
    id: 31,
    name: { es: "Página de notificaciones", en: "Notifications page" },
    link: "/front-end-mentor/article-preview",
    wip: true,
  },
  {
    id: 32,
    name: { es: "Sumario ordenado", en: "Order summary" },
    link: "/front-end-mentor/article-preview",
    wip: true,
  },
  {
    id: 33,
    name: { es: "", en: "Ping Coming Soon" },
    link: "/front-end-mentor/article-preview",
    wip: true,
  },
  {
    id: 34,
    name: { es: "", en: "Pricing with toggle" },
    link: "/front-end-mentor/article-preview",
    wip: true,
  },
  {
    id: 35,
    name: { es: "Tarjeta perfil", en: "Profile card" },
    link: "/front-end-mentor/profile-card",
    wip: false,
  },
  {
    id: 36,
    name: { es: "", en: "Project tracking intro" },
    link: "/front-end-mentor/article-preview",
    wip: true,
  },
  {
    id: 37,
    name: { es: "QR", en: "QR" },
    link: "/front-end-mentor/qr",
    wip: false,
    img: fem__qr,
  },
  {
    id: 38,
    name: { es: "", en: "Single price grid" },
    link: "/front-end-mentor/article-preview",
    wip: true,
  },
  {
    id: 39,
    name: { es: "", en: "Social media dashboard" },
    link: "/front-end-mentor/article-preview",
    wip: true,
  },
  {
    id: 40,
    name: { es: "", en: "Social proof" },
    link: "/front-end-mentor/article-preview",
    wip: true,
  },
  {
    id: 41,
    name: { es: "", en: "Stats preview" },
    link: "/front-end-mentor/article-preview",
    wip: true,
  },
  {
    id: 42,
    name: { es: "", en: "Sunnyside agency" },
    link: "/front-end-mentor/article-preview",
    wip: true,
  },
  {
    id: 43,
    name: { es: "", en: "Testimonials grid" },
    link: "/front-end-mentor/article-preview",
    wip: true,
  },
  {
    id: 44,
    name: { es: "", en: "Time tracking" },
    link: "/front-end-mentor/article-preview",
    wip: true,
  },
  {
    id: 45,
    name: { es: "", en: "Tip calculator" },
    link: "/front-end-mentor/article-preview",
    wip: true,
  },
];

type appProps = {
  id: number;
  name: string;
  title_en: string;
  title_es: string;
  img: StaticImageData;
  alt_en: string;
  alt_es: string;
  link: string;
  projects?: challenges;
};

const test_names = [
  "tesTTT",
  "TEST",
  "(unknown: unknown) => test",
  "TESTeeeeeeeeeeee",
  "test OS",
  "WANTED",
  "<Test />",
  "<Going sentient {...howToKill} />",
];

const test_images = [confused, curiosity, question, who, why];

const randomTestName = () => {
  const r = randomNumberBetween(test_names.length);
  let name = test_names[r];
  while (typeof name === "undefined") {
    name = test_names[randomNumberBetween(test_names.length)];
  }
  return name;
};

const randomTestImage = () => {
  const r = randomNumberBetween(test_images.length);
  let image = test_images[r];
  while (typeof image === "undefined") {
    image = test_images[randomNumberBetween(test_images.length)];
  }
  return image;
};

const apps: appProps[] = [
  {
    id: 0,
    name: "Bushkraft",
    title_en:
      "This page is basically a rip-off of a page called selfrelianceoutfitters, i had the amazing idea that creating a simil-page to show off would be great, but ended up adding my own styles and adding some different items from different companies, now that I'm using Next.JS I will create an API endpoint to handle all the items for future purposes other than this page",
    title_es:
      "Esta página es basicamente una copia de una página llamada selfrelianceoutfitters, tuve la increible idea de que crear una página similar para mostrar estaría bien, pero terminé agregando mis propios estilos y un par de objetos de diferentes companías, ahora que estoy usando Next.JS voy a crear un API endpoint para manejar todos los items para futuros propósitos otro que esta página",
    img: bushkraft,
    alt_en: "A photo of a bonfire",
    alt_es: "Una foto de una fogata",
    link: "/bushkraft",
  },
  {
    id: 1,
    name: "FreeCodeCamp",
    title_en:
      "This app is meant to show off all the projects I make while i practice some programming concepts in FreeCodeCamp, now it's small because I try to concentrate in getting better at what I need to land a job",
    title_es:
      "Esta aplicación pretende mostrar todos los proyectos que voy creando a medida que voy practicando conceptos nuevos en FreeCodeCamp, ahora no tiene mucho contenido porque estoy concentrandome más en mejorar ciertos conceptos para conseguir un trabajo de programador",
    img: free_code_camp,
    alt_en: "",
    alt_es: "",
    link: "",
  },
  {
    id: 2,
    name: "Front End Mentor",
    title_en:
      "This app is to show off some of the projects suggested by the amazing page Front-End-Mentor, I try to finish them all but it really takes a lot of time and learning too, i'm still lack some experiencie so good theres good people on Youtube like WebDevSimplified and Kevin Prowell to help understand this concepts",
    title_es:
      "Esta aplicación es para mostrar la mayoría de los proyectos sugeridos la de la increible página Front End Mentor, intento finalizar todos y más que nada me concentro en estos, pero realmente lleva mucho tiempo y aprendizaje... Todavía me falta experiencia, lo bueno es que hay buena gente como WebDevSimplified o Kevin Prowell para ayudar a entender estos conceptos",
    img: front_end_mentor,
    alt_en: "",
    alt_es: "",
    link: "",
    projects: fem_challenges,
  },
  {
    id: 3,
    name: "Rick and Morty",
    title_en:
      "This is an app that I got suggested by a friend, it's have been a good practice and I ended up learning useQuery, well, bybye useQuery, hi Next.JS",
    title_es:
      "Esta es una aplicación que fue sugerida por un amigo, fue buena práctica y incluso aprendí useQuery, bueno, adiós useQuery, hola Next.JS",
    img: rick_and_morty,
    alt_en: "",
    alt_es: "",
    link: "",
  },
  {
    id: 4,
    name: "ThemPaint",
    title_en:
      "This is an app I intended to make long time ago because I worked many years as Painter and I wanted to showcase some of my work and maybe even use it as a marketing tool, but i kind of hate painting from time to time so I ended postponing this",
    title_es:
      "Esta es una aplicación que quería hacer un tiempo atrás porque trabajé muchos años como pintor y quería mostrar algo de mi trabajo acá.. y quizá incluso usarla como herramienta de marketing, pero medio que odio pintar de vez en cuando así que terminé posponiéndola",
    img: them_paint,
    alt_en: "",
    alt_es: "",
    link: "",
  },
  {
    id: 5,
    name: "The movies DB",
    title_en:
      "This is an APP i made while coursing in the Alkemy page, while the course was heavily outdated and the quizzes were trash I ended up learning a lot doing it while handling form datas and tokens, well, maybe now it's dead because off token bases, maybe I do my own API for a Movie DB",
    title_es:
      "Esta es una aplicación que creé mientras que cursaba react en Alkemy, lástima que el curso estaba bastante desactualizado y las preguntas, y un par de conceptos eran bastante lamentables, incluso así aprendí bastante haciéndolo manejando formularios y tokens. Bueno, quizá ahora esté muerta esta aplicación porque el token seguro venció, probablemente haga mi propia API para revivir este proyecto..",
    img: the_movies_database,
    alt_en: "",
    alt_es: "",
    link: "",
  },
  {
    id: 6,
    name: "test",
    title_en:
      "This is an APP i made while coursing in the Alkemy page, while the course was heavily outdated and the quizzes were trash I ended up learning a lot doing it while handling form datas and tokens, well, maybe now it's dead because off token bases, maybe I do my own API for a Movie DB",
    title_es:
      "Esta es una aplicación que creé mientras que cursaba react en Alkemy, lástima que el curso estaba bastante desactualizado y las preguntas, y un par de conceptos eran bastante lamentables, incluso así aprendí bastante haciéndolo manejando formularios y tokens. Bueno, quizá ahora esté muerta esta aplicación porque el token seguro venció, probablemente haga mi propia API para revivir este proyecto..",
    img: who,
    alt_en: "",
    alt_es: "",
    link: "",
  },
];

export { apps, randomTestName, randomTestImage };
