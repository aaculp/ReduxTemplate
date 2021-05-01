import axios from 'axios';

const URL_SERVER = "http://localhost:3001"

export const getPosts = async () => {
    try {
        const response = await axios.get(`${URL_SERVER}/posts`);
        console.log("api post data:", response)
        return {
            posts: response.data
        }
    } catch (error) {
        throw error
    }
}