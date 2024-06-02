import { AXIOS } from "../../../environment";

export const getVideogameById = async (id) => {
    return (await AXIOS.get("public/videogame")).data?.data?.products;
}