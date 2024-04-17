import { Card } from "../../components";
import { videogames } from "../../helpers/static";
import { useDispatch } from "react-redux";
import { videogamesSlice } from "../../features/videogamesSlice";

import "./Main.scss";

export default function Main() {
  return (
    <div className="main">
      <div>
        <div className="main-section">
          <h2>Novedades</h2>
        </div>

        <div className="main-grid">
          {videogames.map((game, index) => {
            return <Card key={index} {...game} />;
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
}
