import React, { useContext, useState } from "react";
import { navbar } from "../data";
import { Appcontext } from "../Context";
import Dropdown from "./Dropdown";

const Header = () => {
  const { data } = useContext(Appcontext);

  const [drop, setDrop] = useState(false);

  const handleClick = (item) => {



    if (item.title.name === "GAMEINFO") {
     
      return setDrop(!drop);
    }
  };

  return (
    <header>
      <div className="nav-bar">
        <div className="left-content">
          <div className="logo">
            <h1 className="title">RIOT GAMES</h1>
          </div>
          <div className="center-content">
            <div className="wrapper">
              {data.map((ele) => {
                return (
                  <p
                    onClick={() => handleClick(ele)}
                    key={ele.title.id}
                    className="para1"
                  >
                    {ele.title.name}
                  </p>
                );
              })}


{
  drop ? <Dropdown/> : null
}


            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
