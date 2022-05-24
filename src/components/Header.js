import { useEffect } from "react";
import logo from "../images/logo.png";
import "../styles/Header.css";
import { db } from "../utils/Firebase";
import { Menu } from "./Menu";
import Cart from "./Cart";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Route, Routes, useNavigate } from "react-router-dom";

const Header = () => {
  const [showmenu, setshowmenu] = useState(false);
  let navigate = useNavigate();

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
    if (e.target.classList.contains("menuBackground")) navigate("/");
  }

  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <Link to="menu">
          <button id="commander" onClick={toggleMenu}>
            Voir le Menu et Commander
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
