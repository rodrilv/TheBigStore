import React from "react";
import "./style.css";

export default function Card({ title, state, platform, price, image }) {
  return (
    <div className="card">
      <div className="game-image">
        <img src={image}></img>
      </div>

      <div className="card-title">{title}</div>
      <div className="product-state">{state}</div>
      <div className="card-badge-title">
        <div className="card-badge">{platform}</div>
      </div>

      <div className="product-price">{price}</div>
    </div>
  );
}
