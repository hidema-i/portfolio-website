import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import coffeeImage from "../assets/coffee.jpg";
const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${coffeeImage})` }}>
      <div className="headerContainer">
        <h1>Sample Website</h1>
        <p>It's a simple website!</p>
        <Link to="/menu">
          <button>Clcik</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
