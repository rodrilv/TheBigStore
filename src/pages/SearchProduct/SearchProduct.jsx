import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { videogames } from "../../helpers/static";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import "../Main/Main.scss";
import { getVideogamesByName } from "./services";

export default function SearchProduct() {
  const [searchedGames, setSearchedGames] = useState([]);
  const params = useParams();

  const getVideogames = () => {
    const name = params.title.toLowerCase();
    getVideogamesByName(name).then((videogames) => {
      setSearchedGames(videogames);
    });
  };

  useEffect(() => {
    getVideogames();
  }, [params.title]);

  return (
    <div>
      <Navbar />
      <div id="recent" className="main-section">
        {searchedGames[0] ? (
          searchedGames.map((game, index) => {
            return <Card key={index} {...game} />;
          })
        ) : (
          <div className="main-loader card-loader-container">
            <span className="card-loader"></span>
          </div>
        )}
      </div>
    </div>
  );
}
