import React from "react";
import "./loading.css";
const Loading = () => {
  return (
    <h1
     
    >
      {" "}
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </h1>
  );
};

export default Loading;
 style={{ marginBlock: "9rem", display: "flex", justifyContent: "center" }}