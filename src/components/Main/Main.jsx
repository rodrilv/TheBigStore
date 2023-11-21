import React from "react";
import "./style.css";

export default function Main(props) {
  return <div className="grid">{props.children}</div>;
}
