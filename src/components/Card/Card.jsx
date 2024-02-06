import { useState } from "react";
import { TbDiscountCheck } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import "./style.css";

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
        {state === "Nuevo" || "Excelente" ? (
          <>
            <span>{state === "Nuevo" ? "Nuevo" : "Garantizado"}</span>
            <div
              className="product-verified"
              style={{
                color: state === "Nuevo" ? "#22d623" : "white",
                fontSize: 30,
              }}
            >
              <TbDiscountCheck />
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
