import "../styles/Map.css";
import { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    console.log("hello");
    document.querySelector(".menuOptions").classList.add("hidden");
    document.querySelector(".menuHeader").classList.add("scrolled");
  }, []);
  return <div className="mapWrapper">hello</div>;
};

export default Map;
