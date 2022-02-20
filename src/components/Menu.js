import "../styles/Menu.css";
import menu from "../images/menu.png";
import cart from "../images/shopping-cart.png";
import menuImage from "../images/burger_frites.jpg";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Backbutton from "../images/back_icon.png";

const Menu = (props) => {
  const [showdetails, setshowdetails] = useState(false);
  const [command, setcommand] = useState({});

  let domcustomisationOptions;
  // Create a condition that targets viewports at least 800px wide
  const mediaQuery = window.matchMedia("(max-width: 800px)");
  function handleTabletChange(e) {
    let backdiv = document.querySelector(".back");
    // Check if the media query is true
    if (e.matches) {
      let selected = document.querySelector(".food.selected");
      if (selected) {
        backdiv.style.display = "block";
        document.querySelector(".menuHeader").style.paddingLeft = 0;
        return true;
      }
    }
    backdiv.style.display = "none";
    document.querySelector(".menuHeader").style.paddingLeft = "2vw";
    return false;
  }
  const categories = props.categories;
  const domcategories = categories.map((category) => {
    return (
      <li className="category" key={categories.indexOf(category)}>
        <div className="infos">
          <div className="categoryName">{category.name}</div>
          <ul className="foods">
            {category.foods.map((food) => {
              return (
                <motion.li
                  className="food"
                  onClick={handleFoodSelection}
                  key={category.foods.indexOf(food)}
                  initial={{ x: 0, y: 10 }}
                  animate={{ x: 0, y: 0 }}
                >
                  <div className="foodWrapper">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="foodName">{food.name}</div>
                      <div className="foodPrice">{food.price}</div>
                    </div>
                    <div className="foodDescription">{food.description}</div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
        <div className="picture"></div>
      </li>
    );
  });

  useEffect(() => {
    //change menu Header background on scroll
    const menu = document.querySelector("#menu");
    menu.addEventListener("scroll", changeHeaderOpacity);

    // Register media query event listener
    mediaQuery.addListener(handleTabletChange);

    // Initial check
    handleTabletChange(mediaQuery);

    return () => {
      menu.removeEventListener("scroll", changeHeaderOpacity);
      mediaQuery.removeListener(handleTabletChange);
    };
  }, []);

  function handleFoodSelection(e) {
    let food = e.currentTarget;
    let foodWrapper = food.firstChild;
    let backdiv = document.querySelector(".back");
    const header = document.querySelector(".menuHeader");
    const menu = document.querySelector("#menu");
    const category = e.currentTarget.parentNode.previousSibling.textContent;

    //change header background
    header.classList.add("scrolled");
    //change bacground color of element
    food.classList.add("selected");
    //change padding of element
    foodWrapper.classList.add("selected");
    //show details of selection
    setshowdetails(true);
    // show back button if resolution is under 800px
    handleTabletChange(mediaQuery);
  }

  function closedetails(e) {
    const header = document.querySelector(".menuHeader");
    const menu = document.querySelector("#menu");
    let selected = document.querySelector(".food.selected");
    let foodWrapper = document.querySelector(".foodWrapper.selected");

    if (e.target === e.currentTarget) {
      selected.classList.remove("selected");
      foodWrapper.classList.remove("selected");
      setshowdetails(false);
      if (menu.scrollTop < 250) header.classList.remove("scrolled");
    }
    return;
  }

  const changeHeaderOpacity = () => {
    const menu = document.querySelector("#menu");
    const header = document.querySelector(".menuHeader");
    if (menu.scrollTop > 250) {
      header.classList.add("scrolled");
      return;
    }
    header.classList.remove("scrolled");
  };

  function backToMenu() {
    const menu = document.querySelector("#menu");
    let backdiv = document.querySelector(".back");
    let header = document.querySelector(".menuHeader");
    let selected = document.querySelector(".food.selected");
    let foodWrapper = document.querySelector(".foodWrapper.selected");
    backdiv.style.display = "none";
    selected.classList.remove("selected");
    foodWrapper.classList.remove("selected");
    setshowdetails(false);

    if (menu.scrollTop < 250) header.classList.remove("scrolled");
    document.querySelector(".menuHeader").style.paddingLeft = "2vw";
  }

  if (showdetails) {
    //find selected food an category
    let food = document.querySelector(".food.selected");
    const food_dish = food.firstChild.firstChild.firstChild.textContent;
    let category = food.parentNode.previousSibling.textContent;
    let selectedcategoy = categories.find((cat) => cat.name === category);
    let selectedfood = selectedcategoy.foods.find(
      (food_) => food_.name === food_dish
    );
    domcustomisationOptions = selectedcategoy.custom_options.map((option) => {
      return (
        <div
          key={selectedcategoy.custom_options.indexOf(option)}
          className="option"
        >
          <label htmlFor={option}>
            <input type="checkbox" id={option} />
            {option}
          </label>
        </div>
      );
    });
    console.log(selectedfood);
  }

  return (
    <div className="menuBackground">
      <div id="menu">
        <div className="menuHeader">
          <div className="logoWrapper">
            <div className="back" onClick={backToMenu}>
              <img src={Backbutton} id="backbutton" alt="back" />
            </div>
            <div>Take Away</div>
          </div>
          <div className="menuOptions">
            <div>
              <img src={menu} alt="menu" />
            </div>
            <div>
              <img src={cart} alt="cart" />
            </div>
          </div>
        </div>
        <motion.div
          className="menuHero"
          style={{
            backgroundImage: `url(${menuImage})`,
            // backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        ></motion.div>
        <div className="categoriesWrapper">
          <ul className="categories">{domcategories}</ul>
        </div>

        <AnimatePresence>
          {showdetails && (
            <div>
              <motion.div
                className="detailswrapper"
                onClick={closedetails}
                key="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mobilecommandDetails">
                  <div className="content"></div>
                  <div className="content"></div>
                  <div className="content"></div>
                  <div className="content"></div>
                  <div className="content"></div>
                  <div className="content"></div>
                  <div className="content"></div>
                  <div className="content"></div>
                  <div className="content"></div>
                  <div className="content"></div>
                </div>
              </motion.div>
              <div className="commandDetails">
                <div className="customisation">
                  <div className="selectedDescription"></div>
                  <div style={{ marginBottom: "15px" }}>
                    Customisez votre repas:
                  </div>
                  {domcustomisationOptions}
                  <div style={{ marginBottom: "15px", marginTop: "15px" }}>
                    Instructions spéciales
                  </div>
                  <textarea
                    name="instructions"
                    id="instructions"
                    placeholder="Exemple: pas de poivre/sucre/sel svp"
                    rows="3"
                  ></textarea>
                  <div style={{ marginBottom: "15px" }}>Quantité</div>
                  <input type="number" value="1" />
                </div>

                <div className="addtocartwrapper">
                  <button id="addToCart">Add To Cart</button>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Menu;
