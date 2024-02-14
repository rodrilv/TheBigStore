import { Card } from "../../components";
import { videogames } from "../../helpers/static";
import { useDispatch } from "react-redux";
import { videogamesSlice } from "../../features/videogamesSlice";

import "./Main.scss";

export default function Main() {
  return (
    <div className="main">
      <div>
        <h2>Novedades</h2>
        <div style={{ backgroundColor: "#324377" }} className="main-grid">
          {videogames.map((game, index) => {
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
      <div></div>
    </div>
  );
}
