import React, { useContext, useEffect, useState } from "react";
import { Appcontext } from "../Context";
import List from "./List";

const Section = () => {
  const { info, setInfo, agent, setAgent,selectedItem, setSelectedItem } = useContext(Appcontext);

  

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

  return (
    <div className="section">
      {info.data.map((ele) => {
        return (
          <List key={ele.uuid} ele={ele} setSelectedItem={setSelectedItem} />
        );
      })}

      <div className="content">
        <img className="img" src={agent?.data?.displayIcon} />
        <div className="right-content">
          <h3 className="role">// Role</h3>
          {agent?.data?.role && agent?.data?.role.displayName && (
            <h3 className="title2">{agent?.data?.role.displayName}</h3>
          )}

          <br></br>
          <h3 className="role">// Biography</h3>
          <p className="desc">{agent?.data?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Section;
