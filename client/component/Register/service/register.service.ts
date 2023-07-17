import { UserRegister } from "@/type"
import axios from "axios"

export const registerSubmit = async (data: UserRegister) => {
    try {
        const apiData = await axios.post(process.env.PETICION_BACK + 'users', data)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}