import { motion, AnimatePresence } from "framer-motion";
import BackIcon from "../../images/icons/back.png";
import MapIcon from "../../images/icons/map.png";
import CartIcon from "../../images/icons/cart.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

const Navigation = styled.nav`
  display: flex;
  height: 40px;
  text-transform: uppercase;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.5);
  transition: all 250ms ease-in-out;
  -webkit-box-shadow: 0 8px 6px -6px black;
  -moz-box-shadow: 0 8px 6px -6px black;
  box-shadow: 0 8px 6px -6px black;
`;

const LINK = styled(Link)`
  text-decoration: none;
  display: flex;
`;

const NavIcon = styled.div`
  cursor: pointer;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

export const Nav = () => {
  const [hasBeenScrolled, setHasBeenScrolled] = useState(false);
  const navigate = useNavigate();
  return (
    <Navigation>
      <NavIcon
        onClick={() => {
          navigate(-1);
        }}
      >
        <Icon src={BackIcon} alt="back" />
      </NavIcon>
      <div
        style={{
          flex: "1 0 0",
          paddingLeft: "1vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        Take Away
      </div>
      <LINK to="/map">
        <NavIcon>
          <img src={MapIcon} alt="map" />
        </NavIcon>
      </LINK>
      <LINK to="/cart">
        <NavIcon>
          <img src={CartIcon} alt="cart" />
        </NavIcon>
        {/* {shoppingcart.length > 0 && (
                    <motion.span
                      className="notificationsCount"
                      initial={{ x: 0, y: -100 }}
                      animate={{ x: 0, y: 0 }}
                      key={shoppingcart.length}
                    >
                      {shoppingcart.length}
                    </motion.span>
                  )} */}
      </LINK>
    </Navigation>
  );
};
