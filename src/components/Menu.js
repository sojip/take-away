import styled from "styled-components";
import menuImage from "../images/BurgerFrites.jpeg";
import { categories } from "../utils/categories";
import { Link, useOutletContext, Outlet } from "react-router-dom";

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

const FoodWrapper = styled(Link)`
  padding: 10px 0;
  text-decoration: none;
  display: block;
  color: black;
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

export const Menu = () => {
  const [shoppingcart, setshoppingcart] = useOutletContext();

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
                      />
                    );
                  })}
                </Foods>
              </CategoryGrid>
            </div>
          );
        })}
      </div>
      <Outlet context={[shoppingcart, setshoppingcart]} />
    </>
  );
};

const Food = ({ food }) => {
  return (
    <FoodWrapper to={`/menu/${food.name}`}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <FoodName>{food.name}</FoodName>
        <FoodPrice>{food.price}</FoodPrice>
      </div>
      <Description>{food.description}</Description>
    </FoodWrapper>
  );
};
