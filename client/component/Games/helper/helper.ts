import axios from "axios"


export const getMoreGames = async (counter: string) => {
    const peticionBack = process.env.PETICION_BACK
    try {
        console.log('Entro aca', process.env.PETICION_BACK)
        const apiData = await axios.get(peticionBack + `games/${counter}`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}