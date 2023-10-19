import styled from "styled-components";
import backgroundImage from "../../images/BurgerBackground.jpg";
import { Header } from "./Header";
import { HomeText } from "./HomeText";
import { Outlet } from "react-router-dom";

const Wrapper = styled.div`
  position: relative;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.8);
  background-blend-mode: multiply;
  height: 100%;
  padding: 1vw;
`;

export const FullPageHero = () => {
  return (
    <Wrapper>
      <Header />
      <HomeText />
      <Outlet />
    </Wrapper>
  );
};
