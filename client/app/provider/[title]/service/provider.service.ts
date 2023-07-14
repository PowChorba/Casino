import axios from "axios"

export const getProvider = async (title: string) => {
    try {
        const apiData = await axios.get( process.env.PETICION_BACK + `provider/${title}`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}