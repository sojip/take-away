import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import deleteIcon from "../../images/delete.png";

const Icon = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
  float: right;
  margin-left: 5px;
`;

const Table = styled.table`
  border: solid 1px #808080;
  border-collapse: collapse;
  width: 100%;
  background-color: white;
`;

const Row = styled.tr``;

const Title = styled.th`
  padding: 5px 10px;
`;

const Data = styled.td`
  vertical-align: top;
  text-transform: capitalize;
  padding: 5px 10px;
`;

const List = styled.ul`
  margin: 0;
  list-style-type: square;
`;

const HeaderRow = styled(Row)`
  text-align: left;
  border-bottom: solid 1px #808080;
  & > :first-child {
    width: 13%;
  }
  & > :nth-child(2) {
    width: 63%;
  }
`;

export const CartTable = () => {
  const [shoppingcart, setshoppingcart] = useOutletContext();
  console.log(shoppingcart);

  const deleteCommand = (command) => {
    setshoppingcart(shoppingcart.filter((element) => element !== command));
    return;
  };

  return (
    <Table>
      <thead>
        <HeaderRow>
          <Title>Qté</Title>
          <Title>Article</Title>
          <Title>Prix</Title>
        </HeaderRow>
      </thead>
      <tbody>
        {shoppingcart.length > 0 ? (
          shoppingcart.map((command) => {
            return (
              <Row key={`command${shoppingcart.indexOf(command)}`}>
                <Data>x {command.quantity}</Data>
                <Data>
                  <div>{command.food.name}</div>
                  {command.options.length > 0 ? (
                    <List>
                      {command.options.map((option) => {
                        return (
                          <li key={`option${command.options.indexOf(option)}`}>
                            {option.name}
                          </li>
                        );
                      })}
                    </List>
                  ) : null}
                </Data>
                <Data>
                  <div>
                    <span>
                      {(command.food.price +
                        command.options.reduce(
                          (acc, curVal) => acc + curVal.price,
                          0
                        )) *
                        command.quantity}
                    </span>
                    <Icon
                      onClick={() => {
                        deleteCommand(command);
                      }}
                      data-index={`${shoppingcart.indexOf(command)}`}
                      src={deleteIcon}
                      alt="delete"
                    />
                  </div>
                  {command.options.map((option) => {
                    return (
                      <div key={`opt${command.options.indexOf(option)}`}>
                        {option.price}
                      </div>
                    );
                  })}
                </Data>
              </Row>
            );
          })
        ) : (
          <Row>
            <Data colSpan={3} style={{ fontStyle: "italic", color: "#808080" }}>
              Votre panier est vide
            </Data>
          </Row>
        )}
      </tbody>
      <tfoot>
        <Row style={{ borderTop: "solid 1px #808080" }}>
          <Data colSpan={2}>Total</Data>
          <Data>
            {shoppingcart.reduce((total, command) => {
              return (
                total +
                command.quantity *
                  (command.food.price +
                    command.options.reduce((totalOptions, options) => {
                      return totalOptions + options.price;
                    }, 0))
              );
            }, 0)}{" "}
            Fcfa
          </Data>
        </Row>
        <Row>
          <Data colSpan={2}>Frais de livraison</Data>
          <Data style={{ fontStyle: "italic", color: "#808080" }}>
            Ils vous seront communiqués par un de nos agents
          </Data>
        </Row>
      </tfoot>
    </Table>
  );
};
