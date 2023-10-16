import styled, { keyframes } from "styled-components";

const fadeLeft = keyframes`
from {
  opacity: 0;
  right: -300px;
}
to {
  opacity: 1;
  right: 0;
}
`;
const Wrapper = styled.div`
  position: relative;
  background-color: #f7f7f7;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  display: flex;
  flex-direction: column;
  animation: ${fadeLeft} 250ms ease-in-out;
`;
const Title = styled.div`
  margin: 5px 0 10px 0;
`;
const Footer = styled.div`
  flex: 0 0 20%;
  display: flex;
  align-items: center;
  padding: 2vw 1vw;
  background-color: white;
`;

const Options = styled.div`
  & > * {
    border: solid 1px #808080;
  }
`;

const Option = styled.div`
  padding: 5px 0;
`;

const OptionPrice = styled.span`
  float: right;
  margin-right: 1.5vw;
  font-weight: bold;
  &:before {
    content: "+";
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 15px 25px;
  background-color: #d89c05;
  border: none;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  font-weight: bold;
  box-shadow: 0 10px 10px -5px #0000;
  color: black;
`;

const TotalPrice = styled.span`
  float: left;
  &::after {
    content: " FCFA";
  }
`;

export const CustomOptions = ({
  command,
  handleOptionChange,
  handleInputChange,
  addToCart,
}) => {
  return (
    <Wrapper>
      <div style={{ padding: "1vw", flex: "1" }}>
        <Title style={{ fontWeight: "bold" }}>Customisez votre repas</Title>
        <Options>
          {command.options.map((option) => {
            return (
              <Option key={command.options.indexOf(option)}>
                <label htmlFor={option}>
                  <input
                    type="checkbox"
                    name={option.name}
                    checked={option.checked}
                    onChange={handleOptionChange}
                  />
                  {option.name}
                </label>
                <OptionPrice>{option.price}</OptionPrice>
              </Option>
            );
          })}
        </Options>
        <Title>Instructions spéciales:</Title>
        <textarea
          placeholder="Exemple: pas de poivre/sucre/sel svp"
          rows="3"
          name="instructions"
          onChange={handleInputChange}
          value={command.instructions}
          style={{ width: "100%" }}
        ></textarea>
        <Title>Quantité :</Title>
        <input
          type="number"
          name="quantity"
          value={command.quantity}
          min="1"
          max="999"
          onChange={handleInputChange}
          style={{ width: "100%" }}
        />
      </div>
      <Footer>
        <Button onClick={addToCart}>
          <TotalPrice>
            {(command.food.price +
              command.options
                .filter((option) => option.checked)
                .reduce((acc, curVal) => acc + curVal.price, 0)) *
              command.quantity}
          </TotalPrice>
          Ajouter à La Carte
        </Button>
      </Footer>
    </Wrapper>
  );
};
