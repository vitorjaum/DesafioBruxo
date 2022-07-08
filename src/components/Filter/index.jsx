import React, { Component } from "react";
import "./index.css";

const Filter = () => {
  return (
    <>
      <nav
        id="nav"
        style={{ padding: "15px", display: "flex", justifyContent: "center" }}
      >
        <section>
          <select className="filterSelect" defaultValue={"NoHouse"} id="houses">
            <option selected>Select House</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="NoHouse">No House</option>
          </select>

          <select
            className="filterSelect"
            defaultValue={"ancestry"}
            id="ancestry"
          >
            <option selected value={"ancestry"}>
              Ancestry
            </option>
            <option value="halfBlood">Half Blood</option>
            <option value="Muggleborn">Muggleborn</option>
            <option value="pureBlood">Pure Blood</option>
          </select>
        </section>
      </nav>
    </>
  );
};

export default Filter;
