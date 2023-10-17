import styled from "styled-components";
import { motion } from "framer-motion";
import BackIcon from "../../images/icons/back.png";
import MapIcon from "../../images/icons/map.png";
import CartIcon from "../../images/icons/cart.png";
import { Link, useNavigate } from "react-router-dom";

const Navigation = styled.nav`
  position: fixed;
  top: 2.5%;
  width: 95%;
  max-width: 700px;
  display: flex;
  height: 40px;
  text-transform: uppercase;
  font-weight: bold;
  -webkit-box-shadow: 0 8px 6px -6px black;
  -moz-box-shadow: 0 8px 6px -6px black;
  box-shadow: 0 8px 6px -6px black;
  z-index: 99;
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
  background-color: white;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const Title = styled.div`
  flex: 1;
  padding-left: 1vw;
  display: flex;
  align-items: center;
  transition: background-color 200ms ease-in-out;
  background-color: ${(props) =>
    props.$isTransparent === true
      ? `rgba(255,255,255,0.7)`
      : `rgba(255,255,255,1)`};
`;

const Count = styled.span`
  position: absolute;
  top: 2px;
  right: 12px;
  padding: 4px 5px;
  font-size: 7px;
  border-radius: 50%;
  background: red;
  color: white;
`;

export const Nav = ({ isTransparent, shoppingcart, isVisible }) => {
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
      <Title $isTransparent={isTransparent}>Take Away</Title>
      {isVisible && (
        <>
          <LINK to="/map">
            <NavIcon>
              <img src={MapIcon} alt="map" />
            </NavIcon>
          </LINK>
          <LINK to="/cart">
            <NavIcon>
              <img src={CartIcon} alt="cart" />
            </NavIcon>
            {shoppingcart.length > 0 && (
              <Count
                as={motion.div}
                initial={{ x: 0, y: -100 }}
                animate={{ x: 0, y: 0 }}
                key={shoppingcart.length}
              >
                {shoppingcart.length}
              </Count>
            )}
          </LINK>
        </>
      )}
    </Navigation>
  );
};
