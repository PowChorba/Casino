import axios from "axios"

export const individualGame = async (title:string) => {
    try {
        // const titleComplete = title.replace('%20', ' ')
        const apiData = await axios.get(process.env.PETICION_BACK +`${title}`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}