import axios from "axios";


const API_URL = `https://627c69afe5ac2c452aefc225.mockapi.io/api`

export default async function apiCaller(endpoint, method = 'GET', body) {
    try {
        return await axios({
            method: method,
            url: `${API_URL}/${endpoint}`,
            data: body,
        });
    } catch (err) {
        console.log(err.message);
    }
}