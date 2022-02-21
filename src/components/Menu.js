import "../styles/Menu.css";
import menu from "../images/menu.png";
import cart from "../images/shopping-cart.png";
import { createContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Backbutton from "../images/back_icon.png";
import { Routes, Route, Link, Outlet, useNavigate } from "react-router-dom";
import CatItem from "./CatItem";
import MenuHome from "./MenuHome";
import Cart from "./Cart";
const _ = require("lodash");

export const CartContext = createContext();

const Menu = (props) => {
  const [showdetails, setshowdetails] = useState(false);
  const [command, setcommand] = useState({});
  const [shoppingcart, setshoppingcart] = useState([]);
  let domcustomisationOptions;
  let navigate = useNavigate();
  const categories = props.categories;
  const domcategories = categories.map((category) => {
    return (
      <CatItem
        category={category}
        categories={categories}
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

    console.log(shoppingcart);
    return () => {
      menu.removeEventListener("scroll", changeHeaderOpacity);
    };
  }, [command, shoppingcart]);

  function closedetails(e) {
    const header = document.querySelector(".menuHeader");
    const menu = document.querySelector("#menu");
    let selected = document.querySelector(".food.selected");
    let foodWrapper = document.querySelector(".foodWrapper.selected");
    if (e.target === e.currentTarget) {
      selected.classList.remove("selected");
      foodWrapper.classList.remove("selected");
      document.querySelector(".menuOptions").classList.remove("hidden");
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
    let cartwrapper = document.querySelector(".cartWrapper");
    if (!selected) {
      if (cartwrapper) {
        navigate(-1);
        document.querySelector(".menuOptions").classList.remove("hidden");
        return;
      }
      navigate("/");
      return;
    }
    document.querySelector(".menuOptions").classList.remove("hidden");
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
    <CartContext.Provider value={shoppingcart}>
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
                  exit={{ x: -100 }}
                >
                  <img src={Backbutton} id="backbutton" alt="back" />
                </motion.div>
              </AnimatePresence>

              <div className="logo">Take Away</div>
            </div>
            <div className="menuOptions">
              <div>
                <img src={menu} alt="menu" />
              </div>
              <div>
                <Link to="cart">
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
                </Link>
              </div>
            </div>
          </div>
          <Outlet context={{ shoppingcart }} />

          <Routes>
            <Route
              index
              element={
                <MenuHome
                  domcategories={domcategories}
                  showdetails={showdetails}
                  closedetails={closedetails}
                  domcustomisationOptions={domcustomisationOptions}
                  handleInputChange={handleInputChange}
                  command={command}
                  fixQuantity={fixQuantity}
                  addToCart={addToCart}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </CartContext.Provider>
  );
};

export { Menu };
