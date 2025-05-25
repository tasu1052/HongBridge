// App.js
import React from "react";
import "./style.css";

export default function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo-box">홍브릿지 로고</div>
      </div>
      <div className="main">
        <div className="sidebar">
          <div className="sidebar-section">
            <button>로그인</button>
            <button>회원가입</button>
          </div>
          <div className="sidebar-section">
            <button>개인정보</button>
            <button>챗봇</button>
            <button>캘린더</button>
          </div>
        </div>
        <div className="content"></div>
      </div>
    </div>
  );
}