import React, { createContext, useReducer, useState } from "react";

import { navbar } from "./data";

export const Appcontext = createContext();

const Context = ({ children }) => {
  const [info, setInfo] = useState({ data: [] });
  const [agent, setAgent] = useState(null);
  const [selectedItem, setSelectedItem] = useState([]);
  const [data, setData] = useState(navbar);
 
 

  return (
    <Appcontext.Provider
      value={{ info, setInfo, agent, setAgent, selectedItem, setSelectedItem, data, setData }}
    >
      {children}
    </Appcontext.Provider>
  );
};

export default Context;
