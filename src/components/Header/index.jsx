import React from "react";
import "./index.css";

const Header = () => {
  return (
    <header style={{ padding: " 10px 0", backgroundColor: "#ffb84b" }}>
      <h1
        style={{ margin: 0, display: "flex", justifyContent: "space-around" }}
      >
        PotterDex
      </h1>
    </header>
  );
};

export default Header;
