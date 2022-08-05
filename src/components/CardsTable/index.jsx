import React from "react";
import CardView from "../CardView";
import Filter from "../Filter";
import "./index.css";

const globalCards = [];
let newIdx = 10;
let condCall = true;

const RenderCards = ({ props }) => {
  const { renderCards, setRenderCards } = props;

  if (condCall) {
    condCall = false;
    fetch("http://hp-api.herokuapp.com/api/characters")
      .then((characters) => characters.json())
      .then((array) => {
        globalCards.push(...array);
        console.log(globalCards);
        console.log("puxado");
        setRenderCards(globalCards.slice(0, 10));
      });
  }
  return renderCards.map((id) => <CardView info={id} />);
};

const Cards = () => {
  const [renderCards, setRenderCards] = React.useState([]);
  const [cardsArr, setCardsArr] = React.useState(globalCards);

  const getMoreCards = () => {
    newIdx += 10;
    setRenderCards([...cardsArr.slice(0, newIdx)]);
  };

  return (
    <div className="table">
      <Filter info={{ globalCards, setRenderCards, setCardsArr }} />
      <div className="cards" id={"card"}>
        <RenderCards props={{ renderCards, setRenderCards }} />
      </div>
      <button onClick={getMoreCards}>Exibir Mais...</button>
    </div>
  );
};

export default Cards;
