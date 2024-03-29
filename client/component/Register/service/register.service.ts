import { UserRegister } from "@/type"
import axios from "axios"

export const registerSubmit = async (data: UserRegister) => {
    try {
        const apiData = await axios.post('https://casino-production-3e95.up.railway.app/' + 'users', data)
        // const apiData = await axios.post('http://localhost:3001/' + 'users', data)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}