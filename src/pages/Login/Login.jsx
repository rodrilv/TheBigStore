import React from "react";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  return (
    <div>
      <div>
        <h2>Inicio de Sesión</h2>
      </div>
      <div>
        <input
          onChange={({ target: { value } }) => {
            setUser({ ...user, username: value });
          }}
          type="text"
          placeholder="Nombre de Usuario"
        ></input>
        <input
          onChange={({ target: { value } }) => {
            setUser({ ...user, password: value });
          }}
          type="password"
          placeholder="Contraseña"
        ></input>
        <button>Iniciar Sesión</button>
      </div>
    </div>
  );
};

export default Login;
