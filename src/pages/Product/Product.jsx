import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navbar, SponsoredProduct } from "../../components";
import { MXN } from "../../helpers";
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
import { useSelector, useDispatch } from "react-redux";
import { setVideogame } from "../../features/videogamesSlice";
import { getVideogameById } from "./services";
import Logo from "../../assets/profile_example.webp";

import "./Product.scss";

const Product = () => {
  const { videogame } = useSelector((state) => state.videogames);
  const dispatch = useDispatch();
  const params = useParams();

  const getVideogame = () => {
    console.log("PARAM", params);
    getVideogameById(params.id).then((videogame) => {
      console.log("RESULT", videogame);
      dispatch(setVideogame(videogame));
    });
  };

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
    getVideogame();
  }, []);

  return (
    <>
      <Navbar />

      {videogame?._id ? (
        <div>
          <div className="product-main">
            <div className="product-info">
              <div className="product-image">
                <img src={videogame.image} />
              </div>

              <div className="product-description">
                <div className="product-description-header">
                  <h2>{videogame.title}</h2>
                  <div>
                    {videogame.platform.includes("PS") ? (
                      <>
                        <SiPlaystation />
                      </>
                    ) : videogame.platform.includes("Xbox") ? (
                      <>
                        <SiXbox />
                      </>
                    ) : (
                      <p>No disponible</p>
                    )}
                    <h3>{`${videogame.platform}`}</h3>
                  </div>
                </div>
                <div className="product-description-price">
                  {videogame.products[0].discount ? (
                    <div>
                      <h3>
                        <s>{`${MXN.format(videogame.products[0].price)}`}</s>
                      </h3>
                      <h3>
                        {`${MXN.format(
                          videogame.products[0].price -
                            videogame.products[0].price *
                              videogame.products[0].discount
                        )} MXN`}
                      </h3>
                    </div>
                  ) : (
                    <h3>{`${MXN.format(videogame.products[0].price)} MXN`}</h3>
                  )}
                </div>
                <div className="product-description-score">
                  {videogame.score > 4.5 ? (
                    <BsStarFill style={{ color: "yellow" }} />
                  ) : videogame.score < 4.4 && videogame.score > 3.3 ? (
                    <BsStarFill style={{ color: "#e0e4e6" }} />
                  ) : videogame.score < 3.2 && videogame.score > 2.3 ? (
                    <BsStarHalf style={{ color: "#e0e4e6" }} />
                  ) : (
                    <BsStar />
                  )}
                  <p>{`${videogame.score}/5`}</p>
                </div>

                <div className="product-description-state">
                  <h3>{videogame.products[0].condition}</h3>
                  <div>
                    {videogame.products[0].sponsored ? (
                      <SponsoredProduct />
                    ) : (
                      <></>
                    )}
                  </div>
                </div>

                <div className="product-description-conditions">
                  <div>
                    <h3>{`${videogame.products[0].state}`}</h3>
                    {videogame.products[0].condition.includes("Completo") ? (
                      <FaRegCheckCircle />
                    ) : videogame.products[0].condition.includes(
                        "Caja y/o Manual"
                      ) ? (
                      <MdOutlineDiscFull style={{ fontSize: 18 }} />
                    ) : (
                      <LuDisc />
                    )}
                  </div>
                  <div>
                    <h3>{`Vendedor: ${videogame.products[0].vendor.vendorData.name}`}</h3>
                    {videogame.products[0].vendor.metadata.verified ? (
                      <BsFillPatchCheckFill style={{ color: "#24a2db" }} />
                    ) : (
                      <></>
                    )}
                    {videogame.products[0].protected ? (
                      <IoShieldCheckmark style={{ color: "#24a2db" }} />
                    ) : (
                      <></>
                    )}
                  </div>
                  <div>
                    {videogame.products[0].protected ? (
                      <small>
                        La compra está <b>protegida</b>
                      </small>
                    ) : (
                      <></>
                    )}
                    {videogame.products[0].vendor.metadata.verified ? (
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

            <div className="product-section-1">
              <h2>Otras ofertas de:</h2>
              <h2>{videogame.title}</h2>
            </div>

            <div className="product-offers">
              {videogame.products &&
                videogame.products.map((product, index) => {
                  return (
                    <div key={index} className="product-offer">
                      <div className="product-offer-picture">
                        <img src={Logo}></img>
                      </div>
                      <div className="product-offer-vendor">
                        <div>
                          <h3>{product.vendor.vendorData.name}</h3>
                          {product.vendor.metadata.verified ? (
                            <BsFillPatchCheckFill
                              style={{ color: "#24a2db" }}
                            />
                          ) : (
                            <></>
                          )}
                        </div>
                        <div>
                          <small>Valoración del vendedor:</small>
                          {product.vendor.metadata.score > 4.5 ? (
                            <BsStarFill style={{ color: "yellow" }} />
                          ) : product.vendor.metadata.score < 4.4 &&
                            product.vendor.score > 3.3 ? (
                            <BsStarFill style={{ color: "#e0e4e6" }} />
                          ) : product.vendor.metadata.score < 3.2 &&
                            product.vendor.vendor.score > 2.3 ? (
                            <BsStarHalf style={{ color: "#e0e4e6" }} />
                          ) : (
                            <BsStar />
                          )}
                          <h3>{product.vendor.metadata.score ?? "?"} / 5</h3>
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
                          <div>
                            <h3
                              style={{ color: "rgb(4, 255, 4)" }}
                            >{`${MXN.format(product.price)} MXN`}</h3>
                          </div>
                        )}
                        <div>
                          <h3>{product.condition}</h3>
                          <h3>{product.state}</h3>
                        </div>
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
      ) : (
        <></>
      )}
    </>
  );
};

export default Product;
