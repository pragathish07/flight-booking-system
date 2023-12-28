import React from 'react';
import '../styles/styles.css'
import headerImg from "../assets/header.jpg"


function Header() {
  return (
    <header className="section__container header__container">
      <h1 className="section__header">Find And Book<br />A Great Experience</h1>
      <img src={headerImg} alt="header" />
    </header>
  );
}

export default Header;
