import { useState } from "react";
import { createVideogame } from "../../../../services";
import { RxCross2 } from "react-icons/rx";
import { PiKeyReturnBold } from "react-icons/pi";
import Placeholder from "../../../../../../assets/image-placeholder.jpg";
import "./Videogame.scss";
const Console = () => {
  const [tag, setTag] = useState("");
  const [lock, setLock] = useState(false);
  const [videogame, setVideogame] = useState({
    title: "",
    platform: "PS5",
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
    discount: {
      complete: 0,
      manual: 0,
      disk: 0,
    },
    score: 0,
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
    setLock(true);
    try {
      const response = await createVideogame(videogame);
      setVideogame({ ...videogame, tags: [] });
      alert(response.data.message);
    } catch (error) {
      alert("Hubo un error al crear el videojuego");
    }
    setLock(false);
  };
  return (
    <div className="segment-create-videogame">
      <div>
        <img src={videogame.image || Placeholder} />
      </div>

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
        <h3>Descuentos</h3>
        <input
          onChange={({ target }) =>
            setVideogame({
              ...videogame,
              discount: { complete: target.value },
            })
          }
          type="number"
          placeholder="Completo"
        ></input>
        <input
          onChange={({ target }) =>
            setVideogame({
              ...videogame,
              discount: { manual: target.value },
            })
          }
          type="number"
          placeholder="Caja y/o Manual"
        ></input>
        <input
          onChange={({ target }) =>
            setVideogame({
              ...videogame,
              discount: { disk: target.value },
            })
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

      <div>
        <h3>{"Calificacion (Promedio)"}</h3>
        <input
          onChange={({ target }) =>
            setVideogame({
              ...videogame,
              discount: { complete: target.value },
            })
          }
          max="10"
          min="1"
          step="0.1"
          type="number"
          placeholder="Calificacion"
        ></input>
      </div>

      <div className="segment-tags">
        <div>
          <h3>Etiquetas</h3>
        </div>

        <div className="tags-container">
          {videogame &&
            videogame.tags.map((tag, index) => {
              return (
                <div className="tag-item">
                  <p>{tag}</p>
                  <RxCross2
                    onClick={() => {
                      videogame.tags.splice(index, 1);
                      setVideogame({ ...videogame });
                    }}
                  />
                </div>
              );
            })}
        </div>

        <div className="tags-input">
          <input
            value={tag}
            onKeyDown={({ key }) => {
              if (key === "Enter") {
                if (tag === "") return;
                videogame.tags.push(tag);
                setTag("");
                setVideogame({ ...videogame });
              }
            }}
            onChange={({ target: { value } }) => {
              if (tag.length > 15) {
                setTag(tag.substring(0, tag.length - 1));
                return;
              }
              setTag(value);
            }}
            type="text"
          ></input>
          <PiKeyReturnBold />
        </div>
      </div>

      <div className="segment-save">
        <button
          disabled={lock}
          onClick={async () => await handleCreateVideogame()}
        >
          Guardar
        </button>
      </div>
    </div>
  );
};

export default Console;
