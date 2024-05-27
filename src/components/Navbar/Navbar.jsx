import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.scss";
import { FaSearch } from "react-icons/fa";
import { FaPlaystation, FaXbox } from "react-icons/fa";
import { SiApplearcade } from "react-icons/si";
import { setSearch } from "../../features/searchSlice";
import { useSelector, useDispatch } from "react-redux";
import { GiConsoleController } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";

export default function Navbar() {
  const { search } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      if (!search) return;
      navigate(`/search/${search}`);
    }
  };

  return (
    <>
      <div className="navbar">
        <div onClick={() => navigate("/")} className="logo">
          <h1 className="text-logo">R4</h1>
          <h1 className="text-logo">GameStore</h1>
        </div>

        <div className="search">
          <label
            style={{
              color: "white",
              fontSize: 20,
              position: "relative",
              top: 3,
              marginLeft: 20,
              marginRightF: 20,
            }}
          >
            <FaSearch />
          </label>
          <input
            value={search}
            onChange={({ target: { value } }) => {
              if (!value) {
                navigate("/");
              }
              dispatch(setSearch(value));
            }}
            onKeyDown={handleSearch}
            className="search-bar"
            placeholder="Buscar un juego"
            type="search"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            fontSize: 30,
            color: "white",
          }}
        ></div>
        <div className="navbar-profile">
          <CgProfile />
          <h2>Iniciar Sesión</h2>
        </div>
        <div className="navbar-profile">
          <FaCartShopping />
          <h2>Carrito</h2>
        </div>
      </div>

      <div className="menu">
        <a className="menu-item" href="#">
          <FaPlaystation />
          <p>PlayStation</p>
        </a>
        <a className="menu-item" href="#">
          <FaXbox />
          <p>Xbox</p>
        </a>
        <a className="menu-item" href="#">
          <SiApplearcade />
          <p>Coleccionables</p>
        </a>
        <a className="menu-item" href="#">
          <GiConsoleController />
          <p>Consolas</p>
        </a>
      </div>
    </>
  );
}
