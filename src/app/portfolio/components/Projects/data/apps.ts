import img_bonfire from "../../assets/apps/bushkraft.jpg";
import img_rickandmorty from "../../assets/apps/rick-and-morty.jpg";
import img_freecodecamp from "../../assets/apps/freecodecamp.jpg";
import img_frontendmentor from "../../assets/apps/frontendmentor.png";
import img_logo_kak from "../../assets/apps/logo-kak.png";
import img_tmdb from "../../assets/apps/TMDB.png";
import img_themPaint from "../../assets/apps/thempaint.jpg";
import img_test_1 from "../../assets/apps/test/confused.png";
import img_test_2 from "../../assets/apps/test/curiosity.png";
import img_test_3 from "../../assets/apps/test/problem.png";
import img_test_4 from "../../assets/apps/test/question.png";
import img_test_5 from "../../assets/apps/test/who.png";
import img_test_6 from "../../assets/apps/test/why.png";
const tests_imgs = [
  img_test_1,
  img_test_2,
  img_test_3,
  img_test_4,
  img_test_5,
  img_test_6,
];

type Apps = {
  id: number;
  name: string;
  link: string;
  img?: string;
  title?: string;
  style?: {
    color?: string;
    textDecoration?: string;
    fontSize?: string;
  };
}[];

const testNames = [
  "tesT",
  "tESTeeeee",
  "TEST-OS",
  "It's time to... TEST",
  "() => Test",
  "first test, then deploy",
  "contract me, i mean.. Tests",
];

const randomTest = () => {
  return testNames[Math.floor(Math.random() * testNames.length)];
};

const randomTestStyle = () => {
  const randomRGB = () => Math.floor(Math.random() * 255);
  const randomColor = () => {
    return `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
  };
  const randomTextDecoration = () => {
    const decorations = [
      "underline",
      "underline dotted",
      `rgb(${randomRGB()} ${randomRGB()} ${randomRGB()}) underline dotted`,
      `randomRGB(${randomRGB()} ${randomRGB()} ${randomRGB()}) underline wavy`,
      `randomRGB(${randomRGB()} ${randomRGB()} ${randomRGB()}) underline overline`,
    ];
    return decorations[Math.floor(Math.random() * decorations.length)];
  };

  const randomFontSize = () => {
    const n = () => Math.random() * 4;
    let nn = n();
    while (nn < 1 || nn > 3) {
      nn = n();
    }
    return `${nn.toString().slice(0, 3)}rem`;
  };

  const style = {
    color: randomColor(),
    textDecoration: randomTextDecoration(),
    fontSize: randomFontSize(),
  };
  return style;
};

const Apps: Apps = [
  {
    id: 0,
    name: "Bushkraft",
    link: "/bushkraft",
    img: img_bonfire,
  },
  {
    id: 1,
    name: "FreeCodeCamp Challenges",
    link: "/free-code-camp",
    img: img_freecodecamp,
  },
  {
    id: 2,
    name: "Front End Mentor Challenges",
    link: "/front-end-mentor",
    img: img_frontendmentor,
  },
  {
    id: 3,
    name: "Kak",
    link: "/kak/projects",
    img: img_logo_kak,
  },
  {
    id: 4,
    name: "Rick and Morty",
    link: "/rick-and-morty",
    img: img_rickandmorty,
  },
  {
    id: 5,
    name: randomTest(),
    title: "Test",
    link: "/tests",
    style: randomTestStyle(),
    img: tests_imgs[Math.floor(Math.random() * tests_imgs.length) + 1],
  },
  {
    id: 6,
    name: "Them Paint",
    link: "/them-paint",
    img: img_themPaint,
  },
  {
    id: 7,
    name: "TMDB",
    link: "/tmdb",
    img: img_tmdb,
  },
  {
    id: 8,
    name: "JustAFantasy",
    link: "/just-a-fantasy",
  },
];

export default Apps;
