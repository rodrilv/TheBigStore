import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "../../components";
import { getHomeVideogames } from "./services";
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

  const getHome = async (slug) => {
    return await getHomeVideogames(slug);
  };

  useEffect(() => {
    if (!verifyStore()) {
      getHome("recent").then((result) => {
        return dispatch(setRecent(result));
      });
      getHome("highScore").then((result) => {
        return dispatch(setHighScore(result));
      });
    }
  }, []);

  /* useEffect(() => {
  const lazyLoadComponents = document.querySelectorAll(".main-section lazy");
    const onChange = (entries, observer) => {
      entries.forEach((entry) => {
        console.log(entry);

        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          getHome(entry.target.id).then((videogames) => {
            dispatch(setRecent(videogames));
          });
        }
      });
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: "50px",
    });

    lazyLoadComponents.forEach((component) => {
      observer.observe(component);
    });

    return () => observer.disconnect();
  }); */

  return (
    <div className="main">
      <div className="main-title">
        <h2>Lo más reciente</h2>
      </div>
      <div id="recent" className="main-section">
        {recent[0] ? (
          recent.map((game, index) => {
            return <Card key={index} {...game} />;
          })
        ) : (
          <div className="main-loader card-loader-container">
            <span className="card-loader"></span>
          </div>
        )}
      </div>

      <div className="main-title">
        <h2>Aclamados por la crítica</h2>
      </div>
      <div id="highScore" className="main-section">
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
      <div className="main-title">
        <h2>Usados... ¡Pero garantizados!</h2>
      </div>
    </div>
  );
}
