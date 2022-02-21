import "../styles/Cart.css";
import Logo from "../images/burger_.jpg";
import contactImage from "../images/user.png";
import optionImage from "../images/choice.png";
import clockImage from "../images/clock.png";
import paymentImage from "../images/wallet.png";
import editImage from "../images/edit.png";
import { useContext, useEffect } from "react";
import { CartContext } from "./Menu";

// const logo = require("../images/logo.png");

const Cart = (props) => {
  const shoppingcart = useContext(CartContext);
  useEffect(() => {
    // document.querySelector(".back").display = "block";
    document.querySelector(".menuOptions").classList.add("hidden");
    document.querySelector(".menuHeader").classList.add("scrolled");
    console.log(shoppingcart);
  });
  return (
    <div className="cartWrapper">
      <div className="cart">{/* <img scr={contactImage} alt="" /> */}</div>

      <div className="customer">
        <div className="icons">
          <img src={contactImage} alt="" />
        </div>
        <div className="customerdetails">
          <span>contact</span>
          <div className="edition">
            <input
              name="name"
              type="text"
              placeholder="Veuillez entrer votre nom"
            />{" "}
            <br />
            <input name="tel" type="tel" placeholder="Numero de telephone" />
          </div>
        </div>

        <div className="icons">
          <img src={optionImage} alt="" />
        </div>
        <div className="commandType">
          <span>option de commande</span>
          <div className="edition">
            <label htmlFor="emporter">
              <input
                type="radio"
                name="commandType"
                value="emporter"
                id="emporter"
              />
              emporter
            </label>
            <br />
            <label htmlFor="livraison">
              <input
                type="radio"
                name="commandType"
                value="livraison"
                id="livraison"
              />
              livraison
            </label>
          </div>
        </div>

        <div className="icons">
          <img src={clockImage} alt="" />
        </div>
        <div className="commandTime">
          <span>choisissez l'heure</span>
          {/* <img scr={editImage} alt="" /> */}

          <div className="edition">
            <label htmlFor="desquepossible">
              <input
                type="radio"
                name="commandTime"
                value="desquepossible"
                id="desquepossible"
              />
              dès que possible
            </label>
            <br />
            <label htmlFor="plustard">
              <input
                type="radio"
                name="commandTime"
                value="plustard"
                id="plustard"
              />
              plus tard
            </label>
          </div>
        </div>

        <div className="icons">
          <img src={paymentImage} alt="" />
        </div>

        <div className="paymentMode">
          <span>mode de paiement</span>
          {/* <img scr={editImage} alt="" /> */}

          <div className="edition">
            <label htmlFor="om">
              <input type="radio" name="paymentMode" value="om" id="om" />
              orange money
            </label>
            <br />
            <label htmlFor="momo">
              <input type="radio" name="paymentMode" value="momo" id="momo" />
              mtn money
            </label>
            <br />
            <label htmlFor="especes">
              <input
                type="radio"
                name="paymentMode"
                value="especes"
                id="especes"
              />
              en espèces
            </label>
          </div>
        </div>
      </div>

      <div className="cartfooter">commandez</div>
    </div>
  );
};

export default Cart;
