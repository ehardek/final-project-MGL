import axios from "axios";
import env from "react-dotenv"

export const searchGames = query => {
    // return axios.get("https://api.rawg.io/api/games?key=",{params:{q:query}})
    return axios.get(`https://api.rawg.io/api/games?key=${env.API_KEY}&search=${query}`)
};

export default searchGames;