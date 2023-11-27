import React, { createContext, useState } from "react";

export const Appcontext = createContext();

const Context = ({ children }) => {

    const [info, setInfo] = useState({ data: [] });
    

  return <Appcontext.Provider value={{info,setInfo}}>{children}</Appcontext.Provider>;
};

export default Context;
