"use client";
import Link from "next/link";
import { useGenerationStore } from "../../states";
import styles from "./projects.module.scss";
import { apps, randomTestImage, randomTestName } from "@/assets/data/apps";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { icons } from "@/assets/data/icons";

const Projects = () => {
  const { isDark, isEnglish } = useGenerationStore();
  const [test, setTest] = useState<{ name: string; img: StaticImageData }>({
    name: "",
    img: icons.dark_mode.sun.icon,
  });

  useEffect(() => {
    setTest({ name: randomTestName(), img: randomTestImage() });
  }, []);

  return (
    <article
      id="apps"
      className={isDark ? styles.article : `${styles.article} ${styles.light}`}
    >
      <span className={styles.p1}>{"</>"}</span>
      <span className={styles.p2}>
        {isEnglish ? "Apps I've built" : "Apps que he hecho"}
      </span>
      <main>
        {apps.map((item) => {
          if (item.name === "test") {
            return (
              <Link
                key={item.id}
                title={isEnglish ? item.title_en : item.title_es}
                href={item.link}
              >
                <p>{test.name}</p>
                <Image
                  alt={isEnglish ? item.alt_en : item.alt_es}
                  src={test.img}
                ></Image>
              </Link>
            );
          }
          return (
            <Link
              key={item.id}
              title={isEnglish ? item.title_en : item.title_es}
              href={item.link}
            >
              <p>{item.name}</p>
              <Image
                alt={isEnglish ? item.alt_en : item.alt_es}
                src={item.img}
              ></Image>
            </Link>
          );
        })}
      </main>
    </article>
  );
};

export default Projects;
