import axios from "axios"


export const getMoreGames = async (counter: string) => {
    try {
        console.log('Entro aca')
        const apiData = await axios.get(process.env.PETICION_BACK + `/games/${counter}`)
        console.log(apiData)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}