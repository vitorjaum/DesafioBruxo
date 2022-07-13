import React from "react";
import Header from "../components/Header";
import CardsTable from "../components/CardsTable";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <CardsTable />
      <Footer />
    </div>
  );
};

export default Home;
