import React from "react";

const CardProfile = ({ info }) => {
  const name = info.name;
  const image = info.image;
  const house = info.house;
  const alt = `imagem de ${name}`;
  const condImage = image != "" ? image : "logo192.png";
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
    <a
      style={{
        backgroundColor: houseColor,
        margin: "20px 1.25vw",
        width: "20%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "5%",
          width: "20vw",
        }}
      >
        <img src={condImage} alt={alt} style={{ width: "90%" }} />
        <p>{name}</p>
      </div>
    </a>
  );
};

export default CardProfile;
