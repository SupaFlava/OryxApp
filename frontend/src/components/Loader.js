import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      className="spinner"
      animation="border"
      role="status"
      style={{
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
        color: "#70e1f5",
      }}
    >
      <span className="sr-only">loading... </span>
    </Spinner>
  );
};

export default Loader;
