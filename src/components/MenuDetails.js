import styled from "styled-components";
import { SelectedFood } from "./SelectedFood";
import { CustomOptions } from "./CustomOptions";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { categories } from "../utils/categories";

const DetailsWrapper = styled.div`
  position: fixed;
  top: calc(2.5% + 40px);
  width: 95%;
  max-width: 700px;
  height: calc(95% - 40px);
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  align-items: center;
  gap: 1vw;
  background-color: rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px) contrast(90%);
  padding: 0 1vw;
`;

export const Details = () => {
  const { foodName } = useParams();
  const category = categories.find(
    (category) => category.foods.some((food) => food.name === foodName) === true
  );

  const [command, setCommand] = useState({
    food: category.foods.find((food) => food.name === foodName),
    options: category.custom_options.map((option) => {
      return { ...option, checked: false };
    }),
    quantity: 1,
    instructions: "",
  });

  useEffect(() => {
    console.log(command);
  }, [command]);

  const handleOptionChange = (e) => {
    const name = e.target.name;
    setCommand({
      ...command,
      options: command.options.map((option) => {
        if (option.name === name) option.checked = !option.checked;
        return option;
      }),
    });
  };

  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setCommand({
      ...command,
      [name]: value,
    });
  };

  return (
    <DetailsWrapper>
      <SelectedFood food={command.food} />
      <CustomOptions
        command={command}
        handleOptionChange={handleOptionChange}
        handleInputChange={handleInputChange}
      />
    </DetailsWrapper>
  );
};
