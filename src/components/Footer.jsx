// 방응형, 사이드바 추가

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Footer.scss"; 
import { useState } from "react";

function Navbar({authenticate, setAuthenticate}) {
  const [sideState, setSideState] = useState('-100%');
  // 사이드바에 left 상태를 설정
  const navigate = useNavigate();
	const footerList = [
    "About FILA","|","Ethics","|","Contact Us","|","Athletes","|","Terms","|","Connect With Us"
	];
  const officeInfo = [
    "서울시 강동구 천호대로 1077 이스트센트럴타워 16층","|","대표이사 김지헌","|","법인명(상호명) 휠라코리아(주)","|","통신판매업신고 제 2020-서울강동-0160 호"
  ]


  const search = (event) => {
		if (event.key === "Enter") {
			//엔터키만을 눌렀을때 반응
			let keyword = event.target.value; //js와 다름 event안에 value가 들어있음
			console.log("keyword는?", keyword);
			navigate(`/?q=${keyword}`); //추가조건은 쿼리로 붙임, 키워드를 읽어와서 url에 넣어줌
		}
	};

  const gotoLogin = () => {
    navigate('/login') // 로그인 페이지로 이동
  }

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

export default Navbar;
