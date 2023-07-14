import { UserLogin } from "@/type"
import axios from "axios"

export const loginService = async (data: UserLogin) =>{
    try {
        const apiData = await axios.post( process.env.PETICION_BACK + '/users', data)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}