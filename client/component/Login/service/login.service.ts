import { UserLogin } from "@/type"
import axios from "axios"

export const loginService = async (data: UserLogin) =>{
    try {
        const apiData = await axios.post('http://localhost:3001/users', data)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}