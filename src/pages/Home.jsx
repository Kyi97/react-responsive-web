// Home.js
import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Trending from "../components/Trending";
import HappeningNow from "../components/HappeningNow";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <Main />
      <Trending />
      <HappeningNow />
      <Footer />
    </div>
  );
};

export default Home;
