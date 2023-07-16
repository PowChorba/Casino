import axios from "axios"


export const getMoreGames = async (counter: string) => {
    const peticionBack = process.env.PETICION_BACK
    try {
        console.log('Entro aca', process.env.PETICION_BACK)
        const apiData = await axios.get('http://localhost:3001/' + `games/${counter}`)
        // const apiData = await axios.get('https://casino-production-3e95.up.railway.app/' + `games/${counter}`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}