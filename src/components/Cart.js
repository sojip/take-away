import { useContext, useEffect, useState } from "react";
import { CartContext } from "./Menu";
import Burger from "../images/salad.PNG";
import contactImage from "../images/user.png";
import optionImage from "../images/choice.png";
import clockImage from "../images/clock.png";
import paymentImage from "../images/wallet.png";
import editImage from "../images/edit.png";
import deleteIcon from "../images/delete.png";
import "../styles/Cart.css";

const Cart = (props) => {
  let cartelements;
  const { shoppingcart, setshoppingcart } = useContext(CartContext);
  const [datas, setdatas] = useState({
    name:
      localStorage.getItem("name") !== null ? localStorage.getItem("name") : "",
    tel:
      localStorage.getItem("tel") !== null ? localStorage.getItem("tel") : "",
    commandType:
      localStorage.getItem("commandType") !== null
        ? localStorage.getItem("commandType")
        : "",
    commandTime:
      localStorage.getItem("commandTime") !== null
        ? localStorage.getItem("commandTime")
        : "",
    paymentMode:
      localStorage.getItem("paymentMode") !== null
        ? localStorage.getItem("paymentMode")
        : "",
  });
  useEffect(() => {
    // document.querySelector(".back").display = "block";
    document.querySelector(".menuOptions").classList.add("hidden");
    document.querySelector(".menuHeader").classList.add("scrolled");
    console.log(shoppingcart);

    //cart datas
  }, [datas]);

  if (shoppingcart.length > 0) {
    cartelements = shoppingcart.map((element) => {
      return (
        <tr key={shoppingcart.indexOf(element)}>
          <td>x {element.quantity}</td>
          <td>
            <div>{element.name}</div>
            <ul>
              {element.options.map((option) => {
                return (
                  <li key={element.options.indexOf(option)}>{option.name}</li>
                );
              })}
            </ul>
          </td>
          <td>
            <div>
              <span>
                {element.quantity * element.price}
                <img
                  onClick={deleteItemFromCart}
                  data-index={shoppingcart.indexOf(element)}
                  className="deleteIcon"
                  src={deleteIcon}
                  alt="delete"
                />
              </span>
            </div>
            {element.options.map((option) => {
              return <div>{option.price}</div>;
            })}
          </td>
        </tr>
      );
    });
  }

  const handleEdit = (e) => {
    let options = e.target.dataset.options;
    let edition = document.querySelector(`.edition[data-options=${options}]`);
    let save = document.querySelector(`.saveButton[data-options=${options}]`);
    let storagedatas = document.querySelector(
      `.localStorageDatas[data-options=${options}]`
    );
    // console.log(options);
    // console.log(edition);
    // console.log(save);

    //hide local storage datas
    storagedatas.classList.add("hidden");
    //show inputs for edition
    edition.classList.add("show");
    //show save button
    save.classList.add("show");
    //hide edit button
    e.target.style.display = "none";
  };

  const handleSave = (e) => {
    let options = e.target.dataset.options;
    let edit = document.querySelector(`.editButton[data-options=${options}]`);

    let edition = document.querySelector(`.edition[data-options=${options}]`);
    let storagedatas = document.querySelector(
      `.localStorageDatas[data-options=${options}]`
    );
    //hide inputs for edition
    edition.classList.remove("show");
    //hide save button
    e.target.classList.remove("show");
    //show edit button
    edit.style.display = "block";
    //show local storage datas
    storagedatas.classList.remove("hidden");
  };

  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setdatas({ ...datas, [name]: value });
    localStorage.setItem(name, value);
  };

  function deleteItemFromCart(e) {
    let index = e.target.dataset.index;
    setshoppingcart(
      shoppingcart.filter((element) => {
        return shoppingcart.indexOf(element) !== Number(index);
      })
    );
  }

  function commander() {}

  return (
    <div className="cartWrapper">
      <div className="cartResume">
        <table>
          <thead>
            <tr className="tableHeader">
              <th>Qté</th>
              <th>Article</th>
              <th>Prix</th>
            </tr>
          </thead>
          <tbody>{cartelements}</tbody>
          <tfoot>
            <tr>
              <td colSpan={2}>Sous total</td>
              <td>
                {shoppingcart.reduce((total, element) => {
                  return (
                    total +
                    element.quantity * element.price +
                    element.options.reduce((totalOptions, options) => {
                      return totalOptions + options.price;
                    }, 0)
                  );
                }, 0)}
              </td>
            </tr>
            <tr>
              <td colSpan={2}>Frais de livraison</td>
              <td>$180</td>
            </tr>
            <tr className="totalRow">
              <td colSpan={2}>Total</td>
              <td>$180</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="customer">
        <div className="icons">
          <img src={contactImage} alt="" />
        </div>
        <img
          className="editButton"
          onClick={handleEdit}
          src={editImage}
          alt=""
          data-options="contact"
        />
        <span
          className="saveButton"
          onClick={handleSave}
          data-options="contact"
        >
          Enregistrer
        </span>

        <div className="customerdetails">
          <span>contact</span>
          <div className="localStorageDatas" data-options="contact">
            <div>{datas.name}</div>
            <div>{datas.tel}</div>
          </div>

          <div className="edition" data-options="contact">
            <input
              name="name"
              type="text"
              placeholder="Veuillez entrer votre nom"
              onChange={handleInputChange}
              value={datas.name}
            />{" "}
            <br />
            <input
              onChange={handleInputChange}
              name="tel"
              type="tel"
              placeholder="Numero de telephone"
              value={datas.tel}
            />
          </div>
        </div>

        <div className="icons">
          <img src={optionImage} alt="" />
        </div>
        <img
          className="editButton"
          onClick={handleEdit}
          src={editImage}
          alt=""
          data-options="commandType"
        />
        <span
          className="saveButton"
          onClick={handleSave}
          data-options="commandType"
        >
          Enregistrer
        </span>

        <div className="commandType">
          <span>option de commande</span>
          <div className="localStorageDatas" data-options="commandType">
            <div>{datas.commandType}</div>
          </div>
          <div className="edition" data-options="commandType">
            <label htmlFor="emporter">
              <input
                type="radio"
                name="commandType"
                value="emporter"
                id="emporter"
                onChange={handleInputChange}
                checked={datas.commandType === "emporter"}
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
                onChange={handleInputChange}
                checked={datas.commandType === "livraison"}
              />
              livraison
            </label>
          </div>
        </div>

        <div className="icons">
          <img src={clockImage} alt="" />
        </div>
        <img
          className="editButton"
          onClick={handleEdit}
          src={editImage}
          alt=""
          data-options="commandTime"
        />

        <span
          className="saveButton"
          onClick={handleSave}
          data-options="commandTime"
        >
          Enregistrer
        </span>

        <div className="commandTime">
          <span>choisissez l'heure</span>
          <div className="localStorageDatas" data-options="commandTime">
            <div>{datas.commandTime}</div>
          </div>

          <div className="edition" data-options="commandTime">
            <label htmlFor="desquepossible">
              <input
                onChange={handleInputChange}
                type="radio"
                name="commandTime"
                value="dès que possible"
                id="desquepossible"
                checked={datas.commandTime === "dès que possible"}
              />
              dès que possible
            </label>
            <br />
            <label htmlFor="plustard">
              <input
                onChange={handleInputChange}
                type="radio"
                name="commandTime"
                value="plus tard"
                id="plustard"
                checked={datas.commandTime === "plus tard"}
              />
              plus tard
            </label>
          </div>
        </div>

        <div className="icons">
          <img src={paymentImage} alt="" />
        </div>
        <img
          className="editButton"
          onClick={handleEdit}
          src={editImage}
          alt=""
          data-options="paymentMode"
        />
        <span
          className="saveButton"
          onClick={handleSave}
          data-options="paymentMode"
        >
          Enregistrer
        </span>

        <div className="paymentMode">
          <span>mode de paiement</span>
          <div className="localStorageDatas" data-options="paymentMode">
            <div>{datas.paymentMode}</div>
          </div>

          <div className="edition" data-options="paymentMode">
            <label htmlFor="om">
              <input
                onChange={handleInputChange}
                type="radio"
                name="paymentMode"
                value="orange money"
                id="om"
                checked={datas.paymentMode === "orange money"}
              />
              orange money
            </label>
            <br />
            <label htmlFor="momo">
              <input
                onChange={handleInputChange}
                type="radio"
                name="paymentMode"
                value="mtn money"
                id="momo"
                checked={datas.paymentMode === "mtn money"}
              />
              mtn money
            </label>
            <br />
            <label htmlFor="especes">
              <input
                onChange={handleInputChange}
                type="radio"
                name="paymentMode"
                value="especes"
                id="especes"
                checked={datas.paymentMode === "especes"}
              />
              en espèces
            </label>
          </div>
        </div>
      </div>

      <div className="cartfooter">
        <button id="validcommand" onClick={commander}>
          <span className="commandTotal">{}</span>
          Commander
        </button>
      </div>
    </div>
  );
};

export default Cart;
