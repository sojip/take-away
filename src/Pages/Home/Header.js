import { Link } from "react-router-dom";
import logo from "../../images/Logo.png";
import MenuIcon from "../../images/icons/menu.png";
import styled from "styled-components";

const HEADER = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
`;

const Image = styled.div`
  width: 140px;
  height: 140px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const LINK = styled(Link)`
  text-decoration: none;
  color: #d89c05;
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
`;
const IconButton = styled.button`
  color: black;
  padding: 10px;
  background-color: transparent;
  color: #d89c05;
  cursor: pointer;
  font-size: 0.7rem;
  font-weight: bold;
  font-family: inherit;
  text-transform: uppercase;
  transition: transform 200ms ease-in-out;
  &:active {
    transform: scale(1.05);
  }
`;

const Header = () => {
  return (
    <HEADER>
      <Image className="logo">
        <Img src={logo} alt="logo" />
      </Image>
      <LINK to="menu">Voir le Menu</LINK>
    </HEADER>
  );
};

export { Header };
