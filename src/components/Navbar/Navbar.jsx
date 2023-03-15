import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (!search) {
        navigate("/");
      } else {
        navigate(`/search/${search}`);
      }
    }
  };
  return (
    <div className="navbar">
      <input
        className="search-bar"
        type="search"
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      ></input>
      <div className="menu">
        <a href="#">PS5</a>
        <a href="#">PS4</a>
        <a href="#">Xbox</a>
        <a href="#">Retro</a>
      </div>
    </div>
  );
}
