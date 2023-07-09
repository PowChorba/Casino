import axios from "axios"

export const getProvider = async (title: string) => {
    try {
        const apiData = await axios.get(`http://localhost:3001/provider/${title}`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}