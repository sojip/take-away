import styled from "styled-components";
import menuImage from "../../images/burger_frites.jpeg";
import { categories } from "../../utils/categories";
import { useState, useRef } from "react";
import { SelectedFood } from "./SelectedFood";
import { CustomOptions } from "./CustomOptions";

const Image = styled.div`
  background-image: url(${menuImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;
`;

const CategoryName = styled.h2`
  padding: 0;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 25px;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
`;

const Img = styled.div`
  background-image: url(${(props) => props.$img});
  background-repear: no-repeat;
  background-position: center bottom -42.5px;
  background-size: cover;
  height: 100px;
  order: 2;
  @media screen and (max-width: 525px) {
    order: 0;
  }
`;

const Foods = styled.div`
  & > * {
    border-top: solid 1px black;
  }
  & > :last-child {
    border-bottom: solid 1px black;
  }
`;

const FoodWrapper = styled.div`
  cursor: pointer;
  padding: 10px 0;
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
  backdrop-filter: blur(5px);
  padding: 0 1vw;
`;
export const Menu = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [command, setCommand] = useState(null);
  const ref = useRef();

  const handleOpenDetails = (food, category) => {
    category = {
      ...category,
      custom_options: category.custom_options.map((option) => {
        return { ...option, checked: false };
      }),
    };
    setSelectedCategory({ ...category });
    setSelectedFood({ ...food });
    setCommand({ ...selectedFood, instructions: "", quantity: 1, options: [] });
    setShowDetails(true);
  };

  const handleCloseDetails = (e) => {
    if (e.target === ref.current) {
      setSelectedCategory(null);
      setSelectedFood(null);
      setCommand(null);
      setShowDetails(false);
    }
  };

  const handleOptionChange = () => {};
  const handleInputChange = () => {};
  const addToCart = () => {};

  return (
    <>
      <Image />
      <div style={{ padding: "1vw" }}>
        {categories.map((category) => {
          return (
            <div
              key={`category${categories.indexOf(category)}`}
              style={{ marginBottom: "15px" }}
            >
              <CategoryName>{category.name}</CategoryName>
              <CategoryGrid>
                <Img $img={category.img} />
                <Foods>
                  {category.foods.map((food) => {
                    return (
                      <Food
                        key={`food${category.foods.indexOf(food)}`}
                        food={food}
                        category={category}
                        handleOpenDetails={handleOpenDetails}
                      />
                    );
                  })}
                </Foods>
              </CategoryGrid>
            </div>
          );
        })}
      </div>
      {showDetails && (
        <DetailsWrapper ref={ref} onClick={handleCloseDetails}>
          <SelectedFood food={selectedFood} />
          <CustomOptions
            command={command}
            handleOptionChange={handleOptionChange}
            handleInputChange={handleInputChange}
            addToCart={addToCart}
            category={selectedCategory}
          />
        </DetailsWrapper>
      )}
    </>
  );
};

const Food = ({ food, category, handleOpenDetails }) => {
  return (
    <FoodWrapper
      onClick={() => {
        handleOpenDetails(food, category);
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <FoodName>{food.name}</FoodName>
        <FoodPrice>{food.price}</FoodPrice>
      </div>
      <Description>{food.description}</Description>
    </FoodWrapper>
  );
};
