import React, { Component } from "react";
import "./index.css";

let house;
let ancestry;

const Filter = ({ info }) => {
  const { setCards, globalCards } = info;

  function changeArray({ target }) {
    const filteredCards = [];
    const name = target.name;
    const value = target.value;

    if (name === "house") house = value;
    if (name === "ancestry") ancestry = value;

    for (
      let idx = 0;
      filteredCards.length < 10 && idx < globalCards.length;
      idx++
    ) {
      if (idx === globalCards.length - 1) setCards(filteredCards);

      if (house !== undefined && ancestry !== undefined) {
        if (
          globalCards[idx].ancestry === ancestry &&
          globalCards[idx].house === house
        ) {
          filteredCards.push(globalCards[idx]);
          setCards(filteredCards);
        }
      } else if (globalCards[idx][name] === value) {
        filteredCards.push(globalCards[idx]);
        setCards(filteredCards);
      }
    }
  }

  return (
    <>
      <nav
        id="nav"
        style={{ padding: "15px", display: "flex", justifyContent: "center" }}
      >
        <form>
          <select
            className="filterSelect"
            name={"house"}
            onChange={changeArray}
          >
            <option selected>Select House</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="">No House</option>
          </select>

          <select
            className="filterSelect"
            name="ancestry"
            onChange={changeArray}
          >
            <option selected value={"ancestry"}>
              Ancestry
            </option>
            <option value="half-blood">Half Blood</option>
            <option value="muggleborn">Muggleborn</option>
            <option value="muggle">Muggle</option>
            <option value="pure-blood">Pure Blood</option>
            <option value="squib">Squib</option>
            <option value="half-veela">Half-veela</option>
            <option value="quarter-veela">Quarter-veela</option>
          </select>
        </form>
      </nav>
    </>
  );
};

export default Filter;
