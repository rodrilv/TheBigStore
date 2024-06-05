import { useState } from "react";
import { TbDiscountCheck } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { SiPlaystation, SiXbox } from "react-icons/si";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import { MXN } from "../../helpers";
import "./Card.scss";
import "animate.css";

export default function Card({ _id, title, platform, product, image, score }) {
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
        className={`animate__animated animate__fadeInLeft animate__faster card`}
        style={{
          opacity: product ? 1 : 0.5,
        }}
        onClick={async () => {
          if (product) {
            if (!loading) {
              setLoading(true);
              navigate(`/product/${_id}`);
              setTimeout(() => {
                setLoading(false);
              }, 3000);
              return;
            }
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
              {product ? (
                <>
                  {product.condition && product.protected === "Usado" ? (
                    <div>
                      <TbDiscountCheck />
                      <p>Garantizado</p>
                    </div>
                  ) : product.condition === "Buen estado" ? (
                    <div style={{ color: "#04abf8" }}>
                      <TbDiscountCheck style={{ color: "#04abf8" }} />
                      <p>{product.condition}</p>
                    </div>
                  ) : product.condition === "Excelente estado" ? (
                    <div style={{ color: "#04abf8" }}>
                      <TbDiscountCheck style={{ color: "#04abf8" }} />
                      <p>{product.condition}</p>
                    </div>
                  ) : product.condition === "Nuevo" ? (
                    <div style={{ color: "yellow" }}>
                      <TbDiscountCheck style={{ color: "yellow" }} />
                      <p>Nuevo</p>
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <p className="product-unavailable">
                  No disponible por el momento
                </p>
              )}
            </div>
          </div>
          <div className="card-body-2">
            {product ? (
              <div className="card-body-price">
                {product.discount ? (
                  <div>
                    <h3
                      style={{ textDecoration: "line-through", color: "grey" }}
                    >
                      {MXN.format(product.price)}
                    </h3>
                    <h3 style={{ color: "#1ae817" }}>
                      {MXN.format(
                        product.price - product.price * product.discount
                      )}
                    </h3>
                  </div>
                ) : (
                  <div>
                    <h3 style={{ color: "#1ae817" }}>
                      {MXN.format(product.price)}
                    </h3>
                  </div>
                )}
              </div>
            ) : (
              <></>
            )}

            <div className="card-body-score">
              <p>Calificación:</p>

              {score > 4.5 ? (
                <BsStarFill style={{ color: "yellow" }} />
              ) : score < 4.4 && score > 3.3 ? (
                <BsStarFill style={{ color: "#e0e4e6" }} />
              ) : score < 3.2 && score > 2.3 ? (
                <BsStarHalf style={{ color: "#e0e4e6" }} />
              ) : score > 2.3 ? (
                <BsStar />
              ) : (
                <p>N/A</p>
              )}
              <p>{`${score}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
