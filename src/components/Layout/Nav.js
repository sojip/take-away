import { motion, AnimatePresence } from "framer-motion";
import BackIcon from "../../images/icons/back.png";
import MapIcon from "../../images/icons/map.png";
import CartIcon from "../../images/icons/cart.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

const Icon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: red;
  height: 40px;
  text-transform: uppercase;
  font-weight: bold;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Nav = () => {
  const [hasBeenScrolled, setHasBeenScrolled] = useState(false);

  const reset = () => {};
  return (
    <Navigation>
      <Wrapper>
        <Icon src={BackIcon} alt="back" />
        <div className="logo">Take Away</div>
      </Wrapper>
      <Wrapper>
        <NavLink to="/map">
          <img src={MapIcon} alt="map" />
        </NavLink>
        <NavLink to="/cart">
          <img src={CartIcon} alt="cart" />
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
        </NavLink>
      </Wrapper>
    </Navigation>
  );
};
