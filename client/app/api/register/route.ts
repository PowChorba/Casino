import { userData } from "@/helper.service";
import { UserRegister } from "@/type";


export async function POST(request: UserRegister) {
    const {email, password, nickname} = request

    const newUser = await userData({email,password,nickname})
    return newUser
}