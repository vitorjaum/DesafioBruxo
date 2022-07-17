import React from "react";
import CardView from "../CardView";
import Filter from "../Filter";
import "./index.css";

let newIdx = 10;
const globalCards = [];
let condCall = true;

const RenderCards = ({ props }) => {
  const { cards, setCards } = props;

  console.log(globalCards.length);
  console.log(cards);
  if (condCall) {
    condCall = false;
    fetch("http://hp-api.herokuapp.com/api/characters")
      .then((characters) => characters.json())
      .then((array) => {
        globalCards.push(...array);
        console.log(globalCards);
        console.log("puxado");
        setCards(globalCards.slice(0, 10));
      });
  }
  return cards.map((id) => <CardView info={id} />);
};

const Cards = () => {
  const [cards, setCards] = React.useState([]);
  const [cond, setCond] = React.useState("");

  const getMoreCards = () => {
    if (globalCards.lengt !== 0) {
      console.log(globalCards);
      newIdx += 10;
      setCards([...globalCards.slice(0, newIdx)]);
    }
  };
  const tag = <p>pinto</p>;
  return (
    <div className="table">
      <Filter info={{ globalCards, setCards, cond, setCond }} />

      <div className="cards" id={"card"}>
        <RenderCards props={{ cards, setCards }} />
      </div>
      <button onClick={getMoreCards}>Exibir Mais...</button>
    </div>
  );
};

export default Cards;
