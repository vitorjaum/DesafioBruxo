import React from "react";
import "./index.css";

let house;
let ancestry;

const Filter = ({ info }) => {
  const { setRenderCards, globalCards, setCardsArr } = info;

  function changeHouse({ target }) {
    const value = target.value;
    const name = target.name;
    let newCardsArr = [];

    house = value;

    if (value === name) {
      newCardsArr = globalCards;
      if (ancestry !== undefined) {
        newCardsArr = newCardsArr.filter((card) => card.ancestry === ancestry);
      }
    } else {
      newCardsArr = globalCards.filter((card) => card.house === house);
      if (ancestry !== undefined)
        newCardsArr = newCardsArr.filter((card) => card.ancestry === ancestry);
    }

    console.log(newCardsArr);
    setCardsArr(newCardsArr);

    setRenderCards(newCardsArr.slice(0, 10));
  }

  function changeAncestry({ target }) {
    const value = target.value;
    const name = target.name;
    let newCardsArr = [];

    ancestry = value;

    if (value === name) {
      newCardsArr = globalCards;
      if (house !== undefined) {
        newCardsArr = newCardsArr.filter((card) => card.house === house);
      }
    } else {
      newCardsArr = globalCards.filter((card) => card.ancestry === ancestry);
      console.log(house);
      if (house !== undefined) {
        newCardsArr = newCardsArr.filter((card) => card.house === house);
        console.log({ newCardsArr });
      }
    }
    setCardsArr(newCardsArr);
    setRenderCards(newCardsArr.slice(0, 10));
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
            onChange={changeHouse}
          >
            <option selected value={"house"}>
              Select House
            </option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="">No House</option>
          </select>

          <select
            className="filterSelect"
            name="ancestry"
            onChange={changeAncestry}
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
