import React from "react";
import characters from "../../contants/index";
import CardProfile from "../CardProfile";

const tempArray = [
  {
    name: "Hermione Granger",
    image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
    house: "Gryffindor",
  },
  {
    name: "Hermione Granger",
    image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
    house: "Gryffindor",
  },
  {
    name: "Hermione Granger",
    image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
    house: "Gryffindor",
  },
];

const Cards = () => {
  const [cards, setCards] = React.useState(tempArray);

  function getCards() {
    const newObj = {
      name: "Hermione Granger",
      image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
      house: "Gryffindor",
    };
    const newArr = [...tempArray, newObj];
    tempArray.push(newObj);

    setCards(newArr);
    console.log({ tempArray });
  }

  return (
    <div style={{ padding: "2% 5%" }}>
      <div
        style={{
          display: "flex",
          margin: "0 auto",
          flexWrap: "wrap",
        }}
        id={"card"}
      >
        {cards.map((id) => (
          <CardProfile info={id} />
        ))}
      </div>
      <button onClick={getCards}>Exibir Mais...</button>
    </div>
  );
};

export default Cards;
