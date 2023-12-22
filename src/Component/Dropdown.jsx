import React, { useContext } from "react";

import { Appcontext } from "../Context";

const Dropdown = () => {
  const { data } = useContext(Appcontext);

  return (
    <select>
      {data?.title?.dropdown?.map((itm, index) => {
        console.log("dropdown")
     
        return <option key={index}>{itm}</option>;
      })}
    </select>
  );
};

export default Dropdown;


