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
      <div className={` cardView-inner `}>
        <div className={`cardView-back ${houseColor}`}>
          <div className="charactersData">
            <p>Name: {name}</p>
            {actor && <p>Actor: {actor}</p>}
            {alternateActors.length > 0 && (
              <p>Alternate actors: {alternateActors}</p>
            )}
            {ancestry && <p>Ancestry: {ancestry}</p>}
            {species && <p>Species: {species}</p>}
            {wandWood && (
              <section>
                <h3>Wand:</h3>
                {wandCore && <p>Core: {wandCore}</p>}
                {wandWood && <p>Wand wood: {wandWood}</p>}
                {wandLength && <p>Wand lenght: {wandLength}</p>}
              </section>
            )}
          </div>
        </div>
        <div className={`cardView-front ${houseColor}`}>
          <img src={condImage} alt={alt} className="imageCharacters" />
          <p className="name">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default CardView;
