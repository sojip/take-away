import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const P = styled.p`
  max-width: 500px;
  color: white;
  font-size: 2rem;
`;

export const HomeText = (props) => {
  return (
    <Wrapper>
      <P>
        Bienvenue à Take Away où vous pouvez trouver le meilleur service de
        livraison de nourriture à kribi
      </P>
      <P>Votre commande confirmée en TEMPS RÉEL</P>
    </Wrapper>
  );
};
