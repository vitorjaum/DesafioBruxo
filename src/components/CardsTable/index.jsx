import React from "react";
import CardView from "../CardView";
import Filter from "../Filter";
import "./index.css";

let newIdx = 10;
const globalCards = [];

const Cards = () => {
  const [cards, setCards] = React.useState([]);
  const [cond, setCond] = React.useState("");

  const getMoreCards = () => {
    if (globalCards.length === 0) {
      fetch("http://hp-api.herokuapp.com/api/characters")
        .then((characters) => characters.json())
        .then((array) => {
          globalCards.push(...array);
          console.log("puxado");
          setCards([...globalCards.slice(0, 10)]);
        });
    } else {
      newIdx += 10;
      setCards([...globalCards.slice(0, newIdx)]);
    }
  };

  return (
    <div className="table">
      <Filter info={{ globalCards, setCards, cond, setCond }} />

      <div className="cards" id={"card"}>
        {cards.map((id) => (
          <CardView info={id} />
        ))}
      </div>
      <button onClick={getMoreCards}>Exibir Mais...</button>
    </div>
  );
};

export default Cards;
