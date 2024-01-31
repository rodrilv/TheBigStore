import { useState } from "react";
import Placeholder from "../../../../assets/image-placeholder.jpg";
import "./CreateVideogame.scss";
import { createVideogame } from "../../services";
const CreateVideogame = () => {
  const [segment, setSegment] = useState(0);
  const [tag, setTag] = useState("");
  const [videogame, setVideogame] = useState({
    title: "",
    platform: "",
    image: "",
    tags: [],
    state: {
      complete: "",
      manual: "",
      disk: "",
    },
    quantity: {
      complete: 0,
      manual: 0,
      disk: 0,
    },
    price: {
      complete: 0,
      manual: 0,
      disk: 0,
    },
  });
  const [gameConsole, setGameConsole] = useState({
    platform: "",
    image: "",
    tags: [],
    state: "",
    quantity: 0,
    price: 0,
  });

  const handleCreateVideogame = async () => {
    try {
      const response = await createVideogame(videogame);
      alert(response.data.message);
    } catch (error) {
      alert("Hubo un error al crear el videojuego");
    }
  };
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
        {segment === 0 ? (
          <div className="segment-create-videogame">
            <img
              width={200}
              height={240}
              src={videogame.image || Placeholder}
            />
            <div>
              <h3>General</h3>
              <input
                onChange={({ target }) =>
                  setVideogame({ ...videogame, image: target.value })
                }
                type="text"
                placeholder="Imagen"
              ></input>
              <input
                onChange={({ target }) =>
                  setVideogame({ ...videogame, title: target.value })
                }
                type="text"
                placeholder="Título"
              ></input>
              <select
                onChange={({ target }) =>
                  setVideogame({ ...videogame, platform: target.value })
                }
              >
                <option value={"PS5"}>PS5</option>
                <option value={"PS4"}>PS4</option>
                <option value={"PS3"}>PS3</option>
                <option value={"PS3"}>PS2</option>

                <option value={"Xbox One"}>Xbox One</option>
                <option value={"Xbox Series X"}>Xbox Series X</option>
              </select>
            </div>

            <div>
              <h3>Estado</h3>
              <input
                onChange={({ target }) =>
                  setVideogame({
                    ...videogame,
                    state: { complete: target.value },
                  })
                }
                type="text"
                placeholder="Completo"
              ></input>
              <input
                onChange={({ target }) =>
                  setVideogame({
                    ...videogame,
                    state: { manual: target.value },
                  })
                }
                type="text"
                placeholder="Caja y/o Manual"
              ></input>
              <input
                onChange={({ target }) =>
                  setVideogame({ ...videogame, state: { disk: target.value } })
                }
                type="text"
                placeholder="Solo Disco"
              ></input>
            </div>
            <div>
              <h3>Precios</h3>
              <input
                onChange={({ target }) =>
                  setVideogame({
                    ...videogame,
                    price: { complete: target.value },
                  })
                }
                type="number"
                placeholder="Completo"
              ></input>
              <input
                onChange={({ target }) =>
                  setVideogame({
                    ...videogame,
                    price: { manual: target.value },
                  })
                }
                type="number"
                placeholder="Caja y/o Manual"
              ></input>
              <input
                onChange={({ target }) =>
                  setVideogame({ ...videogame, price: { disk: target.value } })
                }
                type="number"
                placeholder="Solo Disco"
              ></input>
            </div>

            <div>
              <h3>Cantidad</h3>
              <input
                onChange={({ target }) =>
                  setVideogame({
                    ...videogame,
                    quantity: { complete: target.value },
                  })
                }
                type="number"
                placeholder="Completo"
              ></input>
              <input
                onChange={({ target }) =>
                  setVideogame({
                    ...videogame,
                    quantity: { manual: target.value },
                  })
                }
                type="number"
                placeholder="Caja y/o Manual"
              ></input>
              <input
                onChange={({ target }) =>
                  setVideogame({
                    ...videogame,
                    quantity: { disk: target.value },
                  })
                }
                type="number"
                placeholder="Solo Disco"
              ></input>
            </div>

            <div className="segment-tags">
              <h3>Etiquetas</h3>
              <input
                value={tag}
                onChange={({ target: { value } }) => setTag(value)}
                type="text"
              ></input>
              <button
                onClick={() => {
                  if (tag === "") return;
                  videogame.tags.push(tag);
                  setTag("");
                  setVideogame({ ...videogame });
                }}
              >
                Guardar Etiqueta
              </button>
            </div>
            <div>
              <button onClick={async () => await handleCreateVideogame()}>
                Guardar
              </button>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default CreateVideogame;
