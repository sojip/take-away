import { useEffect } from "react";
import logo from "../images/logo.png";
import "../styles/Header.css";
import { db } from "../utils/Firebase";
import Menu from "./Menu";
import { useState } from "react";

const Header = () => {
  const Category = function (name, custom_options, foods) {
    return { name, custom_options, foods };
  };

  const Food_dish = function (name, description, price) {
    return { name, description, price };
  };

  const CustomOption = function (name, price = 0) {
    return { name, price };
  };
  const [showmenu, setshowmenu] = useState(false);

  const [categories, setcategories] = useState([
    Category(
      "omelettes",
      [
        CustomOption("sardine", 200),
        CustomOption("saucisson", 100),
        CustomOption("spaghetti", 100),
      ],
      [Food_dish("oeuf simple", "", 200)]
    ),
    Category(
      "salades",
      [
        CustomOption("mayonnaise"),
        CustomOption("lait"),
        CustomOption("tomates"),
        CustomOption("moutarde"),
      ],
      [Food_dish("purée d'avocats", "", 700)]
    ),
    Category(
      "burgers",
      [
        CustomOption("oignon"),
        CustomOption("tomates"),
        CustomOption("moutarde"),
        CustomOption("mayonnaise"),
        CustomOption("ketchup"),
      ],
      [
        Food_dish(
          "burger simple",
          "Notre burger classique au fromage Jack, viande de bœuf, une laitue croustillante, un oignon rouge et une sauce burger.",
          1500
        ),
        Food_dish(
          "crispy chicken burger",
          "Un filet de poulet frit bien assaisonné et croustillant, nappé d'une sauce spéciale pour hamburger, garni d'une tranche de fromage, terminé par de la laitue romaine et placé dans un petit pain Broiche moelleux.",
          1500
        ),
        Food_dish(
          "cheeseburger",
          "Le cheeseburger classique. Une galette 100% bœuf, une tranche de fromage Jack, des oignons rouges en dés, des cornichons, de la moutarde et beaucoup de ketchup.",
          1500
        ),
      ]
    ),
    Category(
      "accompagnements",
      [],
      [
        Food_dish("frites de pommes", "1 portion", 500),
        Food_dish("frites de plantain", "1 portion", 500),
        Food_dish("pain", "", 50),
      ]
    ),
    Category(
      "boissons chaudes",
      [
        CustomOption("sucre"),
        CustomOption("matinal"),
        CustomOption("ovaltine"),
      ],
      [
        Food_dish("café", "1 tasse", 200),
        Food_dish("lait", "1 tasse", 200),
        Food_dish("thé", "1 tasse", 200),
        Food_dish("café au lait", "1 tasse", 200),
      ]
    ),
    Category(
      "jus naturel",
      [],
      [
        Food_dish("jus de baobab", "1l", 1200),
        Food_dish("jus de papaye", "1l", 1200),
        Food_dish("jus d'ananas", "1l", 1200),
      ]
    ),
    Category(
      "viandes",
      [CustomOption("mayonnaise"), CustomOption("piment")],
      [
        Food_dish("poulet", "1/4 poulet", 1500),
        Food_dish("beefteck", "1 portion", 1500),
      ]
    ),
  ]);

  useEffect(() => {
    // console.log(db);
    // console.log(categories);
    document.addEventListener("click", hideMenu);
    return () => {
      document.removeEventListener("click", hideMenu);
    };
  });

  function toggleMenu(e) {
    setshowmenu(!showmenu);
  }

  function hideMenu(e) {
    if (e.target.classList.contains("menuBackground")) setshowmenu(false);
  }

  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <button id="commander" onClick={toggleMenu}>
          Voir le Menu et Commander
        </button>
      </div>

      {showmenu && <Menu categories={categories} />}
    </div>
  );
};

export default Header;
