import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { FaSearch } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { SiApplearcade } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      if (!search) {
        navigate("/");
      } else {
        navigate(`/search/${search}`);
      }
    }
  };

  return (
    <>
      <div onClick={() => navigate("/")} className="navbar">
        <div className="logo">
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
              marginRight: 20,
            }}
          >
            <FaSearch />
          </label>
          <input
            onChange={({ target }) => setSearch(target.value)}
            onKeyDown={handleSearch}
            className="search-bar"
            placeholder="Buscar por titulo"
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
        >
          <p>
            <FaWhatsapp />
          </p>
          <p>449-406-8574</p>
        </div>
      </div>

      <div className="menu">
        <a className="menu-item" href="#">
          <FaPlaystation />
          PS5
        </a>
        <a className="menu-item" href="#">
          <FaPlaystation />
          PS4
        </a>
        <a className="menu-item" href="#">
          <FaXbox />
          Xbox
        </a>
        <a className="menu-item" href="#">
          <SiApplearcade />
          Retro
        </a>
      </div>
    </>
  );
}
