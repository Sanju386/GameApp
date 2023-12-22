import React, { useContext, useEffect, useState } from "react";
import { Appcontext } from "../Context";
import List from "./List";
import { IoIosArrowDown } from "react-icons/io";

const Section = () => {
 

  const { info, setInfo, agent, setAgent, selectedItem, setSelectedItem } =
    useContext(Appcontext);

  const [wantedArray, setWantedArray] = useState({
    firstIndex: 0,
    secondIndex: 3,
  });

  // console.log(wantedArray);

  //fetching agent datalist

  const fetchData = async () => {
    try {
      const response = await fetch("https://valorant-api.com/v1/agents");

      const dataList = await response.json();

      setInfo(dataList);
    } catch (error) {
      console.log("Error 1");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //fetching agents by uuid

  const fetchAgent = async (id) => {
    try {
      const response = await fetch(`https://valorant-api.com/v1/agents/${id}`);

      const dataList = await response.json();

      setAgent(dataList);
    } catch (error) {
      console.log("Error 2");
    }
  };

  useEffect(() => {
    fetchAgent(selectedItem);
  }, [selectedItem]);

  const handleClick = () => {
    setWantedArray((prev) => {
      if ((prev.secondIndex + 1) % info.data.length === 0) {
        // console.log("Hiii");
        return { firstIndex: 0, secondIndex: 3 };
      }
      return {
        firstIndex: prev.firstIndex + 1,
        secondIndex: prev.secondIndex + 1,
      };
    });
  };

  return (
    <>
      <div className="section">
        <div className="agent-list">
          {info.data
            .slice(wantedArray.firstIndex, wantedArray.secondIndex)
            .map((ele) => {
              return (
                <List
                  key={ele.uuid}
                  ele={ele}
                  setSelectedItem={setSelectedItem}
                />
              );
            })}
          <button className="btn" onClick={handleClick}>
          <IoIosArrowDown />
          </button>
        </div>

        {/* //Content */}
        {agent?.data?.role && agent?.data?.role.displayName && (
          <div className="content">
            <img className="img" src={agent?.data?.fullPortraitV2} />
            <div className="right-content">
              <h1 className="role">// Role</h1>

              <h3 className="title2">{agent?.data?.role.displayName}</h3>

              <br></br>
              <h3 className="role">// Biography</h3>
              <p className="desc">{agent?.data?.description}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Section;
