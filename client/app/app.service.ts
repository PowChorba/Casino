import axios from "axios"

export const providerRequest = async () => {
    try {
        const api = await axios.get(process.env.PETICION_BACK +'provider')
        return api.data
    } catch (error) {
        console.log(error)
    }
}

export const gamesRequest = async () => {
    try {
        const api = await axios.get(process.env.PETICION_BACK +'games/1')
        return api.data
    } catch (error) {
        console.log(error)
    }
}