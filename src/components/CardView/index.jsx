import React from "react";
import "./index.css";
import defaultImage from "../../assets/defaultImage.jpg";

const CardView = ({ info }) => {
  const name = info.name;
  const image = info.image;
  const house = info.house;
  const actor = info.actor;
  const ancestry = info.ancestry;
  const patronus = info.patronus;
  const alternateActors = info.alternate_actors;
  const wandWood = info.wand.wood;
  const wandCore = info.wand.core;
  const wandLength = info.wand.length;
  const condImage = image != "" ? `url(${image})` : `url(${defaultImage})`;
  const houseColor = house === "" ? "noHouse" : house;

  return (
    <div className={`flip-card`}>
      <div className="flip-card-inner">
        <div
          style={{
            backgroundImage: condImage,
          }}
          className={`flip-card-front`}
          title={`image of ${name}`}
        >
          <div className={`nameContainer ${houseColor}`}>
            <p className={`characterName`}>{name}</p>
          </div>
        </div>
        <div className={`flip-card-back`}>
          <h2>{house !== "" ? house : "Homeless"}</h2>
          <div className="characterInfos">
            {actor && <p>actor: {actor}</p>}
            {alternateActors[0] && <p>alternate_actors: {alternateActors}</p>}
            {ancestry && <p>ancestry: {ancestry}</p>}
            {patronus && <p>patronus: {patronus}</p>}
            {wandWood && (
              <div className="wandCard">
                <h2>Wand</h2>
                {wandWood && <p>wood: {wandWood}</p>}
                {wandCore && <p>core: {wandCore}</p>}
                {wandLength && <p>length: {wandLength}</p>}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardView;
