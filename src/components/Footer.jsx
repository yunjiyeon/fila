// 방응형, 사이드바 추가

import React from "react";
import "./Footer.scss";

function Footer() {
  const footerList = [
    "About FILA",
    "|",
    "Ethics",
    "|",
    "Contact Us",
    "|",
    "Athletes",
    "|",
    "Terms",
    "|",
    "Connect With Us",
  ];
  const officeInfo = [
    "서울시 강동구 천호대로 1077 이스트센트럴타워 16층",
    "|",
    "대표이사 김지헌",
    "|",
    "법인명(상호명) 휠라코리아(주)",
    "|",
    "통신판매업신고 제 2020-서울강동-0160 호",
  ];

  return (
    <div>
      <nav className="footerNav">
        <ul className="footerList">
          {footerList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <ul className="officeInfo">
          {officeInfo.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Footer;
