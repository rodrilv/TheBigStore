import { Navigate } from "react-router-dom";
import { Sidebar } from "../../components";
import "./Admin.css";
import { useState } from "react";

export const Admin = ({ children }) => {
  const [segment, setSegment] = useState(0);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "300px 1200px" }}>
      <div>
        <Sidebar />
      </div>
      <div>
        <div>
          <p>Subir un videojuego</p>
          <p>Subir una Consola</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};
