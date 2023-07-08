import axios from "axios"

export const providerRequest = async () => {
    try {
        const api = await axios.get('http://localhost:3001/provider')
        return api.data
    } catch (error) {
        console.log(error)
    }
}

export const gamesRequest = async () => {
    try {
        const api = await axios.get('http://localhost:3001/games/1')
        return api.data
    } catch (error) {
        console.log(error)
    }
}