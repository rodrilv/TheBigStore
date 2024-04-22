import { useEffect } from "react";
import { Navbar, SponsoredProduct } from "../../components";
import { videogames } from "../../helpers/static";
import { MXN } from "../../helpers";
import "./Product.scss";
import { SiXbox } from "react-icons/si";
import { SiPlaystation } from "react-icons/si";
import {
  BsStar,
  BsStarHalf,
  BsStarFill,
  BsFillPatchCheckFill,
} from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineDiscFull } from "react-icons/md";
import { LuDisc } from "react-icons/lu";
import { IoShieldCheckmark } from "react-icons/io5";
import Logo from "../../assets/profile_example.webp";

const Product = () => {
  const scrollPageTop = (top = 0) => {
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };
  const scrollToTop = () => {
    if (window.screen.width <= 500) {
      scrollPageTop(490);
    } else {
      scrollPageTop(0);
    }
  };

  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="product-main">
        <div className="product-info">
          <div className="product-image">
            <img src={videogames[1].image} />
          </div>
          <div className="product-description">
            <div className="product-description-header">
              <h2>{videogames[1].title}</h2>
              <div>
                {videogames[1].platform.includes("PS") ? (
                  <>
                    <SiPlaystation />
                  </>
                ) : videogames[1].platform.includes("Xbox") ? (
                  <>
                    <SiXbox />
                  </>
                ) : (
                  <p>No disponible</p>
                )}
                <h3>{`${videogames[1].platform}`}</h3>
              </div>
            </div>
            <div className="product-description-price">
              {videogames[1].vendor[0].discount ? (
                <div>
                  <h3>
                    <s>{`${MXN.format(videogames[1].vendor[0].price)}`}</s>
                  </h3>
                  <h3>
                    {`${MXN.format(
                      videogames[1].vendor[0].price -
                        videogames[1].vendor[0].price *
                          videogames[1].vendor[0].discount
                    )} MXN`}
                  </h3>
                </div>
              ) : (
                <h3>{`${MXN.format(videogames[1].vendor[0].price)} MXN`}</h3>
              )}
            </div>
            <div className="product-description-score">
              {videogames[1].score > 4.5 ? (
                <BsStarFill style={{ color: "yellow" }} />
              ) : videogames[1].score < 4.4 && videogames[1].score > 3.3 ? (
                <BsStarFill style={{ color: "#e0e4e6" }} />
              ) : videogames[1].score < 3.2 && videogames[1].score > 2.3 ? (
                <BsStarHalf style={{ color: "#e0e4e6" }} />
              ) : (
                <BsStar />
              )}
              <p>{`${videogames[1].score}/5`}</p>
            </div>

            <div className="product-description-state">
              <h3>{videogames[1].vendor[0].state}</h3>
              <div>
                {videogames[1].vendor[0].sponsored ? (
                  <SponsoredProduct />
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div className="product-description-conditions">
              <div>
                <h3>{`${videogames[1].vendor[0].condition}`}</h3>
                {videogames[1].vendor[0].condition.includes("Completo") ? (
                  <FaRegCheckCircle />
                ) : videogames[1].vendor[0].condition.includes(
                    "Caja y/o Manual"
                  ) ? (
                  <MdOutlineDiscFull style={{ fontSize: 18 }} />
                ) : (
                  <LuDisc />
                )}
              </div>
              <div>
                <h3>{`Vendedor: R4 Games Store`}</h3>
                {videogames[1].vendor[0].verified ? (
                  <BsFillPatchCheckFill style={{ color: "#24a2db" }} />
                ) : (
                  <></>
                )}
                {videogames[1].vendor[0].protected ? (
                  <IoShieldCheckmark style={{ color: "#24a2db" }} />
                ) : (
                  <></>
                )}
              </div>
              <div>
                {videogames[1].vendor[0].protected ? (
                  <small>
                    La compra está <b>protegida</b>
                  </small>
                ) : (
                  <></>
                )}
                {videogames[1].vendor[0].verified ? (
                  <small>
                    El vendedor está <b>verificado</b>
                  </small>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div className="product-description-actions">
              <button>Comprar</button>
              <button>Agregar al carrito</button>
            </div>
          </div>
        </div>
        <h2 className="product-section-1">Otras ofertas</h2>
        <div className="product-offers">
          {videogames[1].vendor &&
            videogames[1].vendor.map((product, index) => {
              return (
                <div key={index} className="product-offer">
                  <div className="product-offer-picture">
                    <img src={Logo}></img>
                  </div>
                  <div className="product-offer-vendor">
                    <div>
                      <h3>{product.vendorId}</h3>
                      {product.verified ? (
                        <BsFillPatchCheckFill style={{ color: "#24a2db" }} />
                      ) : (
                        <></>
                      )}
                    </div>
                    <div>
                      <small>Valoración del vendedor:</small>
                      {product.score > 4.5 ? (
                        <BsStarFill style={{ color: "yellow" }} />
                      ) : product.score < 4.4 && product.score > 3.3 ? (
                        <BsStarFill style={{ color: "#e0e4e6" }} />
                      ) : product.score < 3.2 && product.score > 2.3 ? (
                        <BsStarHalf style={{ color: "#e0e4e6" }} />
                      ) : (
                        <BsStar />
                      )}
                      <h3>{product.score ?? "?"} / 5</h3>
                    </div>
                  </div>
                  <div className="product-offer-state">
                    {product.discount ? (
                      <div>
                        <h3>
                          <s>{`${MXN.format(product.price)}`}</s>
                        </h3>
                        <h3 style={{ color: "rgb(4, 255, 4)" }}>
                          {`${MXN.format(
                            product.price - product.price * product.discount
                          )} MXN`}
                        </h3>
                      </div>
                    ) : (
                      <h3 style={{ color: "rgb(4, 255, 4)" }}>{`${MXN.format(
                        product.price
                      )} MXN`}</h3>
                    )}
                    <h3>{product.condition}</h3>
                    <h3>{product.state}</h3>
                  </div>

                  <div className="product-offer-actions">
                    <button>Comprar</button>
                    <button>Agregar al carrito</button>
                    <div>
                      {product.sponsored ? <SponsoredProduct /> : <></>}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Product;
