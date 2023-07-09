import axios from "axios"

export const individualGame = async (title:string) => {
    try {
        // const titleComplete = title.replace('%20', ' ')
        const apiData = await axios.get(`http://localhost:3001/games/title/${title}`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}