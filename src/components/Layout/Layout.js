import styled, { keyframes } from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import { Nav } from "./Nav";
import { useState, useEffect } from "react";

const fadeIn = keyframes`
from {
  opacity: 0;
  top: -300px;
}
to {
  opacity: 1;
  top: 0;
}
`;
const BackGround = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  position: relative;
  width: 95%;
  max-width: 700px;
  height: 95%;
  background-color: white;
  overflow-x: none;
  overflow-y: auto;
  animation: ${fadeIn} 250ms ease-in-out;
`;

export const ModalLayout = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const [shoppingcart, setshoppingcart] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  const path = location.pathname;

  const handleScroll = (e) => {
    if (e.target.scrollTop > 230) {
      setIsTransparent(false);
      return;
    }
    setIsTransparent(true);
  };

  useEffect(() => {
    console.log(shoppingcart);
  }, [shoppingcart]);

  useEffect(() => {
    const navLinks = ["/map", "/cart"];
    if (navLinks.includes(path)) {
      setIsTransparent(false);
      setIsVisible(false);
    } else {
      setIsVisible(true);
      setIsTransparent(true);
    }
  }, [path]);

  return (
    <BackGround>
      <Content onScroll={handleScroll}>
        <Nav
          isTransparent={isTransparent}
          shoppingcart={shoppingcart}
          isVisible={isVisible}
        />
        <Outlet context={[shoppingcart, setshoppingcart]} />
      </Content>
    </BackGround>
  );
};
