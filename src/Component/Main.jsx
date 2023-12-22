import React, { useContext, useEffect, useState } from "react";
import { Appcontext } from "../Context";

const Main = () => {
  const { agent } = useContext(Appcontext);

  const [power, setPower] = useState(null);

  // console.log(power);

  // console.log("Agent:", agent);

  // console.log(agent?.data?.abilities[0]);

  const handleClick = (slot) => {
    setPower(slot);
  };

  useEffect(() => {
    // console.log("hii");
    setPower(agent?.data?.abilities?.[0]);
  }, [agent]);

  return (
    <div className="main-container">
      {/* //Image */}

      {agent?.data?.abilities && (
        <>
          <h1 className="main-title">Special Abilities</h1>
          <div className="parent-box">
            {agent?.data?.abilities?.map((itm, index) => {
              return (
                <div key={index} className="main-box">
                  <img
                    onClick={() => handleClick(itm)}
                    className="main-img"
                    src={itm.displayIcon}
                  />
                </div>
              );
            })}
          </div>
        </>
      )}

      {/* //Content */}

      <h2 className="power-name">{power?.displayName}</h2>
      
      <p className="power-desc">{power?.description}</p>
    </div>
  );
};

export default Main;
