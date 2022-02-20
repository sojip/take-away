import "../styles/Menu.css";
import menu from "../images/menu.png";
import cart from "../images/shopping-cart.png";
import menuImage from "../images/burger_frites.jpg";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Backbutton from "../images/back_icon.png";
const _ = require("lodash");

const Menu = (props) => {
  const [showdetails, setshowdetails] = useState(false);
  const [command, setcommand] = useState({});
  const [shoppingcart, setshoppingcart] = useState([]);
  let domcustomisationOptions;

  // Create a condition that targets viewports at least 800px wide
  const mediaQuery = window.matchMedia("(max-width: 800px)");

  const categories = props.categories;
  const domcategories = categories.map((category) => {
    return (
      <CatItem
        category={category}
        categories={categories}
        handleTabletChange={handleTabletChange}
        setcommand={setcommand}
        setshowdetails={setshowdetails}
        key={categories.indexOf(category)}
      />
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

    console.log(command);
    return () => {
      menu.removeEventListener("scroll", changeHeaderOpacity);
      mediaQuery.removeListener(handleTabletChange);
    };
  }, [command, cart]);

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
    document.querySelector(".menuHeader").style.paddingLeft = "2vw";
    selected.classList.remove("selected");
    foodWrapper.classList.remove("selected");
    setshowdetails(false);
    if (menu.scrollTop < 250) header.classList.remove("scrolled");
  }

  function handleOptionChange(e) {
    let id = e.target.id;
    setcommand({
      ...command,
      options: command.options.map((option) => {
        if (option.name === id) option.checked = !option.checked;
        return option;
      }),
    });
  }

  function handleInputChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    setcommand({ ...command, [name]: value });
  }

  function addToCart() {
    const _command = _.cloneDeep(command);
    _command.options = _command.options.filter((option) => {
      return option.checked === true;
    });
    // console.log(
    //   _command.options.reduce((acc, curVal) => acc + curVal.price, 0)
    // );
    setshoppingcart([...shoppingcart, _command]);
    backToMenu();
  }

  function fixQuantity(e) {
    let value = e.target.value;
    if (value === "") {
      const _command = _.cloneDeep(command);
      _command.quantity = 1;
      setcommand(_command);
    }
  }

  if (command.options) {
    domcustomisationOptions = command.options.map((option) => {
      return (
        <div key={command.options.indexOf(option)} className="option">
          <label htmlFor={option}>
            <input
              type="checkbox"
              id={option.name}
              checked={option.checked}
              onChange={handleOptionChange}
            />
            {option.name}
          </label>
          {option.price !== undefined && (
            <span className="optionPrice">{option.price}</span>
          )}
        </div>
      );
    });
  }

  return (
    <div className="menuBackground">
      <div id="menu">
        <div className="menuHeader">
          <div className="logoWrapper">
            <AnimatePresence>
              <motion.div
                className="back"
                onClick={backToMenu}
                initial={{ x: -5, y: 0 }}
                animate={{ x: 0, y: 0 }}
                exit={{ x: -300, opacity: 0 }}
              >
                <img src={Backbutton} id="backbutton" alt="back" />
              </motion.div>
            </AnimatePresence>

            <div>Take Away</div>
          </div>
          <div className="menuOptions">
            <div>
              <img src={menu} alt="menu" />
            </div>
            <div>
              <img src={cart} alt="cart" />
              {shoppingcart.length > 0 && (
                <motion.span
                  className="notificationsCount"
                  initial={{ x: 0, y: -100 }}
                  animate={{ x: 0, y: 0 }}
                >
                  {shoppingcart.length}
                </motion.span>
              )}
            </div>
          </div>
        </div>
        <motion.div
          className="menuHero"
          style={{
            backgroundImage: `url(${menuImage})`,
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
                    onChange={handleInputChange}
                  ></textarea>
                  <div style={{ marginBottom: "15px" }}>Quantité</div>
                  <input
                    type="number"
                    name="quantity"
                    value={command.quantity}
                    min="1"
                    onChange={handleInputChange}
                    onBlur={fixQuantity}
                  />
                </div>

                <div className="addtocartwrapper">
                  <button id="addToCart" onClick={addToCart}>
                    <span className="commandTotal">
                      {command.price * command.quantity +
                        command.options
                          .filter((option) => option.checked)
                          .reduce((acc, curVal) => acc + curVal.price, 0)}
                    </span>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const CatItem = (props) => {
  const category = props.category;
  const categories = props.categories;
  const handleTabletChange = props.handleTabletChange;
  const setcommand = props.setcommand;
  const setshowdetails = props.setshowdetails;
  // Create a condition that targets viewports at least 800px wide
  const mediaQuery = window.matchMedia("(max-width: 800px)");

  function handleFoodSelection(e) {
    let food = e.currentTarget;
    let foodWrapper = food.firstChild;
    const category = e.currentTarget.parentNode.previousSibling.textContent;
    const header = document.querySelector(".menuHeader");
    const food_dish = food.firstChild.firstChild.firstChild.textContent;
    let selectedcategoy = categories.find((cat) => cat.name === category);
    let selectedfood = selectedcategoy.foods.find(
      (food_) => food_.name === food_dish
    );
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
    //add command
    const _command = _.cloneDeep(selectedfood);
    _command.options = selectedcategoy.custom_options.map((option) => {
      //   return { name: option, checked: false };
      const option_ = _.cloneDeep(option);
      option_.checked = false;
      return option_;
    });
    _command.instructions = "";
    _command.quantity = 1;
    setcommand(_command);
  }

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
};

export default Menu;
