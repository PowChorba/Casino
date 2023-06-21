import { Prop,Schema,SchemaFactory} from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose"

export type UserDocument = HydratedDocument<Users>

@Schema()
export class Users {
    @Prop({required:true, unique: true})
    email: string

    @Prop({required:true})
    password: string

    @Prop({required:true, unique: true})
    nickname: string
}

export const UserSchema = SchemaFactory.createForClass(Users)