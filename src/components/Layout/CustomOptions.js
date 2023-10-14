import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f7f7f7;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  display: flex;
  flex-direction: column;
  height: 80%;
`;
const Title = styled.div`
  margin-bottom: 15px;
`;
const Footer = styled.div`
  flex: 0 0 20%;
  display: flex;
  align-items: center;
  //   padding: 0 2vw;
  background-color: white;
`;
export const CustomOptions = ({
  command,
  category,
  handleOptionChange,
  handleInputChange,
  addToCart,
}) => {
  return (
    <Wrapper>
      <Title>Customisez votre repas:</Title>
      {category.custom_options.map((option) => {
        return (
          <div key={category.custom_options.indexOf(option)}>
            <label htmlFor={option}>
              <input
                type="checkbox"
                id={option.name}
                checked={option.checked}
                onChange={handleOptionChange}
              />
              {option.name}
            </label>
            <span>{option.price}</span>
          </div>
        );
      })}
      <Title>instructions spéciales:</Title>
      <textarea
        placeholder="Exemple: pas de poivre/sucre/sel svp"
        rows="3"
        name="instructions"
        onChange={handleInputChange}
      ></textarea>
      <Title>Quantité :</Title>
      <input
        type="number"
        name="quantity"
        value={command.quantity}
        min={1}
        max={999}
        onChange={handleInputChange}
      />
      <Footer>
        <button id="addToCart" onClick={addToCart}>
          <div>
            {command.price * command.quantity +
              command.options
                .filter((option) => option.checked)
                .reduce((acc, curVal) => acc + curVal.price, 0)}
          </div>
          Ajouter à La Carte
        </button>
      </Footer>
    </Wrapper>
  );
};
