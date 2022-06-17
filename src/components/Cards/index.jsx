import React from "react";
import CardProfile from "../CardProfile";
import Filter from "../Filter";

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
  }

  return (
    <div style={{ padding: "2% 5%", backgroundColor: "rgb(45, 0, 77)" }}>
      <Filter />
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
