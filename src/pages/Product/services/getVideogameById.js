import { AXIOS } from "../../../environment";

export const getVideogameById = async (videogameId) => {
  return (await AXIOS.get(`public/videogame/${videogameId}`)).data?.data[0];
};
