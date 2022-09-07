import React, { useEffect, useState } from "react";
import CardView from "../CardView";
import Filter from "../Filter";
import "./index.css";

let globalCards = [];

const Cards = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [currentCards, setCurrentCards] = useState([]);
  const [countCards, setCountCards] = useState(10);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCurrentCards(result);
          globalCards = result;
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <div className="table">
      <Filter info={{ globalCards, setCurrentCards, setCountCards }} />
      <div className="cards" id={"card"}>
        {!isLoaded ? (
          <p>loading...</p>
        ) : (
          currentCards.map(
            (card, idx) =>
              idx < countCards && <CardView info={card} key={idx} />
          )
        )}
      </div>
      <button onClick={() => setCountCards(countCards + 10)}>
        Exibir Mais...
      </button>
    </div>
  );
};

export default Cards;
