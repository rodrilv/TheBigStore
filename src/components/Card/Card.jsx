import { useState } from "react";
import { TbDiscountCheck } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { SiPlaystation, SiXbox } from "react-icons/si";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import { MXN } from "../../helpers";
import "./Card.scss";

export default function Card({ title, platform, image, vendor, score }) {
  console.log(vendor);
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
        <div className="card-image">
          <img src={image}></img>
        </div>

        <div className="card-body">
          <h2>{title}</h2>
          <div>
            {platform.includes("PS") ? (
              <>
                <SiPlaystation />
                <p>{vendor[0]["state"]}</p>
              </>
            ) : platform.includes("Xbox") ? (
              <>
                <SiXbox />
                <p>{vendor[0]["state"]}</p>
              </>
            ) : (
              <p>No disponible</p>
            )}
          </div>
        </div>

        <div className="card-footer">
          <div className="card-footer-1">
            <div>
              <TbDiscountCheck
                style={{
                  color: ["Excelente Estado", "Buen Estado", "Usado"].includes(
                    vendor[0]["state"]
                  )
                    ? "white"
                    : "yellow",
                }}
              />

              {["Excelente Estado", "Buen Estado", "Usado"].includes(
                vendor[0]["state"]
              ) ? (
                <p style={{ color: "white" }}>Garantizado</p>
              ) : (
                <p style={{ color: "yellow" }}>Nuevo</p>
              )}
            </div>
            <h2>{MXN.format(vendor[0]["price"])}</h2>
          </div>
          <div className="card-footer-2">
            <div>
              {score > 4.5 ? (
                <BsStarFill style={{ color: "yellow" }} />
              ) : score < 4.4 && score > 3.3 ? (
                <BsStarFill style={{ color: "#e0e4e6" }} />
              ) : score < 3.2 && score > 2.3 ? (
                <BsStarHalf style={{ color: "#e0e4e6" }} />
              ) : (
                <BsStar />
              )}
            </div>
            <div>
              <p>{score}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
