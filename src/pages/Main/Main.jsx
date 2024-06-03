import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "../../components";
import { getRecentVideogames, getHighScoreVideogames } from "./services";
import { setRecent, setHighScore } from "../../features/videogamesSlice";
import "./Main.scss";

export default function Main() {
  const { recent } = useSelector((state) => state.videogames);
  const { highScore } = useSelector((state) => state.videogames);

  const dispatch = useDispatch();

  const verifyStore = () => {
    if (recent.length > 1 && highScore.length > 1) {
      return true;
    }

    return false;
  };

  const getRecent = async () => {
    return await getRecentVideogames();
  };

  const getHighScore = async () => {
    return await getHighScoreVideogames();
  };

  useEffect(() => {
    if (!verifyStore()) {
      getRecent().then((videogames) => {
        dispatch(setRecent(videogames));
      });
      getHighScore().then((videogames) => {
        dispatch(setHighScore(videogames));
      });
    }
  }, []);

  return (
    <div className="main">
      <div>
        <div className="main-section">
          <h2>Lo más reciente</h2>
        </div>

        <div className="main-grid">
          {recent[0] ? (
            recent.map((game, index) => {
              return <Card key={index} {...game} />;
            })
          ) : (
            <div className="card-loader-container">
              <span className="card-loader"></span>
            </div>
          )}
        </div>

        <div className="main-section">
          <h2>Aclamados por la crítica</h2>
        </div>

        <div className="main-grid">
          {highScore[0] ? (
            highScore.map((game, index) => {
              return <Card key={index} {...game} />;
            })
          ) : (
            <div className="card-loader-container">
              <span className="card-loader"></span>
            </div>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
}
