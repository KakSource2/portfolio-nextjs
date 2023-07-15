import { StaticImageData } from "next/image";
import bushkraft from "../apps/bushkraft.jpg";
import free_code_camp from "../apps/freecodecamp.jpg";
import front_end_mentor from "../apps/frontendmentor.png";
import rick_and_morty from "../apps/rick-and-morty.jpg";
import them_paint from "../apps/thempaint.jpg";
import the_movies_database from "../apps/TMDB.png";

type appProps = {
  id: number;
  name: string;
  title_en: string;
  title_es: string;
  img: StaticImageData;
  alt_en: string;
  alt_es: string;
  link: string;
};

const testNames = [];

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
  //   {
  //     id: 1,
  //     name: "FreeCodeCamp",
  //     title_en:
  //       "This app is meant to show off all the projects I make while i practice some programming concepts in FreeCodeCamp, now it's small because I try to concentrate in getting better at what I need to land a job",
  //     title_es:
  //       "Esta aplicación pretende mostrar todos los proyectos que voy creando a medida que voy practicando conceptos nuevos en FreeCodeCamp, ahora no tiene mucho contenido porque estoy concentrandome más en mejorar ciertos conceptos para conseguir un trabajo de programador",
  //     img: free_code_camp,
  //   },
  //   {
  //     id: 2,
  //     name: "Front End Mentor",
  //     title_en:
  //       "This app is to show off some of the projects suggested by the amazing page Front-End-Mentor, I try to finish them all but it really takes a lot of time and learning too, i'm still lack some experiencie so good theres good people on Youtube like WebDevSimplified and Kevin Prowell to help understand this concepts",
  //     title_es:
  //       "Esta aplicación es para mostrar la mayoría de los proyectos sugeridos la de la increible página Front End Mentor, intento finalizar todos y más que nada me concentro en estos, pero realmente lleva mucho tiempo y aprendizaje... Todavía me falta experiencia, lo bueno es que hay buena gente como WebDevSimplified o Kevin Prowell para ayudar a entender estos conceptos",
  //     img: front_end_mentor,
  //   },
  //   {
  //     id: 3,
  //     name: "Rick and Morty",
  //     title_en:
  //       "This is an app that I got suggested by a friend, it's have been a good practice and I ended up learning useQuery, well, bybye useQuery, hi Next.JS",
  //     title_es:
  //       "Esta es una aplicación que fue sugerida por un amigo, fue buena práctica y incluso aprendí useQuery, bueno, adiós useQuery, hola Next.JS",
  //     img: rick_and_morty,
  //   },
  //   {
  //     id: 4,
  //     name: "ThemPaint",
  //     title_en:
  //       "This is an app I intended to make long time ago because I worked many years as Painter and I wanted to showcase some of my work and maybe even use it as a marketing tool, but i kind of hate painting from time to time so I ended postponing this",
  //     title_es:
  //       "Esta es una aplicación que quería hacer un tiempo atrás porque trabajé muchos años como pintor y quería mostrar algo de mi trabajo acá.. y quizá incluso usarla como herramienta de marketing, pero medio que odio pintar de vez en cuando así que terminé posponiéndola",
  //     img: them_paint,
  //   },
  //   {
  //     id: 5,
  //     name: "The movies DB",
  //     title_en:
  //       "This is an APP i made while coursing in the Alkemy page, while the course was heavily outdated and the quizzes were trash I ended up learning a lot doing it while handling form datas and tokens, well, maybe now it's dead because off token bases, maybe I do my own API for a Movie DB",
  //     title_es:
  //       "Esta es una aplicación que creé mientras que cursaba react en Alkemy, lástima que el curso estaba bastante desactualizado y las preguntas, y un par de conceptos eran bastante lamentables, incluso así aprendí bastante haciéndolo manejando formularios y tokens. Bueno, quizá ahora esté muerta esta aplicación porque el token seguro venció, probablemente haga mi propia API para revivir este proyecto..",
  //     img: the_movies_database,
  //   },
  //   {
  //     id: 6,
  //     name: "Test",
  //     title_en:
  //       "This is an APP i made while coursing in the Alkemy page, while the course was heavily outdated and the quizzes were trash I ended up learning a lot doing it while handling form datas and tokens, well, maybe now it's dead because off token bases, maybe I do my own API for a Movie DB",
  //     title_es:
  //       "Esta es una aplicación que creé mientras que cursaba react en Alkemy, lástima que el curso estaba bastante desactualizado y las preguntas, y un par de conceptos eran bastante lamentables, incluso así aprendí bastante haciéndolo manejando formularios y tokens. Bueno, quizá ahora esté muerta esta aplicación porque el token seguro venció, probablemente haga mi propia API para revivir este proyecto..",
  //     img: the_movies_database,
  //   },
];

export { apps };
