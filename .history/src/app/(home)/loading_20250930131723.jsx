import React from "react";
import "./loading.css";
const Loading = () => {
  return (
    <h1
      style={{ marginBlock: "9rem", display: "flex", justifyContent: "center" }}
    >
      {" "}
      <div className=""="lds-ripple"><div></div><div></div></div>
    </h1>
  );
};

export default Loading;
