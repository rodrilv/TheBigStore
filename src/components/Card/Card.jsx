import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Card({ id, title, state, platform, price, image }) {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/game/${id}`)}>
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
