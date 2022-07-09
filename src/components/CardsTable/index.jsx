import React from "react";
import CardView from "../CardView";
import Filter from "../Filter";
import "./index.css";
let initIdx = 0;
let newIdx = 10;
const cardsArr = [];

// const api = fetch("http://hp-api.herokuapp.com/api/characters")
//   .then((characters) => characters.json())
//   .then((characters) => {
//     cardsArr.push(...characters);
//     console.log(cardsArr);
//   });
// .then((characters) => cardsArr.push(...characters));

// console.log(cardsArr.slice(initIdx, newIdx));

// console.log(characters[3]?.image);

const Cards = () => {
  const [cards, setCards] = React.useState([]);

  const getCards = () => {};

  const getMoreCards = () => {
    if (cardsArr.length === 0) {
      fetch("http://hp-api.herokuapp.com/api/characters")
        .then((characters) => characters.json())
        .then((array) => {
          cardsArr.push(...array);
          console.log("puxado");
          setCards([...cardsArr.slice(0, 10)]);
        });
    } else {
      newIdx += 10;
      setCards([...cardsArr.slice(0, newIdx)]);
    }
  };

  return (
    <div className="table">
      <Filter />
      <div className="cards" id={"card"}>
        {cards.map((id) => (
          <CardView info={id} />
        ))}
        {/* {
          if(cards.length === 0){
            console.log(cards)
          }
        } */}
      </div>
      <button onClick={getMoreCards}>Exibir Mais...</button>
    </div>
  );
};

export default Cards;
