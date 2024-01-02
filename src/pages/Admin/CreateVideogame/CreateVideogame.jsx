import { useState } from "react";
import "./CreateVideogame.css";
export const CreateVideogame = () => {
  const [videogame, setVideogame] = useState({
    title: "",
    platform: "",
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
  return <div>CreateVideogame</div>;
};
