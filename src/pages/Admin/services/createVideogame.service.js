import { AXIOS } from '../../../environment';

const TOKEN = localStorage.getItem('token');

export const createVideogame = (videogame) => {
    return AXIOS.post('videogames', videogame, {
        headers: {
            Authorization: TOKEN
        }
    })
}