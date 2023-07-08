import axios from "axios"


export const getMoreGames = async (counter: string) => {
    try {
        console.log('Entro aca')
        const apiData = await axios.get(`http://localhost:3001/games/${counter}`)
        console.log(apiData)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}