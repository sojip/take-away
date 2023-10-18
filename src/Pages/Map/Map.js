import styled from "styled-components";
import { useEffect } from "react";
import L from "leaflet";
import Truck from "../../images/icons/truck-delivery-outline.png";

const Wrapper = styled.div`
  padding: calc(40px + 2vh) 1vw 2vh 1vw;
  overflow-y: auto;
  height: 100%;
`;

const MAP = styled.div`
  height: 58%;
  z-index: 2;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  gap: 10px;
  border-bottom: solid 1px #808080;
  padding-bottom: 10px;
  width: 48%;
`;
const DeliveryFees = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-top: 20px;
`;

const DeliveryFee = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
`;

const Circle = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
`;

const GreenCircle = styled(Circle)`
  border: solid 3px green;
`;

const RedCircle = styled(Circle)`
  border: solid 3px red;
`;

const OrangeCircle = styled(Circle)`
  border: solid 3px orange;
`;

const Fee = styled.div`
  &::before {
    content: "Frais - ";
  }
  &::after {
    content: "FCFA";
    margin-left: 5px;
  }
`;

export const Map = () => {
  useEffect(() => {
    let map = L.map("map").setView([2.943707, 9.912498], 11);
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

    /** Restaurant Marker */
    L.marker([2.943707, 9.912498])
      .addTo(map)
      .bindPopup("Take Away Fast Food")
      .openPopup();

    /** Delivery Fees Circles */
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
  }, []);
  return (
    <Wrapper>
      <MAP id="map"></MAP>
      <Title>
        <img src={Truck} alt="" />
        Frais de livraison
      </Title>
      <DeliveryFees>
        <DeliveryFee>
          <GreenCircle></GreenCircle>
          <Fee>200</Fee>
        </DeliveryFee>
        <DeliveryFee>
          <RedCircle></RedCircle>
          <Fee>500</Fee>
        </DeliveryFee>
        <DeliveryFee>
          <OrangeCircle></OrangeCircle>
          <Fee>800</Fee>
        </DeliveryFee>
        <DeliveryFee>
          <div className="fourth">Autres :</div>
          <Fee>1000</Fee>
        </DeliveryFee>
      </DeliveryFees>
    </Wrapper>
  );
};
