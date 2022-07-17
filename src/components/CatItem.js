import { motion } from "framer-motion";
import _ from "lodash";
import "../styles/CatItem.css";

const CatItem = (props) => {
  const category = props.category;
  const categories = props.categories;
  const setcommand = props.setcommand;
  const setshowdetails = props.setshowdetails;

  function handleFoodSelection(e) {
    let food = e.currentTarget;
    let foodWrapper = food.firstChild;
    const category =
      e.currentTarget.parentNode.previousSibling.previousSibling.textContent;
    const header = document.querySelector(".menuHeader");
    const food_dish = food.firstChild.firstChild.firstChild.textContent;
    let selectedcategoy = categories.find((cat) => cat.name === category);
    let selectedfood = selectedcategoy.foods.find(
      (food_) => food_.name === food_dish
    );
    //change header background
    header.classList.add("scrolled");
    //hide others links
    document.querySelector(".menuOptions").classList.add("hidden");
    //change bacground color of element
    food.classList.add("selected");
    //change padding of element
    foodWrapper.classList.add("selected");
    //show details of selection
    setshowdetails(true);
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
        <div
          className="picture"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${category.img})`,
            // backgroundBlendMode: "overlay",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {/* <img
            src={category.img}
            className="categorypicture"
            alt="category_img"
          /> */}
        </div>
        <ul className="foods">
          {category.foods.map((food) => {
            return (
              <motion.li
                className="food"
                onClick={handleFoodSelection}
                key={category.foods.indexOf(food)}
                initial={{ x: 0, y: 10 }}
                animate={{ x: 0, y: 0 }}
                style={{
                  transition: "all 100ms linear",
                }}
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
    </li>
  );
};

export default CatItem;
