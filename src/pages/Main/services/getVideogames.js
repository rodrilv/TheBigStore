import { AXIOS } from "../../../environment";

export const getHomeVideogames = async () => {
  return AXIOS.get("videogames/home");
};
