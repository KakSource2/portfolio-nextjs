"use client";
import { useGenerationStore } from "@/app/portfolio/states";
import style from "./category.module.scss";
import { useSearchParams } from "next/navigation";

type categoriesProps = {
  name_en: string;
  name_es: string;
  items: [];
};

const categories: categoriesProps[] = [
  { name_en: "Survival kits", name_es: "Kit de supervivencia", items: [] },
  { name_en: "First aid", name_es: "Primeros auxilios", items: [] },
  {
    name_en: "Candling devices",
    name_es: "Dispositivos de iluminación",
    items: [],
  },
  { name_en: "Cargo tape", name_es: "Cinta de carga", items: [] },
  {
    name_en: "Combustion devices",
    name_es: "Dispositivos de combustión",
    items: [],
  },
  { name_en: "Cordage", name_es: "Cuerda", items: [] },
  { name_en: "Cover and shelter", name_es: "Cubierta y escondite", items: [] },
  { name_en: "Forged goods", name_es: "Bienes forjados", items: [] },
  { name_en: "Navigation", name_es: "Navegación", items: [] },
  { name_en: "Outdoor apparel", name_es: "Ropa de exterior", items: [] },
  {
    name_en: "Ready to eat food",
    name_es: "Comida lista para comer",
    items: [],
  },
  {
    name_en: "Trapping supplies",
    name_es: "Suministros de captura",
    items: [],
  },
  {
    name_en: "Cotton bandanas",
    name_es: "Bandanas de algodón",
    items: [],
  },
];

const Category = () => {
  const { isEnglish, isDark } = useGenerationStore();
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  const find = categories.find((item) => {
    const fixed = item.name_en.toLowerCase().replaceAll(" ", "-");
    return fixed === search;
  });

  return (
    <div
      className={isDark ? style.category : `${style.category} ${style.light}`}
    >
      <h2>{isEnglish ? find?.name_en : find?.name_es}</h2>
      <div className={style.items}>
        {find?.items.map((item) => (
          <div className={style.item}>{JSON.stringify(item)}</div>
        ))}
      </div>
    </div>
  );
};
export default Category;
