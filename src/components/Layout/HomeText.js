import styled from "styled-components";

const P = styled.p`
  max-width: 500px;
  color: white;
  font-size: 2rem;
`;

export const HomeText = (props) => {
  return (
    <>
      <P>
        Bienvenue à Take Away où vous pouvez trouver le meilleur service de
        livraison de nourriture à kribi
      </P>
      <P>Votre commande confirmée en TEMPS RÉEL</P>
    </>
  );
};
