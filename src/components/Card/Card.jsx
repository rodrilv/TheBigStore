import { useState } from "react";
import { TbDiscountCheck } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { SiPlaystation, SiXbox } from "react-icons/si";
import "./Card.scss";

export default function Card({ title, state, platform, price, image }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  return (
    <div className={loading ? "card-loading" : ""}>
      {loading ? (
        <div className="card-loader-container">
          <span className="card-loader"></span>
        </div>
      ) : null}

      <div
        className="card"
        onClick={() => {
          if (!loading) {
            setLoading(true);
            return;
          }
        }}
      >
        <div className="game-image">
          <img src={image}></img>
        </div>

        <div></div>

        <div className="card-body">
          <div className="card-title">{title}</div>
          <div className="card-badge">
            <div>
              <div>
                {platform.includes(["PS"]) ? (
                  <div style={{ fontSize: "23px" }}>
                    <SiPlaystation />
                  </div>
                ) : platform.includes(["Xbox"]) ? (
                  <div style={{ fontSize: "19px" }}>
                    <SiXbox />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="product-state">{state}</div>
          </div>
        </div>

        <div className="card-footer">
          <div className="product-price">{price}</div>
          {[
            "Nuevo",
            "Excelente Estado",
            "Excelente estado",
            "Buen Estado",
            "Buen estado",
            "Usado",
          ].some((st) => st === state) ? (
            <>
              <div
                style={{
                  position: "relative",
                  bottom: "13px",
                  color: state === "Nuevo" ? "#22d623" : "white",
                  fontSize: 30,
                }}
              >
                <div className="product-state-symbol">
                  <TbDiscountCheck />
                  <p>{state === "Nuevo" ? "Nuevo" : "Garantizado"}</p>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
