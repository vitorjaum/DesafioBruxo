import React from "react";
import "./index.css";

const filterParams = { ancestry: "ALL", house: "ALL" };

const Filter = ({ info }) => {
  const { globalCards, setCurrentCards, setCountCards } = info;

  function checkCards(cards, parameter, value) {
    if (value.toUpperCase() === "ALL") {
      return cards;
    } else {
      return cards.filter(
        (card) => card[parameter].toUpperCase() === value.toUpperCase()
      );
    }
  }

  const changeCards = ({ target }) => {
    const name = target.name;
    const value = target.value;

    filterParams[name] = value;

    const houseCards = checkCards(globalCards, "house", filterParams.house);
    const filterCards = checkCards(
      houseCards,
      "ancestry",
      filterParams.ancestry
    );

    setCountCards(10);
    setCurrentCards(filterCards);
  };

  const housesParams = [
    { value: "ALL", txt: "Select House" },
    { value: "Gryffindor", txt: "Gryffindor" },
    { value: "Hufflepuff", txt: "Hufflepuff" },
    { value: "Slytherin", txt: "Slytherin" },
    { value: "Ravenclaw", txt: "Ravenclaw" },
    { value: "", txt: "Homeless" },
  ];

  const ancestryParams = [
    { value: "ALL", txt: "Select Ancestry" },
    { value: "half-blood", txt: "half-blood" },
    { value: "muggleborn", txt: "muggleborn" },
    { value: "muggle", txt: "muggle" },
    { value: "pure-blood", txt: "pure-blood" },
    { value: "squib", txt: "squib" },
    { value: "half-veela", txt: "half-veela" },
    { value: "quarter-veela", txt: "quarter-veela" },
    { value: "", txt: "Unspecified Ancestry" },
  ];

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
            onChange={changeCards}
            defaultValue={"ALL"}
          >
            {housesParams.map((param, idx) => (
              <option key={idx} value={param.value}>
                {param.txt}
              </option>
            ))}
          </select>

          <select
            className="filterSelect"
            name="ancestry"
            onChange={changeCards}
            defaultValue={"ALL"}
          >
            {ancestryParams.map((param, idx) => (
              <option key={idx} value={param.value}>
                {param.txt}
              </option>
            ))}
          </select>
        </form>
      </nav>
    </>
  );
};

export default Filter;
