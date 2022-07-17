import "../styles/Map.css";
import { useEffect } from "react";
import L from "leaflet";
import Truck from "../images/truck-delivery-outline.png";

const Map = () => {
  useEffect(() => {
    console.log("hello");
    let map = L.map("map").setView([2.943707, 9.912498], 12);
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=sk.eyJ1Ijoic29qaXAiLCJhIjoiY2wzazl2cDVlMDM0azNrcGZxZHowY2gwcyJ9.8zxRyyxPCO9-fiGDYCHisA",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "sk.eyJ1Ijoic29qaXAiLCJhIjoiY2wzazl2cDVlMDM0azNrcGZxZHowY2gwcyJ9.8zxRyyxPCO9-fiGDYCHisA",
      }
    ).addTo(map);

    //restaurant marker
    L.marker([2.943707, 9.912498])
      .addTo(map)
      .bindPopup("Take Away Fast Food")
      .openPopup();

    //delivery prices circles
    L.circle([2.943707, 9.912498], {
      color: "green",
      radius: 500,
    }).addTo(map);

    L.circle([2.943707, 9.912498], {
      color: "red",
      radius: 2000,
    }).addTo(map);

    L.circle([2.943707, 9.912498], {
      color: "orange",
      radius: 5000,
    }).addTo(map);

    document.querySelector(".menuOptions").classList.add("hidden");
    document.querySelector(".menuHeader").classList.add("scrolled");
  }, []);
  return (
    <div className="mapWrapper">
      <div id="map"></div>
      <div className="mapTitles">
        <img src={Truck} alt="" />
        Frais de livraison
      </div>
      <ul className="deliveryFees">
        <li>
          <div className="mapcircle first"></div>
          <div className="fees">200</div>
        </li>
        <li>
          <div className="mapcircle second"></div>
          <div className="fees">500</div>
        </li>
        <li>
          <div className="mapcircle third"></div>
          <div className="fees">800</div>
        </li>
        <li>
          <div className="fourth">Autres :</div>
          <div className="fees">1000</div>
        </li>
      </ul>
    </div>
  );
};

export default Map;
