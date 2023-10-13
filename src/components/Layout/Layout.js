import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";

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
  width: 95%;
  max-width: 700px;
  height: 95%;
  background-color: white;
  // background-color: rgba(0, 0, 0, 0.5);
  overflow-x: none;
  overflow-y: auto;
`;

export const ModalLayout = () => {
  return (
    <BackGround>
      <Content>
        <Nav />
        <Outlet />
      </Content>
    </BackGround>
  );
};
