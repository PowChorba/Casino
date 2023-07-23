import axios from "axios"
import { UserLogin, UserRegister } from "./type"


export const userData = async (data: UserRegister | UserLogin) => {
    try {
        const apiData = await axios.post(process.env.PETICION_BACK + 'users', data)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}