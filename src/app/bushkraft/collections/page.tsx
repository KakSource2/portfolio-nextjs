"use client";
import { useSearchParams } from "next/navigation";
import { useGenerationStore } from "@/app/portfolio/states";
import style from "./collections.module.scss";

type collectionProps = {
  id: number;
  name_en: string;
  name_es: string;
  items: [];
};

const collection: collectionProps[] = [
  { id: 1, name_en: "Bank line", name_es: "", items: [] },
  { id: 2, name_en: "Beads", name_es: "", items: [] },
  { id: 3, name_en: "Boots", name_es: "", items: [] },
  { id: 4, name_en: "Candles", name_es: "", items: [] },
  { id: 5, name_en: "Caps", name_es: "", items: [] },
  { id: 6, name_en: "Compasses", name_es: "", items: [] },
  { id: 7, name_en: "Cordage accesories", name_es: "", items: [] },
  { id: 8, name_en: "Ferro rods", name_es: "", items: [] },
  { id: 9, name_en: "Fire starting kits", name_es: "", items: [] },
  { id: 10, name_en: "Flint and steel", name_es: "", items: [] },
  { id: 11, name_en: "Headlamps candles", name_es: "", items: [] },
  { id: 12, name_en: "Infernos and surefire", name_es: "", items: [] },
  { id: 13, name_en: "Kindling material", name_es: "", items: [] },
  { id: 14, name_en: "Magnifying lens", name_es: "", items: [] },
  { id: 15, name_en: "Map tools", name_es: "", items: [] },
  { id: 16, name_en: "Mule tape", name_es: "", items: [] },
  { id: 17, name_en: "Navigation accesories", name_es: "", items: [] },
  { id: 18, name_en: "Oilskin products", name_es: "", items: [] },
  { id: 19, name_en: "Oilskin gear", name_es: "", items: [] },
  { id: 20, name_en: "Paracord", name_es: "", items: [] },
  { id: 21, name_en: "Patches", name_es: "", items: [] },
  { id: 22, name_en: "Ponchos", name_es: "", items: [] },
  { id: 23, name_en: "Primitive gear", name_es: "", items: [] },
  { id: 24, name_en: "Range pace", name_es: "", items: [] },
  { id: 25, name_en: "Sail needles", name_es: "", items: [] },
  { id: 26, name_en: "Shelter accesories", name_es: "", items: [] },
  { id: 27, name_en: "Shemagh and scarpes", name_es: "", items: [] },
  { id: 28, name_en: "Shirts and hoodies", name_es: "", items: [] },
  { id: 29, name_en: "Sleeping bags", name_es: "", items: [] },
  { id: 30, name_en: "Tarps and hammocks", name_es: "", items: [] },
  { id: 31, name_en: "Trapping tools", name_es: "", items: [] },
  { id: 32, name_en: "Traps", name_es: "", items: [] },
  { id: 33, name_en: "Waterproof matches", name_es: "", items: [] },
];

const Collections = () => {
  // const { name } = searchPar();
  const { isEnglish, isDark } = useGenerationStore();
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  const find = collection.find((item) => {
    const fixed = item.name_en.toLowerCase().replaceAll(" ", "-");
    return fixed === search;
  });

  return (
    <div
      className={
        isDark ? style.collections : `${style.collections} ${style.light}`
      }
    >
      <h2>{isEnglish ? find?.name_en : find?.name_es}</h2>
    </div>
  );
};
export default Collections;
