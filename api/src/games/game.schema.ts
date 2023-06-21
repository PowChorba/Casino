import { Prop,Schema,SchemaFactory} from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose"

export type GamesDocument = HydratedDocument<Games>

@Schema()
export class Games {
    @Prop()
    title: string

    @Prop()
    proveeder: string

    @Prop()
    img: string

    @Prop()
    iframe: string
}

export const GamesSchema = SchemaFactory.createForClass(Games)