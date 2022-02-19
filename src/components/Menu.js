import "../styles/Menu.css";
import menu from "../images/menu.png";
import cart from "../images/shopping-cart.png";
import menuImage from "../images/burger_frites.jpg";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Menu = (props) => {
  const [showdetails, setshowdetails] = useState(false);

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
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className="foodName">{food.name}</div>
                    <div className="foodPrice">{food.price}</div>
                  </div>
                  <div className="foodDescription">{food.description}</div>
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
    // console.log(categories);
    const menu = document.querySelector("#menu");
    menu.addEventListener("scroll", changeHeaderOpacity);

    const selected = document.querySelector(".selected");

    return () => {
      const menu = document.querySelector("#menu");
      menu.removeEventListener("scroll", changeHeaderOpacity);
    };
  }, []);

  function scrollIfNeeded(element, container) {
    if (element.offsetTop < container.scrollTop) {
      container.scrollTop = element.offsetTop + 140;
    } else {
      console.log("here");

      const offsetBottom = element.offsetTop + element.offsetHeight;
      const scrollBottom = container.scrollTop + container.offsetHeight;
      if (offsetBottom > scrollBottom) {
        container.scrollTop = offsetBottom - container.offsetHeight;
      }
    }
  }

  function handleFoodSelection(e) {
    let food = e.currentTarget;

    let foodname = food.firstChild.childNodes[0];
    let foodprice = food.firstChild.childNodes[1];
    let foodDescription = food.childNodes[1];

    const header = document.querySelector(".menuHeader");
    const menu = document.querySelector("#menu");
    const food_dish = e.currentTarget.firstChild.firstChild.textContent;
    const category = e.currentTarget.parentNode.previousSibling.textContent;
    food.classList.add("selected");
    // food.nextElementSibling.style.marginTop = `${food.offsetHeight}px`;

    //media query
    if (window.screen.width < 610) {
      //   menu.scrollTop = food.offsetTop + 140;
      //   scrollIfNeeded(food, menu);
    } else {
      console.log(`menu offsetheight ${menu.offsetHeight}`);
      console.log(`food offsettop ${food.offsetTop}`);

      //   const y = menu.offsetHeight + food.offsetTop;
      //   food.style.top = `${menu.scrollTop + menu.offsetHeight/2}px`;
      //   menu.scrollTo({ top: food.offsetTop });

      //   menu.scrollTop = `${menu.scrollTop + menu.offsetHeight / 2}px`;

      //   menu.scrollTop = `${menu.scrollTop}px`;
      //   food.style.top = `${food.scrollTop}px`;
      //   food.scrollIntoView({
      //     behavior: "smooth",
      //     block: "center",
      //     inline: "nearest",
      //   });
    }

    header.classList.add("scrolled");
    setshowdetails(true);
    foodname.classList.add("selected");
    foodprice.classList.add("selected");
    foodDescription.classList.add("selected");
    // menu.style.overflowY = "hidden";
  }

  function closedetails(e) {
    const header = document.querySelector(".menuHeader");
    const menu = document.querySelector("#menu");
    let selected = document.querySelector(".selected");
    let foodname = selected.firstChild.childNodes[0];
    let foodprice = selected.firstChild.childNodes[1];
    let foodDescription = selected.childNodes[1];

    if (e.target === e.currentTarget) {
      selected.classList.remove("selected");
      foodname.classList.remove("selected");
      foodprice.classList.remove("selected");
      foodDescription.classList.remove("selected");
      setshowdetails(false);

      if (menu.scrollTop < 250) header.classList.remove("scrolled");
      menu.style.overflowY = "auto";
    }
    return;
  }

  const changeHeaderOpacity = () => {
    const menu = document.querySelector("#menu");
    const header = document.querySelector(".menuHeader");
    if (document.querySelector(".selected")) {
      header.classList.add("scrolled");
      return;
    }
    if (menu.scrollTop > 250) {
      header.classList.add("scrolled");
      return;
    }
    header.classList.remove("scrolled");
    // header.style.opacity = "0.5";
  };

  return (
    <div className="menuBackground">
      <div id="menu">
        <div className="menuHeader">
          <div>Take Away</div>
          <div className="menuOptions">
            <div>
              <img src={menu} alt="menu" />
            </div>
            <div>
              <img src={cart} alt="cart" />
            </div>
          </div>
        </div>
        <div
          className="menuHero"
          style={{
            backgroundImage: `url(${menuImage})`,
            // backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div style={{ padding: "15px" /*position: "relative"*/ }}>
          <ul className="categories">{domcategories}</ul>
        </div>

        <AnimatePresence>
          {showdetails && (
            <motion.div
              className="detailswrapper"
              onClick={closedetails}
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="commandDetails">voula</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Menu;
