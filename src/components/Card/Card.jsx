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
            setTimeout(() => {
              navigate("/product");
              setLoading(false);
            }, 2000);
            return;
          }
        }}
      >
        <div className="card-header">
          <div className="card-header-image">
            <img src={image} />
          </div>

          <div className="card-header-title">
            <h2>{title}</h2>
          </div>
        </div>

        <div className="card-body">
          <div className="card-body-1">
            <div className="card-body-platform">
              {platform.includes("PS") ? (
                <div>
                  <SiPlaystation />
                  <p>{platform}</p>
                </div>
              ) : platform.includes("Xbox") ? (
                <div>
                  <SiXbox />
                  <p>{platform}</p>
                </div>
              ) : (
                <></>
              )}
            </div>

            <div className="card-body-state">
              {vendor[0].state === "Usado" ? (
                <div>
                  <p>{vendor[0].state}</p>
                </div>
              ) : vendor[0].state === "Buen estado" ? (
                <div>
                  <p>{vendor[0].state}</p>
                </div>
              ) : vendor[0].state === "Excelente estado" ? (
                <div>
                  <TbDiscountCheck />
                  <p>Garantizado</p>
                </div>
              ) : vendor[0].state === "Nuevo" ? (
                <div style={{ color: "yellow" }}>
                  <TbDiscountCheck style={{ color: "yellow" }} />
                  <p>Nuevo</p>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="card-body-2">
            <div className="card-body-price">
              {vendor[0].discount ? (
                <div>
                  <h3 style={{ textDecoration: "line-through", color: "grey" }}>
                    {MXN.format(vendor[0].price)}
                  </h3>
                  <h3 style={{ color: "#1ae817" }}>
                    {MXN.format(
                      vendor[0].price - vendor[0].price * vendor[0].discount
                    )}
                  </h3>
                </div>
              ) : (
                <div>
                  <h3 style={{ color: "#1ae817" }}>
                    {MXN.format(vendor[0].price)}
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}
