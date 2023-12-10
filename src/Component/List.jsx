import React  from "react";

const List = ({ ele, setSelectedItem }) => {




  const handleClick = () => {
    setSelectedItem(ele.uuid);
  };

  return (
    <div className="agent-container">
      <h2 onClick={handleClick} className="para2">
        {ele.displayName}
      </h2>
    </div>
  );
};

export default List;
