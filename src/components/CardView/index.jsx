import React from "react";
import "./index.css";
const CardView = ({ info }) => {
  const name = info.name;
  const image = info.image;
  const house = info.house;
  const alt = `imagem de ${name}`;
  const condImage = image != "" ? image : "logo192.png";
  const houseColor = house === "" ? "noHouse" : house;

  return (
    <a className={`cardView ${houseColor} style`}>
      <div className="cardItems">
        <img src={condImage} alt={alt} className="imageCharacters" />
        <p className="name">{name}</p>
      </div>
    </a>
  );
};

export default CardView;
