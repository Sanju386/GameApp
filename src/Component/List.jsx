import React, { useContext }  from "react";
import { Appcontext } from "../Context";

const List = ({ ele, setSelectedItem }) => {




  const handleClick = () => {
    setSelectedItem(ele.uuid);



  };

  return (


      <h2 onClick={handleClick} className="para2">
        {ele.displayName}
      </h2>
      
    
    
  );
};

export default List;
