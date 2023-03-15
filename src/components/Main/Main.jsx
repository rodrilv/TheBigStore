import React from "react";
import Card from "../Card/Card";
import "./style.css";
import { PropsWithChildren } from "react";

export default function Main(props) {
  return <div className="grid">{props.children}</div>;
}
