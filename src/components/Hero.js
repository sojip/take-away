import "../styles/Hero.css";
import backgroundImage from "../images/burger_.jpg";
import Header from "./Header";

const Hero = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundOrigin: "border-box",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <p>
        Bienvenue à Take Away où vous pouvez trouver
        <br />
        le meilleur service de livraison de nourriture à kribi
      </p>
      <p>Votre commande confirmée en TEMPS RÉEL</p>
      <div className="dark-overlay"></div>
    </div>
  );
};

export default Hero;
