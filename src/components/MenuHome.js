import { motion, AnimatePresence } from "framer-motion";
import menuImage from "../images/burger_frites.jpg";
import "../styles/MenuHome.css";

const MenuHome = (props) => {
  const domcategories = props.domcategories;
  const showdetails = props.showdetails;
  const closedetails = props.closedetails;
  const domcustomisationOptions = props.domcustomisationOptions;
  const handleInputChange = props.handleInputChange;
  const command = props.command;
  const fixQuantity = props.fixQuantity;
  const addToCart = props.addToCart;
  return (
    <div>
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
              transition={{ duration: 0.1 }}
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
            <motion.div
              className="commandDetails"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
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
                  max={999}
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
                  Ajouter à La Carte
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuHome;
