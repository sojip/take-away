import "../styles/Hero.css";
import backgroundImage from "../images/burger_.jpg";

const Hero = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        // backgroundPosition: "center",
        backgroundOrigin: "border-box",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        // background: "rgba(0,0,0,0.1)",
      }}
    >
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
