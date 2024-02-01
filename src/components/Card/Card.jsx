import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Card({ id, title, state, platform, price, image }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  return (
    <div className={loading ? "card-loading" : ""}>
      {loading ? <span className="card-loader"></span> : null}

      <div
        className="card"
        onClick={() => {
          setLoading(true);
          if (loading) {
            return;
          }
          //navigate(`/game/${id}`);
          console.log("Clicked");
        }}
      >
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
    </div>
  );
}
