"use client";
import style from "./header.module.scss";
import { useGenerationStore } from "@/app/portfolio/states";
import Link from "next/link";
import Image from "next/image";
import { icons } from "@/assets/data/icons";

// https://www.youtube.com/watch?v=S-VeYcOCFZw&ab_channel=WebDevSimplified

const Header = () => {
  const { isEnglish, setEnglish, setDark, isDark } = useGenerationStore();
  return (
    <div
      style={
        isDark
          ? {
              backgroundImage: `url("${background__stars}")`,
              backgroundSize: "cover",
              backgroundPosition: "0% 100%",
            }
          : {}
      }
      className={isDark ? style.header : `${style.header} ${style.light}`}
    >
      <main>
        <h2>
          <Link href="">
            <b>Bush</b>Kraft
          </Link>
        </h2>
        <div className={style.navbar}>
          <div className={style.some_btns}>
            <Link href="/bushkraft/help-center">
              {isEnglish ? "Help Center" : "Centro de ayuda"}
            </Link>
            <Link href="/bushkraft/contact">
              {isEnglish ? "Contact Us" : "Contáctenos"}
            </Link>
            <Link href="">
              {isEnglish ? "Mission Statement" : "Nuestra misión"}
            </Link>
            <Link href="/bushkraft/retailers">
              {isEnglish ? "Retailers" : "Minoristas"}
            </Link>
            <Link href="/bushkraft/wishlist">
              {isEnglish ? "Wishlist" : "Lista de deseos"}
            </Link>
            <Link href="/bushkraft/login">
              {isEnglish ? "Log In" : "Acceso"}
            </Link>
          </div>
          <div className={style.config_btns}>
            <form>
              <input type="text" />
              <button>{isEnglish ? "Search" : "Buscar"}</button>
            </form>
            <button onClick={() => setEnglish(!isEnglish)}>
              {isEnglish ? "Cambiar a Español" : "Change to English"}
            </button>
            <button onClick={() => setDark(!isDark)}>
              {isDark ? (
                <Image
                  width={10}
                  alt={
                    isEnglish
                      ? icons.dark_mode.sun.alt_en
                      : icons.dark_mode.sun.alt_es
                  }
                  src={icons.dark_mode.sun.icon}
                />
              ) : (
                <Image
                  width={10}
                  alt={
                    isEnglish
                      ? icons.game.campfire.alt_en
                      : icons.game.campfire.alt_es
                  }
                  src={icons.game.campfire.icon}
                />
              )}
            </button>
          </div>
        </div>
      </main>
      <div className={style.news}>
        <p>
          {isEnglish
            ? "20% discount on Shovels, Jumpers, and light-rods!"
            : "¡20% de descuento en Palas, Camperas y Varas de incendio!"}
        </p>
      </div>
      <div className={style.menu}>
        <button className={`${style.dropdown} ${style.gear}`}>
          <p>{isEnglish ? "SURVIVAL GEAR" : "EQUIPO DE SUPERVIVENCIA"}</p>
          <Image
            alt={
              isEnglish
                ? icons.interface.down_arrow.alt_en
                : icons.interface.down_arrow.alt_es
            }
            src={icons.interface.down_arrow.icon_2}
            width={10}
          />
          <div className={style.dropdown_menu}>
            <section>
              <b>
                <Link href="category/survival-kits">SURVIVAL KITS</Link>
              </b>
            </section>
            <section>
              <b>
                <Link href="category/combustion-devices">
                  COMBUSTION DEVICES
                </Link>
              </b>
              <p>
                <Link href="collections/ferro-rods">Ferro Rods</Link>
              </p>
              <p>
                <Link href="collections/fire-starting-kits">
                  Fire Starting Kits
                </Link>
              </p>
              <p>
                <Link href="collections/infernos-surefire">
                  Infernos & Sure Fire
                </Link>
              </p>
              <p>
                <Link href="collections/waterproof-matches">
                  Waterproof Matches
                </Link>
              </p>
              <p>
                <Link href="collections/natural-kindling">
                  Natural Kindling Materials
                </Link>
              </p>
              <p>
                <Link href="collections/magnifying-lens">Magnifying Lens</Link>
              </p>
              <p>
                <Link href="collections/flint-and-steel">Flint and Steel</Link>
              </p>
            </section>
            <section>
              <b>
                <Link href="category/cargo-tape">CARGO TAPE</Link>
              </b>
            </section>
            <section>
              <b>
                <Link href="category/cothrefn-bandanas">COThrefN BANDANAS</Link>
              </b>
            </section>
            <section>
              <b>
                <Link href="category/cordage">CORDAGE</Link>
              </b>
              <p>
                <Link href="collections/paracord">Paracord</Link>
              </p>
              <p>
                <Link href="collections/bank-line">Bank Line</Link>
              </p>
              <p>
                <Link href="collections/mule-tape">Mule Tape</Link>
              </p>
              <p>
                <Link href="collections/cordage-accessories">
                  Cordage Accesories
                </Link>
              </p>
              <p>
                <Link href="collections/sail-needles">Sail Needles</Link>
              </p>
            </section>
            <section>
              <b>
                <Link href="category/candling-devices">CANDLING DEVICES</Link>
              </b>
              <p>
                <Link href="collections/headlamps">Headlamps</Link>
              </p>
              <p>
                <Link href="collections/candles">Candles</Link>
              </p>
              <p>
                <Link href="collections/lanterns">Lanterns</Link>
              </p>
            </section>
            <section>
              <b>
                <Link href="category/cover-and-shelter">COVER & SHELTER</Link>
              </b>
              <p>
                <Link href="collections/tarps-hammocks">Tarps & Hammocks</Link>
              </p>
              <p>
                <Link href="collections/oilskin-products">
                  Oilskin Products
                </Link>
              </p>
              <p>
                <Link href="collections/ponchos">Ponchos</Link>
              </p>
              <p>
                <Link href="collections/sleeping-bags">Sleeping Bags</Link>
              </p>
              <p>
                <Link href="collections/shelter-accesories">
                  Shelter Accesories
                </Link>
              </p>
            </section>
            <section>
              <b>
                <Link href="category/navigation">NAVIGATION</Link>
              </b>
              <p>
                <Link href="collections/compasses">Compasses</Link>
              </p>
              <p>
                <Link href="collections/map-tools">Map Tools</Link>
              </p>
              <p>
                <Link href="collections/ranger-pace-beads">
                  Ranger Pace Beads
                </Link>
              </p>
              <p>
                <Link href="collections/primitive-range-finder">
                  Primitive Range Finder
                </Link>
              </p>
              <p>
                <Link href="collections/navigation-accesories">
                  Navigation Accesories
                </Link>
              </p>
            </section>
            <section>
              <b>
                <Link href="category/forged-goods">FORGED GOODS</Link>
              </b>
            </section>
            <section>
              <b>
                <Link href="category/trapping-supplies">TRAPPING SUPPLIES</Link>
              </b>
              <p>
                <Link href="category/traps">Traps</Link>
              </p>
              <p>
                <Link href="category/trapping-tools">Trapping Tools</Link>
              </p>
            </section>
            <section>
              <b>
                <Link href="category/first-aid">FIRST AID</Link>
              </b>
            </section>
            <section>
              <b>
                <Link href="category/ready-to-eat-food">READY TO EAT FOOD</Link>
              </b>
            </section>
            <section>
              <b>
                {" "}
                <Link href="category/outdoor-apparel">OUTDOOR APPAREL</Link>
              </b>
              <p>
                <Link href="collections/boots">Boots</Link>
              </p>
              <p>
                <Link href="collections/oil-skin-gear">Oil Skin Gear</Link>
              </p>
              <p>
                <Link href="collections/shirts-and-hoodies">
                  Shirts & Hoodies
                </Link>
              </p>
              <p>
                <Link href="collections/caps">Caps</Link>
              </p>
              <p>
                <Link href="collections/shemagh-scarves">
                  Shemagh & Scarves
                </Link>
              </p>
              <p>
                <Link href="collections/ponchos">Ponchos</Link>
              </p>
              <p>
                <Link href="collections/patches">Patches</Link>
              </p>
            </section>
          </div>
        </button>
        <button className={`${style.dropdown} ${style.tools}`}>
          <p>{isEnglish ? "CUTTING TOOLS" : "HERRAMIENTAS PARA CORTAR"}</p>
          <Image
            src={icons.interface.down_arrow.icon_2}
            alt={
              isEnglish
                ? icons.interface.down_arrow.alt_en
                : icons.interface.down_arrow.alt_es
            }
            width={10}
          />
          <div className={style.dropdown_menu}>
            <section>
              <Link href="category/cover-and-shelter"></Link>
              <b>SURVIVAL KNIVES</b>
              <p>PKS Knives</p>
              <p>Mora Knives</p>
              <p>Pocket Knives</p>
              <p>Spear Points</p>
            </section>
            <section>
              <Link href="category/cover-and-shelter"></Link>
              <b>WOODSMAN'S PAL</b>
            </section>
            <section>
              <Link href="category/cover-and-shelter"></Link>
              <b>MORA KNIVES</b>
            </section>
            <section>
              <Link href="category/cover-and-shelter"></Link>
              <b>WOOD WORKING</b>
              <p>Carving Knives</p>
              <p>Auger Bits</p>
            </section>
            <section>
              <Link href="category/cover-and-shelter"></Link>
              <b>LEATHER SHEATS</b>
            </section>
            <section>
              <Link href="category/cover-and-shelter"></Link>
              <b>SAWS</b>
              <p>Folding Saw</p>
              <p>Bow Saw</p>
              <p>Folding Hand Saw</p>
              <p>Replacement Blades</p>
              <p>Folding Saw Sheaths Blades</p>
            </section>
            <section>
              <Link href="category/cover-and-shelter"></Link>
              <b>HATCHETS</b>
            </section>
            <section>
              <Link href="category/cover-and-shelter"></Link>
              <b>AXES</b>
              <p>Hults Bruk</p>
              <p>Council Tool</p>
              <p>Axe Accesories</p>
              <p>Axe Sharpening Supplies</p>
            </section>
            <section>
              <Link href="category/cover-and-shelter"></Link>
              <b>KNIFE SHARPENING SUPPLIES</b>
            </section>
          </div>
        </button>
        <button className={`${style.dropdown} ${style.cooking}`}>
          <p>{isEnglish ? "OUTDOOR COOKING" : "COCINA EXTERIOR"}</p>
          <Image
            alt={
              isEnglish
                ? icons.interface.down_arrow.alt_en
                : icons.interface.down_arrow.alt_es
            }
            src={icons.interface.down_arrow.icon_2}
            width={10}
          />
          <div className={style.dropdown_menu}>
            <section>
              <Link href="category/cover-and-shelter"></Link>
              <b>STAINLESS STEEL CONTAINERS</b>
              <p>Pots & Pans</p>
              <p>Canteens</p>
              <p>Bottles</p>
              <p>Containers</p>
              <p>Mess Kits</p>
            </section>
            <section>
              <Link href="/category/cover-and-shelter"></Link>
              <b>TITANIUM COOKWARE</b>
            </section>
            <section>
              <Link href="/category/cover-and-shelter"></Link>
              <b>BAYOU CLASSIC CAST IRON</b>
            </section>
            <section>
              <Link href="/category/cover-and-shelter"></Link>
              <b>STOVES & GRILLS</b>
            </section>
            <section>
              <Link href="/category/cover-and-shelter"></Link>
              <b>COOKING KITS</b>
            </section>
            <section>
              <Link href="/category/cover-and-shelter"></Link>
              <b>READY TO EAT FOOD</b>
            </section>
            <section>
              <Link href="/category/cover-and-shelter"></Link>
              <b>EATING TOOLS</b>
              <p>Mess Kits</p>
              <p>Plates & Bowls</p>
              <p>Eating Utensils</p>
              <p>Cups</p>
              <p>Kupilka Sets</p>
            </section>
            <section>
              <Link href="/category/cover-and-shelter"></Link>
              <b>FOOD STORAGE</b>
            </section>
            <section>
              <Link href="/category/cover-and-shelter"></Link>
              <b>STEEL STORAGE TINS</b>
            </section>
            <section>
              <Link href="/category/cover-and-shelter"></Link>
              <b>WATER FILTRATION</b>
            </section>
            <section>
              <Link href="/category/cover-and-shelter"></Link>
              <b>HAND-FORGED COOKING TOOLS</b>
            </section>
          </div>
        </button>
        <button className={`${style.dropdown} ${style.bags}`}>
          <p>{isEnglish ? "PACKS & BAGS" : "BOLSAS Y MOCHILAS"}</p>
          <Image
            alt={
              isEnglish
                ? icons.interface.down_arrow.alt_en
                : icons.interface.down_arrow.alt_es
            }
            src={icons.interface.down_arrow.icon_2}
            width={10}
          />
          <div className={style.dropdown_menu}>
            <section>
              <Link href="/category/cover-and-shelter"></Link>
              <b>HAVERSACKS</b>
            </section>
            <section>
              <Link href="/category/cover-and-shelter"></Link>
              <b>DRY BAGS</b>
            </section>
            <section>
              <Link href="/category/cover-and-shelter"></Link>
              <b>WAXED CANVAS</b>
            </section>
            <section>
              <Link href="/category/cover-and-shelter"></Link>
              <b>CANVAS BACK PACKS</b>
            </section>
            <section>
              <Link href="/category/cover-and-shelter"></Link>
              <b>DULUTH PACKS</b>
            </section>
            <section>
              <Link href="/category/cover-and-shelter"></Link>
              <b>NYLON BACKPACKS</b>
            </section>
            <section>
              <Link href="/category/cover-and-shelter"></Link>
              <b>CANVAS UTILITY BAGS</b>
            </section>
            <section>
              <Link href="/category/cover-and-shelter"></Link>
              <b>DYNEEMA BAGS</b>
            </section>
            <section>
              <Link href="/category/cover-and-shelter"></Link>
              <b>MOLLE BAGS & POUCHES</b>
            </section>
            <section>
              <Link href="/category/cover-and-shelter"></Link>
              <b>LEATHER BAGS</b>
            </section>
            <section>
              <Link href="/category/cover-and-shelter"></Link>
              <b>BURLAP BAGS</b>
            </section>
            <section>
              <Link href="/category/cover-and-shelter"></Link>
              <b>SMALL BAGS & POUCHES</b>
            </section>
            <section>
              <Link href="/category/cover-and-shelter"></Link>
              <b>ACCESORIES</b>
            </section>
          </div>
        </button>
        <button className={`${style.dropdown} ${style.apparel}`}>
          <p>{isEnglish ? "OUTDOOR APPAREL" : "ROPA DE EXTERIOR"}</p>
          <Image
            alt={
              isEnglish
                ? icons.interface.down_arrow.alt_en
                : icons.interface.down_arrow.alt_es
            }
            src={icons.interface.down_arrow.icon_2}
            width={10}
          />
          <div className={style.dropdown_menu}>
            <section>
              <Link href="/category/cover-and-shelter"></Link>
              <b></b>
            </section>
          </div>
        </button>
        <button className={`${style.dropdown} ${style.training}`}>
          <p>
            {isEnglish ? "SURVIVAL TRAINING" : "ENTRENAMIENTO DE SUPERVIVENCIA"}
          </p>
          <Image
            alt={
              isEnglish
                ? icons.interface.down_arrow.alt_en
                : icons.interface.down_arrow.alt_es
            }
            src={icons.interface.down_arrow.icon_2}
            width={10}
          />
          <div className={style.dropdown_menu}>
            <section>
              <Link href="/category/cover-and-shelter"></Link>
              <b></b>
            </section>
          </div>
        </button>
        <button className={`${style.dropdown} ${style.books}`}>
          <p>{isEnglish ? "SURVIVAL BOOKS" : "LIBROS DE SUPERVIVENCIA"}</p>
          <Image
            alt={
              isEnglish
                ? icons.interface.down_arrow.alt_en
                : icons.interface.down_arrow.alt_es
            }
            src={icons.interface.down_arrow.icon_2}
            width={10}
          />
          <div className={style.dropdown_menu}>
            <section>
              <Link href="/category/cover-and-shelter"></Link>
              <b>sas?</b>
            </section>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
