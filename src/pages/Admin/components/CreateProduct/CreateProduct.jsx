import { useState } from "react";
import { Console, Videogame } from "./components";
import "./CreateProduct.scss";
const CreateVideogame = () => {
  const [segment, setSegment] = useState(0);

  return (
    <div>
      <div className="segment-container">
        <div
          onClick={() => setSegment(0)}
          className={`segment ${segment === 0 ? "segment-selected" : ""}`}
        >
          <p>Subir un Videojuego</p>
        </div>
        <div
          onClick={() => setSegment(1)}
          className={`segment ${segment === 1 ? "segment-selected" : ""}`}
        >
          <p>Subir una Consola</p>
        </div>
      </div>

      <div className="segment-menu">
        {segment === 0 ? <Videogame /> : <Console />}
      </div>
    </div>
  );
};

export default CreateVideogame;
