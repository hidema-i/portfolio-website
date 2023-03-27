import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/coffeecup.svg";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

const Navbar = () => {
  // useStateフックでopenLinksの初期値をfalseに設定し、setOpenLinksを使って値を変更できるようにする
  const [openLinks, setOpenLinks] = useState(false);

  //buttonToggle
  // toggleNavbar関数を定義して、openLinksの状態を反転させる
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="logo" />
        {/* hiddenLinksクラスはopenLinksがfalseのときに表示される */}
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
        {/* toggleNavbar関数をボタンのonClickに紐付ける */}
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
