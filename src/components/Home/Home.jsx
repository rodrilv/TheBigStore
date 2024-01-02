import React from "react";
import Card from "../Card/Card";
import Main from "../Main/Main";
import { videogames } from "../../helpers/static";
import Navbar from "../../components/Navbar/Navbar";

export default function Home({ prop1, prop2 }) {
  return (
    <div>
      <Navbar />
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
