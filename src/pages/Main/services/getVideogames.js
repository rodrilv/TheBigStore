import { AXIOS } from "../../../environment";

export const getRecentVideogames = async () => {
  return (await AXIOS.get("public/videogames/recent")).data?.data?.products;
};

export const getHighScoreVideogames = async () => {
  return (await AXIOS.get("public/videogames/highScore")).data?.data?.products;

}
