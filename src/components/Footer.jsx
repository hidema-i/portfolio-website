import React from "react";
import "../styles/Footer.css";

import { Social } from "../Social";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        {Social.map((item) => (
          <a key={item.id} href={item.url}>
            {item.icon}
          </a>
        ))}
      </div>
      <p>&copy; {new Date().getFullYear()} sample website</p>
    </div>
  );
}

export default Footer;
