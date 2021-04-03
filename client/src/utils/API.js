import axios from "axios";
import env from "react-dotenv";

export const searchGames = query => {
    return axios.get(`https://api.rawg.io/api/games?key=${env.API_KEY}&search=${query}`);
};
export const getGamelib = id => {
    return axios.get(`GET https://api.rawg.io/api/games/${id}?key=${env.API_KEY}`)
};

export default searchGames;