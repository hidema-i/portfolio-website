import React from "react";
import "../styles/Footer.css";
import { SocialItem, Social } from "../Social";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        {/* Socialコンポーネントの内容を表示 */}
        {Social.map((item: SocialItem) => (
          <a key={item.id} href={item.url}>
            {item.icon}
          </a>
        ))}
      </div>
      {/* 著作権表示 */}
      <p>&copy; {new Date().getFullYear()} sample website</p>
    </div>
  );
}

export default Footer;
