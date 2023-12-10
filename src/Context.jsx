import React, { createContext, useReducer, useState } from "react";
import { reducer } from "./reducer";

export const Appcontext = createContext();

const Context = ({ children }) => {
  const [info, setInfo] = useState({ data: [] });
  const [agent, setAgent] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);

  return (
    <Appcontext.Provider
      value={{ info, setInfo, agent, setAgent, selectedItem, setSelectedItem }}
    >
      {children}
    </Appcontext.Provider>
  );
};

export default Context;
