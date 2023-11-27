import React, { useContext, useState } from "react";

import Content from "./Content";
import { Appcontext } from "../Context";

const List = ({ ele }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div key={ele.uuid} className="agent-container">
      <h2 onClick={handleClick} className="para2">
        {ele.displayName}
      </h2>
      {open ? <Content ele={ele} /> : null}
    </div>
  );
};

export default List;
