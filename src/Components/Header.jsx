import React from "react";
import "../App.css";


const Header = () => {
  return (
    <header className='header'>
      <img className='header-img'
        src="https://imgflip.com/s/meme/Yao-Ming.jpg"
        alt="Problem!"
      />
      <h1 className="header-txt"><span>Meme</span> Generator</h1>
    </header>
  );
};

export default Header;
