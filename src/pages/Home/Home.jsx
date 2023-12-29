import React from "react";
import { Card } from "../../components";
import { Main } from "../";
import { videogames } from "../../helpers/static";

export default function Home({ prop1, prop2 }) {
  return (
    <div>
      <Main>
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
      </Main>
    </div>
  );
}
