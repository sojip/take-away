import OmelettesImage from "../images/omelettes.jpg";
import SaladImage from "../images/salades.jpg";

// import SaladImage from "../images/istockphoto-185119929-612x612.jpg";
import BurgerImage from "../images/burger.jpg";
import AccompImage from "../images/accompagnements.JPG";
import HotDrinks from "../images/hot_drink.jpg";
import NaturalJuice from "../images/pexels-kindel-media-8215115.jpeg";
import MeatImage from "../images/2673353.jpg";

const Category = function (name, custom_options, foods, img) {
  return { name, custom_options, foods, img };
};

const Food_dish = function (name, description, price) {
  return { name, description, price };
};

const CustomOption = function (name, price = 0) {
  return { name, price };
};

const categories = [
  Category(
    "omelettes",
    [
      CustomOption("sardine", 200),
      CustomOption("saucisson", 100),
      CustomOption("spaghetti", 100),
    ],
    [Food_dish("oeuf simple", "", 200)],
    OmelettesImage
  ),
  Category(
    "salades",
    [
      CustomOption("mayonnaise"),
      CustomOption("lait"),
      CustomOption("tomates"),
      CustomOption("moutarde"),
    ],
    [Food_dish("purée d'avocats", "", 700)],
    SaladImage
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
    ],
    BurgerImage
  ),
  Category(
    "accompagnements",
    [],
    [
      Food_dish("frites de pommes", "1 portion", 500),
      Food_dish("frites de plantain", "1 portion", 500),
      Food_dish("pain", "", 50),
    ],
    AccompImage
  ),
  Category(
    "boissons chaudes",
    [CustomOption("sucre"), CustomOption("matinal"), CustomOption("ovaltine")],
    [
      Food_dish("café", "1 tasse", 200),
      Food_dish("lait", "1 tasse", 200),
      Food_dish("thé", "1 tasse", 200),
      Food_dish("café au lait", "1 tasse", 200),
    ],
    HotDrinks
  ),
  Category(
    "jus naturel",
    [],
    [
      Food_dish("jus de baobab", "1l", 1200),
      Food_dish("jus de papaye", "1l", 1200),
      Food_dish("jus d'ananas", "1l", 1200),
    ],
    NaturalJuice
  ),
  Category(
    "viandes",
    [CustomOption("mayonnaise"), CustomOption("piment")],
    [
      Food_dish("poulet", "1/4 poulet", 1500),
      Food_dish("beefteck", "1 portion", 1500),
    ],
    MeatImage
  ),
];

export { categories };
