import { AXIOS } from "../../../environment";

export const getHomeVideogames = async (slug) => {
  //recent, highScore
  return (await AXIOS.get(`public/videogames/${slug}`)).data?.data?.products;
};
