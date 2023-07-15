"use client";
import Link from "next/link";
import { useGenerationStore } from "../../states";

import styles from "./projects.module.scss";
import { apps } from "@/assets/data/apps";
import Image from "next/image";

const Projects = () => {
  const { isDark, isEnglish } = useGenerationStore();
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
        {apps.map((item) => (
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
        ))}
      </main>
    </article>
  );
};

export default Projects;
