import React from "react";
import "../styles/Footer.css";

import { social } from "../social";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        {social.map((item) => (
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
