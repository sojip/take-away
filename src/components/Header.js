import { Link } from "react-router-dom";
import logo from "../images/Logo.png";
import MenuIcon from "../images/icons/menu.png";
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
`;
const IconButton = styled.button`
  color: black;
  padding: 10px;
  background-color: #d89c05;
  border: solid 1.7px white;
  cursor: pointer;
  font-size: 0.7rem;
  font-weight: bold;
  font-family: inherit;
  box-shadow: 0 10px 10px -5px #0000;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  text-transform: uppercase;
  transition: transform 200ms ease-in-out;
  &:active {
    transform: scale(1.05);
  }
`;
const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
const Header = () => {
  return (
    <HEADER>
      <Image className="logo">
        <Img src={logo} alt="logo" />
      </Image>
      <LINK to="menu">
        <IconButton>
          <Icon src={MenuIcon} alt="" />
          <span>Voir le menu et commander</span>
        </IconButton>
      </LINK>
    </HEADER>
  );
};

export { Header };
