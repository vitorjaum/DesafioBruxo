import React from "react";

const CardProfile = ({ info }) => {
  const name = info.name;
  const image = info.image;
  const house = info.house;
  const alt = `imagem de ${name}`;
  let houseColor;

  switch (house) {
    case "Gryffindor":
      houseColor = "red";
      break;
    case "Hufflepuff":
      houseColor = "yellow";
      break;
    case "Slytherin":
      houseColor = "green";
      break;
    case "Ravenclaw":
      houseColor = "blue";
      break;
    default:
      houseColor = "grey";
  }

  return (
    <a style={{ backgroundColor: houseColor, marginRight: "2%" }}>
      <div>
        <img src={image} alt={alt} />
        <p>{name}</p>
      </div>
    </a>
  );
};

export default CardProfile;
