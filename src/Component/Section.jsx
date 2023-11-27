import React, { useContext, useEffect, useState } from "react";
import { Appcontext } from "../Context";
import List from "./List";

const Section = () => {
  const { info, setInfo } = useContext(Appcontext);




  const fetchData = async () => {
    try {
      const response = await fetch("https://valorant-api.com/v1/agents");

      const dataList = await response.json();

      setInfo(dataList);
      
    } catch (error) {
      alert("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="section">
      {info.data.map((ele) => {
        return (
          <>
            <List ele={ele} />
          </>
        );
      })}
    </div>
  );
};

export default Section;
