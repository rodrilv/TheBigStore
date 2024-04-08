import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { videogames } from "../../helpers/static";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import "../Main/Main.scss";

export default function SearchProduct() {
  const [searchedGames, setSearchedGames] = useState([]);
  const params = useParams();

  useEffect(() => {
    setSearchedGames(
      videogames.filter((game) =>
        game.title.toLowerCase().includes(params.title.toLocaleLowerCase())
      )
    );
  }, [params.title]);

  return (
    <div>
      <Navbar />
      <div className="main-grid">
        {searchedGames.map((game, index) => {
          return (
            <Card
              key={index}
              title={game.title}
              platform={game.platform}
              state={game.state}
              price={game.price}
              image={game.image}
            />
          );
        })}
      </div>
    </div>
  );
}
