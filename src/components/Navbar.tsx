import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/coffeecup.svg";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  const [openLinks, setOpenLinks] = useState<boolean>(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="logo" />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">menu</Link>
          <Link to="/about">about</Link>
          <Link to="/contact">contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">menu</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
