import { AXIOS } from "../../../environment";

export const getVideogamesByName = async (name) => {
  return (await AXIOS.get(`public/videogames/${name}`)).data.data;

}