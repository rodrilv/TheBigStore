import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { FaSearch } from "react-icons/fa";
import { FaPlaystation, FaXbox } from "react-icons/fa";
import { SiApplearcade } from "react-icons/si";
import { setSearch } from "../../features/searchSlice";
import { useSelector, useDispatch } from "react-redux";
export default function Navbar() {
  const { search } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (event) => {
    console.log(search);
    if (event.key === "Enter") {
      if (!search) return;
      navigate(`/search/${search}`);
    }
  };

  return (
    <>
      <div className="navbar">
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
            value={search}
            onChange={(event) => {
              if (!event.target.value) {
                navigate("/");
              }
              dispatch(setSearch(event.target.value));
            }}
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
        ></div>
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
          <p>Retro</p>
        </a>
      </div>
    </>
  );
}
