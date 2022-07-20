import React from "react";
import "./index.css";
const CardView = ({ info }) => {
  const name = info.name;
  const image = info.image;
  const house = info.house;
  const actor = info.actor;
  const ancestry = info.ancestry;
  const species = info.species;
  const patronus = info.patronus;
  const alternateActors = info.alternate_actors;
  const wandWood = info.wand.wood;
  const wandCore = info.wand.core;
  const wandLength = info.wand.lengt;
  const alt = `imagem de ${name}`;
  const condImage = image != "" ? image : "logo192.png";
  const houseColor = house === "" ? "noHouse" : house;

  return (
    <div className="cardView">
      <div className={` cardView-inner ${houseColor}`}>
        <div className="cardView-back">
          <div>
            <p>name: {name}</p>
            <p>actor: {actor}</p>
            <p>alternate actors: {alternateActors}</p>
            <p>ancestry: {ancestry}</p>
            <p>species: {species}</p>
            <section>
              <h3>wand:</h3>
              <p>core: {wandCore}</p>
              <p>wand wood: {wandWood}</p>
              <p>wand lenght: {wandLength}</p>
            </section>
          </div>
        </div>
        <div className={"cardView-front"}>
          <img src={condImage} alt={alt} className="imageCharacters" />
          <p className="name">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default CardView;
