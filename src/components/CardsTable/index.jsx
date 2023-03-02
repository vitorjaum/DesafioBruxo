import React, { useEffect, useState } from "react";
import CardView from "../CardView";
import Filter from "../Filter";
import "./index.css";

let APIData = [];

const Cards = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [currentCards, setCurrentCards] = useState([]);
  const [countCards, setCountCards] = useState(10);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCurrentCards(result);
          APIData = result;
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <div className="table">
      <Filter info={{ APIData, setCurrentCards, setCountCards }} />
      <div className="cards" id={"card"}>
        {!isLoaded ? (
          <p>loading...</p>
        ) : (
          currentCards.map(
            (card, idx) =>
              idx < countCards && <CardView info={card} key={idx} />
          )
        )}
        <div className="showMore">
          <button
            className="showMore-btn"
            onClick={() => setCountCards(countCards + 10)}
          >
            Exibir Mais...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
