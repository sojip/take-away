import styled from "styled-components";

const Wrapper = styled.div`
  cursor: pointer;
  padding: 10px;
  background-color: #f39f86;
  background-image: linear-gradient(315deg, #f39f86 0%, #f9d976 74%);
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

const FoodName = styled.div`
  font-weight: bold;
  text-transform: capitalize;
`;

const FoodPrice = styled.div`
  font-weight: bold;
  text-transform: capitalize;
  &::after {
    content: "FCFA";
    padding-left: 3px;
  }
`;

const Description = styled.div`
  max-width: 90%;
  color: #808080;
`;

export const SelectedFood = ({ food, handleOpenDetails }) => {
  return (
    <Wrapper>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <FoodName>{food.name}</FoodName>
        <FoodPrice>{food.price}</FoodPrice>
      </div>
      <Description>{food.description}</Description>
    </Wrapper>
  );
};
