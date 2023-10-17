import { useEffect, useState } from "react";
import styled from "styled-components";
import contactImage from "../../images/user.png";
import optionImage from "../../images/choice.png";
import clockImage from "../../images/clock.png";
import paymentImage from "../../images/wallet.png";
import editImage from "../../images/edit.png";

const Wrapper = styled.div`
  background-color: white;
  & > *:not(:last-child) {
    border: solid 1px #808080;
    border-bottom: none;
  }
  & > :last-child {
    border: solid 1px #808080;
  }
`;

const ACCORDION = styled.div`
  padding: 7px 5px;
`;

const Title = styled.div`
  text-transform: capitalize;
`;

const Icon = styled.img``;

const Header = styled.div`
  display: grid;
  grid-template-columns: 24px 1fr min-content;
  align-items: center;
`;

const Value = styled.div`
  // margin-top: 25px;
  font-style: italic;
  color: #808080;
`;

const Content = styled.div`
  padding: 0 24px;
`;

const EditButton = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

const SaveButton = styled.div`
  font-size: 0.8rem;
  color: #d89c05;
  font-weight: bold;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  margin-top: 8px;
`;

const Label = styled.label`
  display: block;
  margin-top: 8px;
`;

export const CommandDetailsForm = () => {
  const [formDatas, setFormDatas] = useState({
    name: localStorage.getItem("name") || "",
    tel: localStorage.getItem("tel") || "",
    commandOptions: localStorage.getItem("commandOptions") || "",
    time: localStorage.getItem("time") || "",
    paymentMode: localStorage.getItem("paymentMode") || "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    localStorage.setItem(name, value);
    setFormDatas({ ...formDatas, [name]: value });
  };

  return (
    <Wrapper>
      <Accordion
        icon={contactImage}
        title={"contact"}
        data={formDatas}
        handleChange={handleChange}
        IdleContent={({ data }) => {
          return (
            <Value>
              <div>{data.name}</div>
              <div>{data.tel}</div>
            </Value>
          );
        }}
        OpenedContent={ContactInputs}
      />
      <Accordion
        icon={optionImage}
        title={"options de commande"}
        data={formDatas}
        handleChange={handleChange}
        IdleContent={({ data }) => <Value>{data.commandOptions}</Value>}
        OpenedContent={CommandOptionsInputs}
      />
      <Accordion
        icon={clockImage}
        title={"choisissez l'heure"}
        data={formDatas}
        handleChange={handleChange}
        IdleContent={({ data }) => <Value>{data.time}</Value>}
        OpenedContent={TimeInputs}
      />
      <Accordion
        icon={paymentImage}
        title={"mode de paiement"}
        data={formDatas}
        handleChange={handleChange}
        IdleContent={({ data }) => <Value>{data.paymentMode}</Value>}
        OpenedContent={PaymentInputs}
      />
    </Wrapper>
  );
};

const Accordion = ({
  icon,
  title,
  data,
  handleChange,
  IdleContent,
  OpenedContent,
}) => {
  const [isOpened, setIsOpened] = useState(false);

  const toggle = () => {
    setIsOpened(!isOpened);
  };
  return (
    <ACCORDION>
      <Header>
        <Icon src={icon} />
        <Title>{title}</Title>
        {isOpened ? (
          <SaveButton onClick={toggle}>enregistrer</SaveButton>
        ) : (
          <EditButton src={editImage} onClick={toggle} />
        )}
      </Header>
      <Content>
        {isOpened ? (
          <OpenedContent data={data} handleChange={handleChange} />
        ) : (
          <IdleContent data={data} />
        )}
      </Content>
    </ACCORDION>
  );
};

const ContactInputs = ({ data, handleChange }) => {
  return (
    <>
      <Input
        type="text"
        name="name"
        placeholder="Veuillez saisir votre nom"
        value={data.name}
        onChange={handleChange}
      />
      <Input
        type="tel"
        name="tel"
        placeholder="Numéro de téléphone"
        value={data.tel}
        onChange={handleChange}
      />
    </>
  );
};

const CommandOptionsInputs = ({ data, handleChange }) => {
  return (
    <>
      <Label htmlFor="emporter">
        <input
          type="radio"
          name="commandOptions"
          value="emporter"
          id="emporter"
          onChange={handleChange}
          checked={data.commandOptions === "emporter"}
        />
        emporter
      </Label>
      <Label htmlFor="livraison">
        <input
          type="radio"
          name="commandOptions"
          value="livraison"
          onChange={handleChange}
          checked={data.commandOptions === "livraison"}
        />
        livraison
      </Label>
    </>
  );
};

const TimeInputs = ({ data, handleChange }) => {
  return (
    <>
      <Label htmlFor="desquepossible">
        <input
          type="radio"
          name="time"
          value="dès que possible"
          id="desquepossible"
          onChange={handleChange}
          checked={data.time === "dès que possible"}
        />
        dès que possible
      </Label>

      <Label htmlFor="plustard">
        <input
          type="radio"
          name="time"
          value="plus tard"
          id="plustard"
          onChange={handleChange}
          checked={data.time === "plus tard"}
        />
        plus tard
      </Label>
    </>
  );
};

const PaymentInputs = ({ data, handleChange }) => {
  return (
    <>
      <Label htmlFor="orangemoney">
        <input
          type="radio"
          name="paymentMode"
          value="orange money"
          id="orangemoney"
          onChange={handleChange}
          checked={data.paymentMode === "orange money"}
        />
        Orange Money
      </Label>
      <Label htmlFor="mtnmoney">
        <input
          type="radio"
          name="paymentMode"
          value="MTN money"
          id="mtnmoney"
          onChange={handleChange}
          checked={data.paymentMode === "MTN money"}
        />
        MTN Money
      </Label>
      <Label htmlFor="especes">
        <input
          type="radio"
          name="paymentMode"
          value="espèces"
          id="especes"
          onChange={handleChange}
          checked={data.paymentMode === "espèces"}
        />
        espèces
      </Label>
    </>
  );
};
