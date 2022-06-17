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
          <select className="filterSelect" id="houses">
            <option selected value="">
              Select House
            </option>
            <option value="">Gryffindor</option>
            <option value="">Hufflepuff</option>
            <option value="">Slytherin</option>
            <option value="">Ravenclaw</option>
            <option value="">No House</option>
          </select>
          <select className="filterSelect" name="" id="post">
            <option selected value="">
              Staff or student
            </option>
            <option value="">Students</option>
            <option value="">Staff</option>
          </select>
        </section>
      </nav>
    </>
  );
};

export default Filter;
