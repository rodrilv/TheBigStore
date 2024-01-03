import { Navigate } from "react-router-dom";
import { Sidebar } from "../../components";
import "./Admin.css";
import { useState } from "react";
import "animate.css";

export const Admin = ({ children }) => {
  const [segment, setSegment] = useState(0);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "300px 1200px" }}>
      <div>
        <Sidebar />
      </div>
      <div className="segment">
        <div onClick={() => setSegment(0)} className="segment-1">
          <p className={segment === 0 ? "selected-segment" : ""}>
            Subir un Videojuego
          </p>
        </div>
        <div onClick={() => setSegment(1)} className="segment-2">
          <p className={segment === 1 ? "selected-segment" : ""}>
            Subir una Consola
          </p>
        </div>
      </div>
    </div>
  );
};
