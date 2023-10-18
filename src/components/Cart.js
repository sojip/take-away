import { CommandDetailsForm } from "./CommandDetailsForm";
import { CartTable } from "./CartTable";
import styled from "styled-components";
import { Button } from "./Button";

const CartWrapper = styled.div`
  position: relative;
  padding: calc(40px + 2vh) 1vw 2vh 1vw;
  background-color: #f0f0f0;
  overflow-y: auto;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: start;
  gap: 1vw;
`;

const CommandButton = styled(Button)`
  position: sticky;
  bottom: 2.5px;
  left: 100%;
  align-self: end;
  margin-top: 5px;
`;

export const Cart = () => {
  return (
    <CartWrapper>
      <CartTable />
      <CommandDetailsForm />
      <CommandButton>commander</CommandButton>
    </CartWrapper>
  );
};
