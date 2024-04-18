import { Navbar } from "../../components";
import { videogames } from "../../helpers/static";
import { MXN } from "../../helpers";
import "./Product.scss";

const Product = () => {
  return (
    <div>
      <Navbar />
      <div className="product-main">
        <div className="product-info">
          <div className="product-image">
            <img src={videogames[1].image} />
          </div>
          <div className="product-description">
            <h2>{videogames[1].title}</h2>
            <h3>{`Precio:  ${MXN.format(
              videogames[1].vendor[0].price
            )} MXN`}</h3>
            <h3>{`Plataforma: ${videogames[0].platform}`}</h3>
            <h3>{videogames[1].vendor[0].state}</h3>
            <h3>{`Condiciones: ${videogames[1].vendor[0].condition}`}</h3>
            <h3>{`Vendedor: R4 Game Store`}</h3>

            <button>Comprar</button>
            <button>Agregar al carrito</button>
          </div>
        </div>
        <h2 className="product-section-1">Otras ofertas</h2>
        <div className="product-offers">
          {videogames[1].vendor &&
            videogames[1].vendor.map((product) => {
              return (
                <div className="product-offer">
                  <h3>{MXN.format(product.price)}</h3>
                  <h3>{product.condition}</h3>
                  <h3>{product.state}</h3>
                  <div>
                    <button>Comprar</button>
                    <button>Agregar al carrito</button>
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
