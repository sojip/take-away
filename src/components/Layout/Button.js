import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  padding: 15px 25px;
  background-color: #d89c05;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  box-shadow: 0 10px 10px -5px #0000;
  color: black;
  font-family: inherit;
  text-transform: uppercase;
  transition: transform 200ms ease-in-out;
  &:active {
    transform: scale(1.03);
  }
`;
