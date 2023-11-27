import React from "react";
import { navbar } from "../data";

const Header = () => {
  return (
    <header>
      <div className="nav-bar">
        <div className="left-content">
          <div className="logo">
            <h1 className="title">RIOT GAMES</h1>
          </div>
          <div className="center-content">
            <div className="wrapper">
              {navbar.map((itm, index) => {
                return (
                  <p key={index} className="para1">
                    {itm}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
