import { UserRegister } from "@/type"
import axios from "axios"

export const registerSubmit = async (data: UserRegister) => {
    try {
        console.log('Formulario')
        const apiData = await axios.post('http://localhost:3001/users', data)
        console.log(apiData.data)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}