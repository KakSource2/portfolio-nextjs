import { useOutletContext } from "react-router-dom";
// import bg_pattern from "./assets/background/bg-pattern-card.svg";
import bg_top from "./assets/background/bg-pattern-top.svg";
import bg_bottom from "./assets/background/bg-pattern-bottom.svg";
import image_victor from "./assets/image-victor.jpg";
import styled from "styled-components";
import { useState } from "react";

const randomNames = [
  "Pepe Albornoz",
  "Juan Saviola",
  "Mariano Zirconia",
  "Alberto Rodriguez",
  "Rogelio Romualdo",
];

const randomLocations = [
  "Argentina",
  "Italia",
  "Francia",
  "Alemania",
  "Vicente Lopez",
  "Sin especificar",
  "Algún lugar en el universo",
];

type user = {
  name: string;
  location: string;
  followers: number;
  likes: number;
  photos: number;
};

const randomPortraitColor = () => {
  const r = () => Math.floor(Math.random() * 256);
  return `rgba(${r()}, ${r()}, ${r()})`;
};

const formatter = (number: number) => {
  return new Intl.NumberFormat("en-US", { notation: "compact" }).format(number);
};

const createUser = () => {
  const user: user = {
    name: randomNames[Math.floor(Math.random() * randomNames.length)],
    location:
      randomLocations[Math.floor(Math.random() * randomLocations.length)],
    followers: Math.floor(Math.random() * 100000),
    likes: Math.floor(Math.random() * 100000000),
    photos: Math.floor(Math.random() * 1000),
  };
  return user;
};

const ProfileCard = () => {
  const [user, setUser] = useState<user>(createUser());
  const { english }: { english: boolean } = useOutletContext();

  const Base = styled.div<{ portraitColor: string }>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    background-color: black;
    color: white;
    overflow: hidden;

    .bg__top,
    .bg__bottom {
      position: absolute;
      width: 50%;
    }

    .bg__top {
      top: 0;
      left: 0;
      transform: translateY(-50%);
    }
    .bg__bottom {
      bottom: 0;
      right: 0;
      transform: translateY(50%);
    }

    .config {
      position: absolute;
      top: 0.4rem;
      width: 8rem;
      height: 2rem;
    }

    main {
      display: grid;
      grid-template-rows: 0.5fr 1fr 0.5fr;
      height: 15rem;
      width: 25rem;
      border: 1px solid black;
      justify-items: center;
      border: 1px solid white;
      align-items: center;
      border-radius: 0.5rem;
      background-color: rgb(255, 0, 0);

      .logo {
        display: flex;
        justify-content: center;
        align-content: center;
        position: relative;
        width: 100%;
        height: 100%;
        background-color: ${(props) => props.portraitColor};
        border-radius: 0.5rem 0.5rem 0 0;

        img {
          display: block;
          position: absolute;
          bottom: 0;
          transform: translateY(50%);
          border-radius: 50%;
          width: 4rem;
        }
      }

      img {
        width: 50px;
      }

      h3 {
        font-size: 1.6rem;
      }

      .personal {
        display: grid;
        justify-items: center;
      }

      .stats {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        width: 100%;
        height: 100%;

        div {
          width: 100%;
          border: 1px solid white;
          display: grid;
          justify-items: center;
          padding: 0.5rem;
        }

        div:first-child {
          border-radius: 0 0 0 0.4rem;
        }

        div:last-child {
          border-radius: 0 0 0.4rem 0;
        }
      }
    }
  `;

  return (
    <Base portraitColor={randomPortraitColor()}>
      <img className="bg__top" src={bg_top} />
      <img className="bg__bottom" src={bg_bottom} />
      <button className="config" onClick={() => setUser(createUser())}>
        Random
      </button>
      <main>
        <div className="logo">
          <img src={image_victor} />
        </div>
        <div className="personal">
          <h3>{user?.name}</h3>
          <p>{user?.location}</p>
        </div>
        <div className="stats">
          <div>
            <h4>{formatter(user.likes)}</h4>
            <p>{english ? "Likes" : "Me gusta"}</p>
          </div>
          <div>
            <h4>{formatter(user.photos)}</h4>
            <p>{english ? "Photos" : "Fotos"}</p>
          </div>
          <div>
            <h4>{formatter(user.followers)}</h4>
            <p>{english ? "Followers" : "Seguidores"}</p>
          </div>
        </div>
      </main>
    </Base>
  );
};
export default ProfileCard;
