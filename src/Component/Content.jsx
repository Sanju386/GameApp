import React from "react";


const Content = ({ ele }) => {
  // console.log(ele);
  const { uuid, displayIconSmall, description, role } = ele;

  return (
    <>
      <div className="content" key={uuid}>
        <img className="img" src={displayIconSmall} />
        <div className="right-content">
          <h3 className="role">// Role</h3>
          {role && role.displayName && (
            <h3 className="title2">{role.displayName}</h3>
          )}

          <br></br>
          <h3 className="role">// Biography</h3>
          <p className="desc">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Content;
