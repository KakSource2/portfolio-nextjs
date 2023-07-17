"use client";
import style from "./footer.module.scss";
import logo_kak from "@/assets/images/logo-kak.png";
import Link from "next/link";
import Image from "next/image";
import { useGenerationStore } from "@/app/portfolio/states";

const Footer = () => {
  const { isEnglish, isDark } = useGenerationStore();
  return (
    <div className={isDark ? style.footer : `${style.footer} ${style.light}`}>
      {isEnglish ? "Show-off page created by " : "Página de muestra creada por"}
      <Link href="/">
        <Image src={logo_kak} alt="The logo of my nickname: Kak" />
      </Link>
    </div>
  );
};
export default Footer;
